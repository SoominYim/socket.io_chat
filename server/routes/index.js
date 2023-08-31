const express = require("express");
const router = express.Router;
const { postApi } = require("../modules/api.js");
const Pool = require("../modules/pool");
const { uploadImg, uploadVideo } = require("(../modules/multer");

// 채팅 목록 불러오기
router.post("get_chat_rooms", (req, res, next) => {
    let data = [req.body.params];
    postApi("sp_admin_get_chat_rooms", data, res);
});

// 채팅 내용 불러오기
router.post("/get_chats", async (req, res, next) => {
    try {
        const data = [req.body.params];
        await postApi("sp_admin_retrieve_chats", data, res);
    } catch (e) {
        console.log(e);
    }
});

// 채팅을 입력했을때 저장
router.post("/insert_chat ", async (req, res, next) => {
    try {
        const roomId = JSON.parse(req.body.params)[0].ROOM_ID;
        const rawData = JSON.parse(req.body.params)[0];
        const size = req.app.get("io").sockets.adapter.rooms.get(roomId).size;

        let flg = 0;
        if (size < 2) {
            flg = 1;
            rawData["IS_READ"] = 0;
        } else {
            rawData["IS_READ"] = 1;
        }
        const addData = JSON.stringify([rawData]);
        const address = "sp_admin_insert_chat";
        const pool = new Pool();
        var sql = `CALL ${address}(?)`;

        if (addData == null) sql = `CALL ${address}()`;
        pool.execute((conn) => {
            conn.queryAsync(sql, addData, (error, rows) => {
                if (error) {
                    return console.error(error.message);
                } else {
                    const payload = {
                        state: rows[0][0]["rtn_val"],
                        massage: rows[0][0]["msg_txt"],
                        addData: JSON.parse(rows[0][0]["json_data"]),
                    };
                    req.app.get("io").to(roomId).emit("chat", payload.addData[0]);
                    if (flg) {
                        req.app.get("io").to(`${roomId}-1`).emit("reloadChatRooms");
                    }
                    res.send("ok");
                }
            });
            pool.end();
        });
    } catch (e) {
        console.log(e);
    }
});

// 이미지와 동영상을 보냈을때 처리
router.post("/upload_img_to_s3", uploadImg.array("file"), (req, res, next) => {
    let urlArr = [];
    req.files.forEach(async (v) => {
        urlArr.push(v.location);
    });
    res.send(urlArr);
});

router.post("upload_video_to_s3", uploadVideo.single("file"), (req, res, next) => {
    const url = req.file.location;
    res.send(url);
});

// 채팅 삭제 했을때 처리
router.post("/delete_chats", async (req, res, next) => {
    try {
        const data = [req.body.params];
        await postApi("sp_admin_delete_chat", data, res);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
