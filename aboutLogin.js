/**
 * Created by luoming on 2018/2/26
 *
 * cookie、session与token
 *
 * XSS：跨站脚本（Cross-site scripting）
 * CSRF:跨站请求伪造（Cross-site request forgery）
 *
 *
 * HTTP是一个无状态协议，客户端每次发出请求时，下一次请求无法得知上一次请求所包含的状态数据，如何能把一个用户的状态数据关联起来呢？
 * 因此，诞生了cookie、session与token等技术
 *
 *
 * 1，cookie
 *              一，cookie是以key-value的形式存在的，并且必须包含这部分；
 *              二，可选参数一：path：表示 cookie 影响到的路径，匹配该路径才发送这个 cookie。
 *                  可选参数二：expires 和 maxAge：告诉浏览器这个 cookie 什么时候过期，expires 是 UTC 格式时间，maxAge
 *                              是 cookie 多久后过期的相对时间。当不设置这两个选项时，会产生 session cookie，
 *                              session cookie 是 transient 的，当用户关闭浏览器时，就被清除。一般用来保存 session 的 session_id
 *                  可选参数三：secure：当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效。
 *                  可选参数四：httpOnly：浏览器不允许脚本操作 document.cookie 去更改 cookie。一般情况下都应该设置这个为 true，这样可以避免被 xss 攻击拿到 cookie。
 *              三，cookie默认无法跨域传递，如果需要跨域传递cookie的话，前后端都需要进行相应设置
 *                              前端：设置withCredentials属性为true；
 *                              后端：res.setHeader("Access-Control-Allow-Origin", origin);//origin不能为 * 而只能为单一域名
 *                                    res.setHeader("Access-Control-Allow-Credentials", "true");// 允许客户端携带跨域cookie
 *
 *                  前端登录后，将登录名密码发送到后台，后台验证通过了 生成一个唯一标志写入到浏览器cookie，后面浏览器再进行http请求时
 *              会在请求头里面带上属于这个域名的cookie，其他的cookie不会
 *
 *
 * 2，session
 *              session（会话）技术相对于cookie安全性更高，cookie保存在浏览器中，session保存在服务器中，含有用户的登录信息，这份登录信息
 *              有一个与之对应的session_id 保存在 cookie 中，浏览器发出http请求时带上cookie，服务器查找cookie中是否含有session_id
 *
 *              一，session数据保存在服务器上，当访问增多会占用服务器的性能
 *              二，因为session数据保存在服务器上，当使用了负载均衡时，后续的请求 可能会丢失session
 *              三，浏览器关闭，session_id 清除
 *
 * 3，token
 *              Token是用户的验证方式,最简单的token组成:uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名，由token的前几位+盐以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接token请求服务器)。
 */
