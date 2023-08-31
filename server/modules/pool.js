const mysql = require("mysql");
const util = require("util");
const Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_INFO = {
    host: "localhost",
    user: "root",
    password: "6431",
    database: "chat",
    port: "3306",
};

module.exports = class {
    constructor(dbinfo) {
        dbinfo = dbinfo || DB_INFO;
        this.pool = mysql.createPool(dbinfo);
    }
    connect() {
        return this.pool.getConnectionAsync().disposer((conn) => {
            return conn.release();
        });
    }
    end() {
        this.pool.end(function (err) {
            if (err) {
                util.log("ERR pool ending!!");
            }
        });
    }
    execute(fn) {
        Promise.using(this.connect(), (conn) => {
            fn(conn);
        });
    }
};
