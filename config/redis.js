'use strict';
module.exports = ()=> {
    let RedisSettings = {
        host: '127.0.0.1',
        port: 6379,
        expires: 60 * 60,
        opts: {
            connect_timeout: 1000 * 5,
        }
    }
    return RedisSettings
}
