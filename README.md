# naivemusic_backend

## [POST] /login 登录操作
参数:     
* code:  wx.login返回的res里面的code  <br>
  用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息 <br>
  参考: https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
  
* user: userInfo
  https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html

返回:
HTTP 200
```json
 {
  "success": true,
  "token": "TOKEN "
}
```

实例: https://github.com/lixworth/BlessingTodo-wx/tree/master/pages/login

## [GET] /user 获取
参数: token加入请求头
返回: 
* 401 未登录或token失效
* 200 用户信息