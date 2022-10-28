/*
图书抢卷

[task_local]
#图书
58 59 8,12,17,19,23 * * * https://raw.githubusercontent.com/gaofeicm/jd/jd_books.js, tag=京东, enabled=true
*/
const $ = new Env('抢图书全品卷');
const moment = require('moment');
//进容器安装依赖： npm install -g moment
const notify = $.isNode() ? require('../sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('../function/jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
const randomCount = $.isNode() ? 30 : 5;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
//bodys
let bodys = {};
bodys["400-50"] = "body=%7B%22activityId%22:%2246Vsus7SpKRgDbyAUitFHeBJnthu%22,%22scene%22:%221%22,%22args%22:%22key=EC32FD14F1D3FF62A1150A33743206C18691FB1AE67567AFC2E524E25B69D16097DE9F7361F06DA226C4742EBAA03456_bingo,roleId=1E99D9E3D6D2867EB3535CDFE81566C6_bingo,strengthenKey=23E54392244AB3FDF77741AAA3B45355EC4D1FB0BE692A59883FE80BF1050CBCE364B6498FEFC3583EF3D127193C24F7_bingo%22,%22platform%22:%221%22,%22orgType%22:%222%22,%22openId%22:%22-1%22,%22pageClickKey%22:%22-1%22,%22eid%22:%22THIKT6UGMBZZEU4HI5AVPP2FZTC6T4KEVY4UMWK7WZ7XRWNSL7XIKY44X7DAOJ25U56LFNNRDCKGQCTETFUR6PEIDY%22,%22fp%22:%22e470d450023d74cec76008e0f6aef682%22,%22shshshfp%22:%227c76e636fc3692163df0ad5abcb29cad%22,%22shshshfpa%22:%22003b224c-460b-d4d7-afc6-42819bbf4397-1607913047%22,%22shshshfpb%22:%22p4M+T9gtlthOcs1QUfQTeIQ==%22,%22childActivityUrl%22:%22https%253A%252F%252Fprodev.m.jd.com%252Fmall%252Factive%252F46Vsus7SpKRgDbyAUitFHeBJnthu%252Findex.html%253Fcu%253Dtrue%2526utm_source%253Dwww.gaofeicm.cf%2526utm_medium%253Djingfen%2526utm_campaign%253Dt_1000228052_%2526utm_term%253D61bd3ced843a43c2b479aa5be9307fad%22,%22userArea%22:%22-1%22,%22client%22:%22-1%22,%22clientVersion%22:%22-1%22,%22uuid%22:%22-1%22,%22osVersion%22:%22-1%22,%22brand%22:%22-1%22,%22model%22:%22-1%22,%22networkType%22:%22-1%22,%22jda%22:%22122270672.1607913046991251934754.1607913047.1647790657.1647824666.255%22,%22pageClick%22:%22Babel_Coupon%22,%22couponSource%22:%22manual%22,%22couponSourceDetail%22:%22-100%22,%22channel%22:%22%E9%80%9A%E5%A4%A9%E5%A1%94%E4%BC%9A%E5%9C%BA%22,%22batchId%22:%22845563526%22,%22headArea%22:%22605715ec560d6508f7403b91b677d79c%22,%22sceId%22:%22TTTh5%22,%22rstr%22:%2231239662%22,%22sstr%22:%221647825094285~1CNZQcmTuMpMDFRY3FwZzAxMQ==.YFVFR19jV0dHXmZXRQ5fFjo0CC42V0goGWBPRlxRfVIPQhlgHQFEKno3SBcTPRcZPwQiUiAlAQA3FDk2bF4P.f50e77b9~6,1~0E5025F3BB2816923D58516907787463830564BA~1a9t3il~C~TRJHXRQPaRBRBRtxfxwBZh4KY299HFIcQhdvHhdCWF0RCm0XVgAYd3ocBGMaDWRrdBpXHEcSGhdWBhh3ehwEYxoNZGhmGlccRxJrGRBVR1gUCgIcFEZBEA8UBwYHBw4HBgQNBgcCCwQGAQEQGRRBVVcSDBdGRkFQUFZGVhQZEEVQVxQKEVZQQUZHQUNXEh8SRlFcEA9tBAkfBgIEHgMNGgEcABwGaB4QX1wUCgIcFFZBEA8UVAIBVAYAVgMEVQ9SBFFXU1QEVFIPVAdWBFQHVwxXUAIRHBRbQhAPFGFZXQMEFx4QQRQMAQUEAQ0ABwUPAgILBRoXWFkXDBRRERwUU0JQFwwUQAd9HWELVUFaQlh8U0UEY2dTZ2JVemELCBAeF1hAEgkScVpdVVlTFnldUxgXHhBbV0ASCRJVFx4QRlVEEglrBwUKAhkHDwIDbRoXQF0XDG0SUhIaF1MQGRRXEh8SVxceEFQUGhJSEhoXUxBoGhRZXFEUDxBUU1BQVlVEQhceEFRcFAoRRRQZEFFcFAwSRAMYARwBFxoUU1VvQBcIEAUHFBwRUlIXCBBHV1hUXF0LBgMABg8ABgESGhdfWBcMbQEfAgMNHgNoGhRSX19RFwgQVBQaEl5DURcIEFQUSw==~0jmcreh%22,%22mitemAddrId%22:%22%22,%22geo%22:%7B%22lng%22:%22%22,%22lat%22:%22%22%7D,%22addressId%22:%22%22,%22posLng%22:%22%22,%22posLat%22:%22%22,%22jdv%22:%22www.gaofeicm.cf%7Ct_1000228052_%7Cjingfen%7C61bd3ced843a43c2b479aa5be9307fad%22,%22focus%22:%22%22,%22innerAnchor%22:%22%22,%22cv%22:%222.0%22%7D&screen=1080*2037&client=wh5&clientVersion=1.0.0&sid=09571f8cb5e6b57f5a5fa2a1f7d1f3a1&uuid=15335180037722047506909&area=&_=1533529888064&callback=jsonp3&accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2NDQ1NjY3ODUsImciOiJVbFhxZ2JaYmdPQUI2ZkI5IiwiaWF0IjoxNjQ0NTY2NDg1LCJ1c2VySWQiOi0xNzUzNDAwOTE4fQ.CBt0W70DAAeXymkahJmb7rQofha2s14rJei9RbetUT8";
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
    return;
  }
  await wait(100)
  for (let j = 0; j < randomCount; ++j)
    for (let i = 0;  i < cookiesArr.length; i++) {
      if (cookiesArr[i]) {
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        $.index = i + 1;
        let account = `***京东账号${$.index} ${$.UserName}***`;
        $.isLogin = true;
        $.nickName = '';
        message = '';
        await qiang(account);
      }
    }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function qiang(account) {
  await exchange(account)
}

function qiang(account) {
  return new Promise(async resolve => {
  	for (let key in bodys){
	    await $.post(taskUrl(bodys[key]), (err, resp, data) => {
	      try {
	        if (err) {
	          console.log(`${JSON.stringify(err)}`)
	          console.log(`${$.name} user/exchange/bean API请求失败，请检查网路重试\n`)
	        } else {
	          console.log(account + " " + moment().format("YYYY-MM-DD HH:mm:ss.SSS") + " " + `图书券面额：${key}`);
	          console.log(`抢券结果：${executeResult(data)}\n`);
	        }
	      } catch (e) {
	        $.logErr(e, resp)
	      } finally {
	        resolve();
	      }
	    })
	}
  })
}

function taskUrl(body) {
  return {
    url: `https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection`,
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      'origin': 'https://prodev.m.jd.com',
      "Referer": "https://prodev.m.jd.com/",
      "Cookie": cookie,
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('../USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
    },
    body: body
  }
}

function executeResult(data){
	if(typeof data == "string"){
		let str = data.substring(7, data.length - 1);
		return str;
	}else{
		return data;
	}
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
