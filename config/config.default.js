'use strict';
const fs = require('fs');
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    config.keys = appInfo.name + '_1619936547355_8672';

    config.middleware = [];

    config.mysql = {
        client: {
            host: '82.156.188.193',
            port: '3306',
            user: 'naivemusic',
            password: '3x5bp7C2BxPwf2HR',
            database: 'naivemusic',
        },
        app: true,
        agent: false,
    };
    config.jwt = {
        secret: fs.readFileSync(path.resolve(__dirname,'../app/jwt_pub.pem')),
    };
    config.security = {
        csrf:{
            enable: false
        }
    };

    const userConfig = {
        // myAppName: 'egg',
        wechat_appid: "wxa415a36570d23f41",
        wechat_secret: "42f7b8c2465987b90c15da1fbaf7e1c3",
        // api: "https://domain/api.php"
    };

    return {
        ...config,
        ...userConfig,
    };
};
