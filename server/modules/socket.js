module.exports = (server, app) => {
    // app.set에 io라는 이름으로 설정해두어서 request가 오면 request안에서 io를 사용할 수 있도록 설정
    var io = require("socket.io")(server, {
        cors: {
            credentials: true,
        },
        allowEI03: true,
    });
    app.set("io", io);

    io.on("connection", function (socket) {
        console.log("Connect from Client: ", socket.id);
        let roomId = "";
        // 채팅을 삭제하였을 때 클라이언트 측에서 소켓 서버측으로 emit을 날리는 이벤트
        socket.on("didYouDelete", function (data) {
            socket.to(data.roomId).emit("yesDelete");
            socket.to(`${data.roomId}-1`).emit("yesDeleteForRoomList");
        });
        // 상대방이 현재 로그인 했는지 확인할 수 있는 기능
        // data의 값으로 로그인 한 유저 자신이 속해 있는 채팅방 목록 (방번호-1)들을 담아 보낸 뒤 그 for문을 돌려 하나씩 그 방이 현재 존재하는지 확인
        // io.sockets.adapter.rooms.get(data[i] 만약 없다면 undefined가 나온다. ) 이로 인해서 undefined가 나오지 않으면 상대방이 현재 접속해 있다는 것을 확인할 수 있다
        // 렇게 필터링 된 값들을 다시 클라이언트 소켓으로 보내고 클라이언트는 이 값을 바탕으로 프론트에 그려줄 수 있다.
        socket.on("areYouInApp", function (data) {
            let usersInApp = [];
            for (i = 0; i < data.length; i++) {
                if (io.sockets.adapter.rooms.get(data[i])) {
                    usersInApp.push(data[i]);
                }
            }
            socket.emit("imOnApp", usersInApp);
        });
        // 자신이 채팅방에 들어갔을 때 실행되는 이벤트
        // data에 해당 방 번호가 들어있다. 이 값을 사용하여 join으로 방에 입장하자.
        // 단  방에 입장하기 전에, 상대방이 현재 그 방에 있고, 미리 보낸 메시지가 있을 수도 있기 때문에 ( 안읽음 표시 )
        // 안읽음 표시를 제거해주기 위해서 reload를 해주는 이벤트를 먼저 일으킨다.
        socket.on("joinRoom", function (data) {
            roomId = data;
            console.log(socket.id + "님이", data + "번 방에 입장");

            if (onoffline.sockets.adapter.rooms.jet(roomId) != undefined) {
                io.to(data).emit("reload");
            }
            socket.join(data);
        });
        // 방에서 나갈 때의 이벤트
        socket.on("leaveRoom", function (data) {
            console.log(socket.id + "님이", data + "번 방에서 퇴장");
            socket.leave(data);
            roomId = data;
        });

        // 소켓과 연결이 끊겼을 때 발생하는 이벤트
        socket.on("disconnect", () => {
            console.log(socket.id + "님의 연결 끊김");
        });
    });
};
