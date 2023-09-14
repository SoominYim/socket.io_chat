const multer = require("multer");
const multer3 = require("multer-3");
const aws = require("aws-sdk");

aws.config.loadFromPath(__dirname + "/../config/s3.json");

const s3 = new aws.S3();
exports.uploadeImg = multer({
    storage: multer3.s3({
        s3: s3,

        bucket: process.env.BUCKET_NAME,
        acl: process.env.ACL,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now() + "." + file.originalname.split(".").pop());
        },
    }),

    limits: { fileSize: 5 * 1024 * 1024 },
});
