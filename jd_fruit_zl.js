/*
东东水果:脚本更新地址 jd_fruit_zl.js
更新时间：2022-02-16
活动入口：京东APP我的-更多工具-东东农场助力
东东农场活动链接：https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
互助码shareCode请先手动运行脚本查看打印可看到
一天只能帮助3个人。多出的助力码无效
==========================Quantumultx=========================
[task_local]
#jd免费水果
5 1,3 * * * jd_fruit.js, tag=东东农场助力, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdnc.png, enabled=true
=========================Loon=============================
[Script]
cron "5 1,3 * * *" script-path=jd_fruit.js,tag=东东农场助力

=========================Surge============================
东东农场助力 = type=cron,cronexp="5 1,3 * * *",wake-system=1,timeout=3600,script-path=jd_fruit.js

=========================小火箭===========================
东东农场助力 = type=cron,script-path=jd_fruit.js, cronexpr="5 1,3 * * *", timeout=3600, enable=true  2E2F555345525F4147454E5453

export DO_TEN_WATER_AGAIN="" 默认再次浇水

*/
const $ = new Env('东东农场助力');
var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxdae04 = ["", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E", "\x69\x73\x4E\x6F\x64\x65", "\x2E\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x6A\x64\x43\x6F\x6F\x6B\x69\x65\x2E\x6A\x73", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x65\x6E\x76", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\u643A\u8DA3\u4EE3\u7406\u7528\u6237\u540D", "\u643A\u8DA3\u4EE3\u7406\u5BC6\u7801", "\u4EE3\u7406\x49\x50", "\u4EE3\u7406\u7AEF\u53E3", "\x3A", "\x78\x69\x65\x71\x75", "\x54\x72\x75\x65", "\u4EE3\u7406\u4E0D\u80FD\u8DD1\x20\u8BD5\u8BD5\u5B89\u88C5\u4F9D\u8D56\x20\x20\x64\x6F\x63\x6B\x65\x72\x20\x65\x78\x65\x63\x20\x2D\x69\x74\x20\x51\x4C\x20\x62\x61\x73\x68\x20\x2D\x63\x20\x22\x79\x61\x72\x6E\x20\x61\x64\x64\x20\x73\x75\x70\x65\x72\x61\x67\x65\x6E\x74\x22\x20\x20", "\x73\x75\x70\x65\x72\x61\x67\x65\x6E\x74", "\x73\x75\x70\x65\x72\x61\x67\x65\x6E\x74\x2D\x70\x72\x6F\x78\x79", "\x70\x72\x6F\x78\x79\x55", "\u672A\u8BFB\u53D6\u5230\u73AF\u5883\u53D8\u91CF\x20\x70\x72\x6F\x78\x79\x55\x2C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u6DFB\u52A0\u4F60\u7684\u643A\u8DA3\u4EE3\u7406\u3010\u7528\u6237\u540D\u3011\x70\x72\x6F\x78\x79\x55", "\x20\u83B7\u53D6\u5230\u4F60\u7684\u643A\u8DA3\u4EE3\u7406\u3010\u7528\u6237\u540D\u3011\uFF1A\x20", "\x70\x72\x6F\x78\x79\x50", "\u672A\u8BFB\u53D6\u5230\u73AF\u5883\u53D8\u91CF\x20\x70\x72\x6F\x78\x79\x50\x2C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u6DFB\u52A0\u4F60\u7684\u643A\u8DA3\u4EE3\u7406\u3010\u5BC6\u7801\u3011\x70\x72\x6F\x78\x79\x50", "\x20\u83B7\u53D6\u5230\u4F60\u7684\u643A\u8DA3\u4EE3\u7406\u3010\u5BC6\u7801\u3011\uFF1A\x20", "\x69\x70\x55\x72\x6C", "\u672A\u8BFB\u53D6\u5230\u73AF\u5883\u53D8\u91CF\x20\x69\x70\x55\x72\x6C\x2C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u6DFB\u52A0\u4F60\u7684\u643A\u8DA3\u4EE3\u7406\u3010\x49\x50\u63D0\u53D6\u5730\u5740\u3011\x69\x70\x55\x72\x6C\x20", "\x20\u8BBF\u95EE\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x78\x69\x65\x71\x75\x2E\x63\x6E\x2F\x72\x65\x64\x69\x72\x65\x63\x74\x2E\x61\x73\x70\x78\x20\x20\x3E\x3E\x20\u5DF2\u8D2D\u4EA7\u54C1\x20\x3E\x3E\x20\x41\x50\x49\u63D0\u53D6\x20\x3E\x3E\x20\u9009\u62E9\u63D0\u53D6\u6570\u91CF\x3A\x20\x31\u3001\u9009\u62E9\x49\x50\u534F\u8BAE\uFF1A\x48\x54\x54\x50\x2F\x48\x54\x54\x50\x53\u3001\u9009\u62E9\u8FD4\u56DE\u683C\u5F0F\uFF1A\x4A\x53\x4F\x4E\u3001\u5176\u4ED6\u968F\u610F\x20\x3E\x3E\x20\u751F\u6210\u94FE\u63A5", "\x20\u83B7\u53D6\u5230\u4F60\u7684\u643A\u8DA3\u4EE3\u7406\u3010\x49\x50\u63D0\u53D6\u5730\u5740\u3011\uFF1A\x20", "\u643A\u8DA3\u4EE3\u7406\u6CE8\u518C\u5730\u5740\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x78\x69\x65\x71\x75\x2E\x63\x6E\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C\x3F\x32\x66\x34\x66\x66\x36\x39\x30", "\u5982\u9700\u5F00\u542F\u4EE3\u7406\uFF0C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u6DFB\u52A0\x20\x78\x69\x65\x71\x75\x20\u503C\x20\x54\x72\x75\x65", "\x31\x2E\x30\x2E\x30\x2E\x31", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x64\x77\x78\x78\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x6A\x64\x5F\x6A\x6F\x62\x2F\x77\x73\x6B\x65\x79\x2E\x74\x78\x74", "\u6743\u9650\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25", "\u5F53\u524D\u7248\u672C\u53F7\uFF1A", "\x69\x6E\x66\x6F", "\u6700\u65B0\u7248\u672C\u53F7\uFF1A", "\u8BF7\u52A0\u7FA4\uFF1A\x32\x31\x32\x37\x39\x36\x36\x36\x38\u3001\x36\x38\x31\x30\x33\x30\x30\x39\x37\x20\u5BFB\u627E\u6700\u65B0\u7248\u672C\u3010\u4EE3\u7801\u4EC5\u4F9B\u5B66\u4E60\uFF0C\u5207\u52FF\u4E71\u4F20\u4EE3\u7801\u3011", "\x0A\u7248\u672C\u8BA4\u8BC1\u901A\u8FC7\uFF0C\u5F53\u524D\u7248\u672C\uFF1A", "\x6C\x6F\x67\x45\x72\x72", "\x67\x65\x74", "\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68", "\x63\x6F\x64\x65", "\u643A\u8DA3\u4EE3\u7406\uFF1A", "\x6D\x73\x67", "\x64\x61\x74\x61", "\x49\x50", "\x50\x6F\x72\x74", "\x70\x72\x6F\x78\x79\x55\x72\x6C", "\x68\x74\x74\x70\x3A\x2F\x2F", "\x40", "\x74\x68\x65\x6E", "\x6A\x73\x6F\x6E", "\x22\x20\x4E\x6F\x74\x20\x41\x3B\x42\x72\x61\x6E\x64\x22\x3B\x76\x3D\x22\x39\x39\x22\x2C\x20\x22\x43\x68\x72\x6F\x6D\x69\x75\x6D\x22\x3B\x76\x3D\x22\x39\x38\x22\x2C\x20\x22\x47\x6F\x6F\x67\x6C\x65\x20\x43\x68\x72\x6F\x6D\x65\x22\x3B\x76\x3D\x22\x39\x38\x22", "\x3F\x30", "\x22\x57\x69\x6E\x64\x6F\x77\x73\x22", "\x31", "\x73\x74\x72\x69\x63\x74\x2D\x6F\x72\x69\x67\x69\x6E\x2D\x77\x68\x65\x6E\x2D\x63\x72\x6F\x73\x73\x2D\x6F\x72\x69\x67\x69\x6E", "\x47\x45\x54", "\x77\x61\x69\x74", "\x0A\u4E1C\u4E1C\u519C\u573A\x3A\x20\x41\x50\x49\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25\x20\u203C\uFE0F\u203C\uFE0F", "\x66\x75\x6E\x63\x74\x69\x6F\x6E\x5F\x69\x64\x3A", "\x70\x61\x72\x73\x65", "\x62\x6F\x64\x79\x3D", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x26\x61\x70\x70\x69\x64\x3D\x77\x68\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x31\x2E\x30", "\x2A\x2F\x2A", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39", "\x6E\x6F\x2D\x63\x61\x63\x68\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E", "\x65\x6D\x70\x74\x79", "\x63\x6F\x72\x73", "\x73\x61\x6D\x65\x2D\x73\x69\x74\x65", "\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54", "\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54", "\x2E\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53", "\x4A\x44\x55\x41", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x0A\u521D\u59CB\u5316\u519C\u573A\x2C\x20\u53EF\u83B7\u53D6\u679C\u6811\u53CA\u7528\u6237\u4FE1\u606F\x41\x50\x49\u3010\u5931\u8D25\u3011", "\x6D\x65\x73\x73\x61\x67\x65", "\x63\x61\x74\x63\x68", "\x66\x61\x72\x6D\x49\x6E\x66\x6F", "\x74\x65\x78\x74", "\x70\x72\x6F\x78\x79", "\x73\x65\x74", "\x73\x65\x6E\x64", "\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x6E\x69\x74\x46\x6F\x72\x46\x61\x72\x6D", "\x70\x6F\x73\x74", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\u274C\x20", "\x6E\x61\x6D\x65", "\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20", "\x21", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\x5C\x6E\u8BA4\u8BC1\u672A\u901A\u8FC7\x5C\x6E", "\x5C\x6E\u83B7\u53D6\u52A9\u529B\u7801\x5C\x6E", "\x6C\x65\x6E\x67\x74\x68", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x69\x73\x4C\x6F\x67\x69\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x5C\x6E", "\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548", "\u4EAC\u4E1C\u8D26\u53F7", "\x20", "\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6", "\x63\x74\x72\x54\x65\x6D\x70", "\x66\x61\x72\x6D\x55\x73\x65\x72\x50\x72\x6F", "\u521D\u59CB\u5316\u519C\u573A\u6570\u636E\u5F02\u5E38\x2C\x20\u8BF7\u767B\u5F55\u4EAC\u4E1C\x20\x61\x70\x70\u67E5\u770B\u519C\u573A\x30\u5143\u6C34\u679C\u529F\u80FD\u662F\u5426\u6B63\u5E38", "\u3010\u6570\u636E\u5F02\u5E38\u3011\u8BF7\u624B\u52A8\u767B\u5F55\u4EAC\u4E1C\x61\x70\x70\u67E5\u770B\u6B64\u8D26\u53F7", "\u662F\u5426\u6B63\u5E38", "\u4EFB\u52A1\u6267\u884C\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u6267\u884C\u65E5\u5FD7", "\x69\x6E\x69\x74\x46\x6F\x72\x54\x75\x72\x6E\x74\x61\x62\x6C\x65\x46\x61\x72\x6D\x52\x65\x73", "\x30", "\u662F\u5426\u5230\u4E86\u9886\u53D6\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\x2D\x2D\x2D\x2D", "\x72\x65\x6D\x61\x69\x6E\x4C\x6F\x74\x74\x65\x72\x79\x54\x69\x6D\x65\x73", "\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u672A\u5230\u65F6\u95F4", "\x34\u5C0F\u65F6\u5019\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u5DF2\u9886\u53D6", "\x74\x75\x72\x6E\x74\x61\x62\x6C\x65\x42\x72\x6F\x77\x73\x65\x72\x41\x64\x73", "\x73\x74\x61\x74\x75\x73", "\u5F00\u59CB\u6D4F\u89C8\u5929\u5929\u62BD\u5956\u7684\u7B2C", "\u4E2A\u901B\u4F1A\u573A\u4EFB\u52A1", "\x61\x64\x49\x64", "\x62\x72\x6F\x77\x73\x65\x72\x46\x6F\x72\x54\x75\x72\x6E\x74\x61\x62\x6C\x65\x46\x61\x72\x6D\x52\x65\x73", "\u7B2C", "\u4E2A\u901B\u4F1A\u573A\u4EFB\u52A1\u5B8C\u6210\uFF0C\u5F00\u59CB\u9886\u53D6\u6C34\u6EF4\u5956\u52B1\x5C\x6E", "\u4E2A\u901B\u4F1A\u573A\u4EFB\u52A1\u9886\u53D6\u6C34\u6EF4\u5956\u52B1\u5B8C\u6210\x5C\x6E", "\u6D4F\u89C8\u5929\u5929\u62BD\u5956\u7684\u7B2C", "\u4E2A\u901B\u4F1A\u573A\u4EFB\u52A1\u5DF2\u5B8C\u6210", "\u5F00\u59CB\u5929\u5929\u62BD\u5956\x2D\x2D\u597D\u53CB\u52A9\u529B\x2D\x2D\u6BCF\u4EBA\u6BCF\u5929\u53EA\u6709\u4E09\u6B21\u52A9\u529B\u673A\u4F1A\x2E", "\x73\x68\x61\x72\x65\x43\x6F\x64\x65", "\u5929\u5929\u62BD\u5956\x2D\u4E0D\u80FD\u81EA\u5DF1\u7ED9\u81EA\u5DF1\u52A9\u529B\x0A", "\x68\x65\x6C\x70\x52\x65\x73\x75\x6C\x74", "\x6C\x6F\x74\x74\x65\x72\x79\x4D\x61\x73\x74\x65\x72\x48\x65\x6C\x70\x52\x65\x73", "\u5929\u5929\u62BD\u5956\x2D\u52A9\u529B", "\x6D\x61\x73\x74\x65\x72\x55\x73\x65\x72\x49\x6E\x66\x6F", "\u6210\u529F\x5C\x6E", "\x31\x31", "\u5929\u5929\u62BD\u5956\x2D\u4E0D\u8981\u91CD\u590D\u52A9\u529B", "\x31\x33", "\u5931\u8D25\x2C\u52A9\u529B\u6B21\u6570\u8017\u5C3D\x5C\x6E", "\x2D\x2D\x2D\u5929\u5929\u62BD\u5956\u6B21\u6570\x72\x65\x6D\x61\x69\x6E\x4C\x6F\x74\x74\x65\x72\x79\x54\x69\x6D\x65\x73\x2D\x2D\x2D\x2D", "\u6B21", "\u5F00\u59CB\u62BD\u5956", "\x66\x69\x6C\x6C", "\x6C\x6F\x74\x74\x65\x72\x79\x52\x65\x73", "\x74\x79\x70\x65", "\x62\x65\x61\x6E", "\u4E2A\uFF0C", "\x77\x61\x74\x65\x72", "\uFF0C", "\u3010\u5929\u5929\u62BD\u5956\u3011", "\x73\x75\x62\x73\x74\x72", "\u5929\u5929\u62BD\u5956\x2D\x2D\u62BD\u5956\u673A\u4F1A\u4E3A\x30\u6B21", "\u521D\u59CB\u5316\u5929\u5929\u62BD\u5956\u5F97\u597D\u793C\u5931\u8D25", "\u5F00\u59CB\u52A9\u529B\u597D\u53CB", "\u52A9\u529B\u7801\u6570\u91CF\x3A", "\u5F00\u59CB\u52A9\u529B\u4EAC\u4E1C\u8D26\u53F7", "\x20\x2D\x20", "\u7684\u597D\u53CB\x3A\x20", "\u4E0D\u80FD\u4E3A\u81EA\u5DF1\u52A9\u529B\u54E6\uFF0C\u8DF3\u8FC7\u81EA\u5DF1\u7684\x73\x68\x61\x72\x65\x43\x6F\x64\x65\x0A", "\x73\x61\x6C\x76\x65\x48\x65\x6C\x70\x41\x64\x64\x57\x61\x74\x65\x72", "\u3010\u52A9\u529B\u597D\u53CB\u7ED3\u679C\u3011\x3A\x20\u5DF2\u6210\u529F\u7ED9\u3010", "\u3011\u52A9\u529B", "\u7ED9\u597D\u53CB\u3010", "\u3011\u52A9\u529B\u83B7\u5F97", "\x67\u6C34\u6EF4", "\u533F\u540D\u7528\u6237", "\x2C", "\x38", "\u3010\u52A9\u529B\u597D\u53CB\u7ED3\u679C\u3011\x3A\x20\u52A9\u529B\u3010", "\u3011\u5931\u8D25\uFF0C\u60A8\u4ECA\u5929\u52A9\u529B\u6B21\u6570\u5DF2\u8017\u5C3D", "\x39", "\u3010\u52A9\u529B\u597D\u53CB\u7ED3\u679C\u3011\x3A\x20\u4E4B\u524D\u7ED9\u3010", "\u3011\u52A9\u529B\u8FC7\u4E86", "\x31\x30", "\u3010\u52A9\u529B\u597D\u53CB\u7ED3\u679C\u3011\x3A\x20\u597D\u53CB\u3010", "\u3011\u5DF2\u6EE1\u516B\u4EBA\u52A9\u529B", "\x73\x70\x6C\x69\x63\x65", "\u52A9\u529B\u5931\u8D25", "\x69\x73\x4C\x6F\x6F\x6E", "\x69\x73\x51\x75\x61\x6E\x58", "\x69\x73\x53\x75\x72\x67\x65", "\x6E\x6F\x77", "\x73\x65\x74\x64\x61\x74\x61", "\u3010\u60A8\u52A9\u529B\u7684\u597D\u53CB\uD83D\uDC6C\u3011", "\u3010\u52A9\u529B\u597D\u53CB\uD83D\uDC6C\u3011\u83B7\u5F97", "\x67\uD83D\uDCA7\x5C\x6E", "\u3010\u4ECA\u65E5\u5269\u4F59\u52A9\u529B\uD83D\uDC6C\u3011", "\u6B21\x5C\x6E", "\u52A9\u529B\u597D\u53CB\u7ED3\u675F\uFF0C\u5373\u5C06\u5F00\u59CB\u9886\u53D6\u989D\u5916\u6C34\u6EF4\u5956\u52B1\x0A", "\x63\x61\x6C\x6C\x65\x65", "\u7B49\u5F85\u4E86\x30\x2E\x34\u79D2", "\x74\x69\x6D\x69\x6E\x67\x41\x77\x61\x72\x64\x52\x65\x73", "\u6D4F\u89C8\u7206\u54C1\u4F1A\u573A", "\u5929\u5929\u62BD\u5956\u6D4F\u89C8\u4EFB\u52A1\u9886\u53D6\u6C34\u6EF4", "\x69\x6E\x69\x74\x46\x6F\x72\x46\x61\x72\x6D", "\x2D\x33", "\x33", "\x66\x61\x72\x6D\x54\x61\x73\x6B", "\x31\x32\x30", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x2D", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x73\x6C\x69\x63\x65", "\u4E2A\u4EAC\u4E1C\u8D26\u53F7\u5C06\u8981\u52A9\u529B\u7684\u597D\u53CB", "\u3010\u4EAC\u4E1C\u8D26\u53F7", "\uFF08", "\uFF09\u4EAC\u4E1C\u519C\u573A\u4E92\u52A9\u7801\u3011", "\uFF09\u3011\u8DF3\u8FC7\u9519\u8BEF", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x72\x65\x74\x63\x6F\x64\x65", "\x62\x61\x73\x65", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E", "\x6F\x62\x6A\x65\x63\x74", "\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5", "\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D", "\x26\x62\x6F\x64\x79\x3D", "\x26\x61\x70\x70\x69\x64\x3D\x77\x68\x35", "\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x61\x72\x72\x79\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x2D\x48\x61\x6E\x73\x3B\x71\x3D\x30\x2E\x39", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x61\x72\x72\x79\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxdae04[0x0], allMessage = __Oxdae04[0x0];
let newShareCodes = [];
let shareCodesdq = [];
let message = __Oxdae04[0x0], subTitle = __Oxdae04[0x0], option = {};
const JD_API_HOST = __Oxdae04[0x1];
const jdCookieNode = $[__Oxdae04[0x2]]() ? require(__Oxdae04[0x3]) : __Oxdae04[0x0];
if ($[__Oxdae04[0x2]]()) {
    Object[__Oxdae04[0x6]](jdCookieNode)[__Oxdae04[0x5]]((_0xbb1bxb) => {
        if (jdCookieNode[_0xbb1bxb]) {
            cookiesArr[__Oxdae04[0x4]](jdCookieNode[_0xbb1bxb])
        }
    });
    if (process[__Oxdae04[0x8]][__Oxdae04[0x7]] && process[__Oxdae04[0x8]][__Oxdae04[0x7]] === __Oxdae04[0x9]) {
        console[__Oxdae04[0xa]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxdae04[0xd]](__Oxdae04[0xc]), $[__Oxdae04[0xd]](__Oxdae04[0xe]), ...jsonParse($[__Oxdae04[0xd]](__Oxdae04[0x11]) || __Oxdae04[0x12])[__Oxdae04[0x10]]((_0xbb1bxb) => {
        return _0xbb1bxb[__Oxdae04[0xf]]
    })][__Oxdae04[0xb]]((_0xbb1bxb) => {
        return !!_0xbb1bxb
    })
}
;let requestSup = __Oxdae04[0x0];
let ipUrl = __Oxdae04[0x0];
let proxyU = __Oxdae04[0x13];
let proxyP = __Oxdae04[0x14];
let proxyHost = __Oxdae04[0x15];
let proxyPort = __Oxdae04[0x16];
let proxyServer = proxyHost + __Oxdae04[0x17] + proxyPort;
let xiequ = $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x18]] ? process[__Oxdae04[0x8]][__Oxdae04[0x18]] : __Oxdae04[0x0]) : __Oxdae04[0x0];
if (xiequ == __Oxdae04[0x19]) {
    console[__Oxdae04[0xa]](__Oxdae04[0x1a]);
    requestSup = require(__Oxdae04[0x1b]);
    require(__Oxdae04[0x1c])(requestSup);
    proxyU = $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x1d]] ? process[__Oxdae04[0x8]][__Oxdae04[0x1d]] : __Oxdae04[0x0]) : __Oxdae04[0x0];
    if (proxyU == __Oxdae04[0x0]) {
        console[__Oxdae04[0xa]](__Oxdae04[0x1e]);
        return
    } else {
        console[__Oxdae04[0xa]](__Oxdae04[0x1f] + proxyU)
    }
    ;proxyP = $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x20]] ? process[__Oxdae04[0x8]][__Oxdae04[0x20]] : __Oxdae04[0x0]) : __Oxdae04[0x0];
    if (proxyP == __Oxdae04[0x0]) {
        console[__Oxdae04[0xa]](__Oxdae04[0x21]);
        return
    } else {
        console[__Oxdae04[0xa]](__Oxdae04[0x22] + proxyP)
    }
    ;ipUrl = $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x23]] ? process[__Oxdae04[0x8]][__Oxdae04[0x23]] : __Oxdae04[0x0]) : __Oxdae04[0x0];
    if (ipUrl == __Oxdae04[0x0]) {
        console[__Oxdae04[0xa]](__Oxdae04[0x24]);
        console[__Oxdae04[0xa]](__Oxdae04[0x25]);
        return
    } else {
        console[__Oxdae04[0xa]](__Oxdae04[0x26] + ipUrl)
    }
} else {
    console[__Oxdae04[0xa]](__Oxdae04[0x27]);
    console[__Oxdae04[0xa]](__Oxdae04[0x28])
}
;let ver = __Oxdae04[0x29];
let github = true;

function gettext() {
    return {url: `${__Oxdae04[0x2a]}`, timeout: 5000}
}

async function getHub() {
    return new Promise((_0xbb1bx18) => {
        setTimeout(() => {
            $[__Oxdae04[0x32]](gettext(), (_0xbb1bx19, _0xbb1bx1a, _0xbb1bx1b) => {
                try {
                    if (_0xbb1bx19) {
                        console[__Oxdae04[0xa]](__Oxdae04[0x2b]);
                        github = false
                    } else {
                        if (_0xbb1bx1b != ver) {
                            console[__Oxdae04[0x2d]](__Oxdae04[0x2c] + ver);
                            console[__Oxdae04[0x2d]](__Oxdae04[0x2e] + _0xbb1bx1b);
                            console[__Oxdae04[0x2d]](__Oxdae04[0x2f]);
                            github = false
                        } else {
                            console[__Oxdae04[0x2d]](__Oxdae04[0x30] + _0xbb1bx1b)
                        }
                    }
                } catch (e) {
                    $[__Oxdae04[0x31]](e, _0xbb1bx1a)
                } finally {
                    _0xbb1bx18(_0xbb1bx1b)
                }
            })
        })
    })
}

async function superagent() {
    const _0xbb1bx1d = require(__Oxdae04[0x33]);
    await _0xbb1bx1d(ipUrl, {
        "\x68\x65\x61\x64\x65\x72\x73": {
            "\x73\x65\x63\x2D\x63\x68\x2D\x75\x61": __Oxdae04[0x3f],
            "\x73\x65\x63\x2D\x63\x68\x2D\x75\x61\x2D\x6D\x6F\x62\x69\x6C\x65": __Oxdae04[0x40],
            "\x73\x65\x63\x2D\x63\x68\x2D\x75\x61\x2D\x70\x6C\x61\x74\x66\x6F\x72\x6D": __Oxdae04[0x41],
            "\x75\x70\x67\x72\x61\x64\x65\x2D\x69\x6E\x73\x65\x63\x75\x72\x65\x2D\x72\x65\x71\x75\x65\x73\x74\x73": __Oxdae04[0x42]
        },
        "\x72\x65\x66\x65\x72\x72\x65\x72\x50\x6F\x6C\x69\x63\x79": __Oxdae04[0x43],
        "\x62\x6F\x64\x79": null,
        "\x6D\x65\x74\x68\x6F\x64": __Oxdae04[0x44]
    })[__Oxdae04[0x3d]]((_0xbb1bx20) => {
        return _0xbb1bx20[__Oxdae04[0x3e]]()
    })[__Oxdae04[0x3d]]((_0xbb1bx1e) => {
        if (_0xbb1bx1e[__Oxdae04[0x34]] != 0) {
            console[__Oxdae04[0xa]](__Oxdae04[0x35] + _0xbb1bx1e[__Oxdae04[0x36]])
        } else {
            let _0xbb1bx1f = _0xbb1bx1e[__Oxdae04[0x37]];
            proxyHost = _0xbb1bx1f[0x0][__Oxdae04[0x38]];
            proxyPort = _0xbb1bx1f[0x0][__Oxdae04[0x39]];
            proxyServer = proxyHost + __Oxdae04[0x17] + proxyPort;
            $[__Oxdae04[0x3a]] = __Oxdae04[0x3b] + proxyU + __Oxdae04[0x17] + proxyP + __Oxdae04[0x3c] + proxyServer
        }
    });
    await $[__Oxdae04[0x45]](200)
}

function request(_0xbb1bx22, _0xbb1bx23 = {}, _0xbb1bx24 = 1000) {
    return new Promise((_0xbb1bx18) => {
        setTimeout(() => {
            $[__Oxdae04[0x32]](taskUrl(_0xbb1bx22, _0xbb1bx23), (_0xbb1bx19, _0xbb1bx1a, _0xbb1bx1b) => {
                try {
                    if (_0xbb1bx19) {
                        console[__Oxdae04[0xa]](__Oxdae04[0x46]);
                        console[__Oxdae04[0xa]](`${__Oxdae04[0x47]}${_0xbb1bx22}${__Oxdae04[0x0]}`)
                    } else {
                        if (safeGet(_0xbb1bx1b)) {
                            _0xbb1bx1b = JSON[__Oxdae04[0x48]](_0xbb1bx1b)
                        }
                    }
                } catch (e) {
                    $[__Oxdae04[0x31]](e, _0xbb1bx1a)
                } finally {
                    _0xbb1bx18(_0xbb1bx1b)
                }
            })
        }, _0xbb1bx24)
    })
}

async function initForFarm() {
    if (xiequ == __Oxdae04[0x19]) {
        const _0xbb1bx23 = `${__Oxdae04[0x49]}${escape(JSON[__Oxdae04[0x4a]]({"\x76\x65\x72\x73\x69\x6F\x6E": 4}))}${__Oxdae04[0x4b]}`;
        let _0xbb1bx26 = {
            "\x61\x63\x63\x65\x70\x74": __Oxdae04[0x4c],
            "\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67": __Oxdae04[0x4d],
            "\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65": __Oxdae04[0x4e],
            "\x63\x61\x63\x68\x65\x2D\x63\x6F\x6E\x74\x72\x6F\x6C": __Oxdae04[0x4f],
            "\x63\x6F\x6F\x6B\x69\x65": cookie,
            "\x6F\x72\x69\x67\x69\x6E": __Oxdae04[0x50],
            "\x70\x72\x61\x67\x6D\x61": __Oxdae04[0x4f],
            "\x72\x65\x66\x65\x72\x65\x72": __Oxdae04[0x51],
            "\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x64\x65\x73\x74": __Oxdae04[0x52],
            "\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x6D\x6F\x64\x65": __Oxdae04[0x53],
            "\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x73\x69\x74\x65": __Oxdae04[0x54],
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x55]] ? process[__Oxdae04[0x8]][__Oxdae04[0x55]] : (require(__Oxdae04[0x57])[__Oxdae04[0x56]])) : ($[__Oxdae04[0xd]](__Oxdae04[0x58]) ? $[__Oxdae04[0xd]](__Oxdae04[0x58]) : __Oxdae04[0x59]),
            "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxdae04[0x5a]
        };
        let requestSup = require(__Oxdae04[0x1b]);
        requestSup[__Oxdae04[0x64]](`${__Oxdae04[0x0]}${JD_API_HOST}${__Oxdae04[0x63]}`)[__Oxdae04[0x62]](_0xbb1bx23)[__Oxdae04[0x61]](_0xbb1bx26)[__Oxdae04[0x60]]($[__Oxdae04[0x3a]])[__Oxdae04[0x3d]]((_0xbb1bx1e) => {
            return _0xbb1bx1e[__Oxdae04[0x5f]]
        })[__Oxdae04[0x3d]]((_0xbb1bx1e) => {
            if (safeGet(_0xbb1bx1e)) {
                $[__Oxdae04[0x5e]] = JSON[__Oxdae04[0x48]](_0xbb1bx1e)
            }
        })[__Oxdae04[0x5d]]((_0xbb1bx19) => {
            console[__Oxdae04[0xa]](__Oxdae04[0x5b]);
            console[__Oxdae04[0xa]](_0xbb1bx19[__Oxdae04[0x5c]])
        })
    } else {
        return new Promise((_0xbb1bx18) => {
            const option = {
                url: `${__Oxdae04[0x0]}${JD_API_HOST}${__Oxdae04[0x63]}`,
                body: `${__Oxdae04[0x49]}${escape(JSON[__Oxdae04[0x4a]]({"\x76\x65\x72\x73\x69\x6F\x6E": 4}))}${__Oxdae04[0x4b]}`,
                headers: {
                    "\x61\x63\x63\x65\x70\x74": __Oxdae04[0x4c],
                    "\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67": __Oxdae04[0x4d],
                    "\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65": __Oxdae04[0x4e],
                    "\x63\x61\x63\x68\x65\x2D\x63\x6F\x6E\x74\x72\x6F\x6C": __Oxdae04[0x4f],
                    "\x63\x6F\x6F\x6B\x69\x65": cookie,
                    "\x6F\x72\x69\x67\x69\x6E": __Oxdae04[0x50],
                    "\x70\x72\x61\x67\x6D\x61": __Oxdae04[0x4f],
                    "\x72\x65\x66\x65\x72\x65\x72": __Oxdae04[0x51],
                    "\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x64\x65\x73\x74": __Oxdae04[0x52],
                    "\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x6D\x6F\x64\x65": __Oxdae04[0x53],
                    "\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x73\x69\x74\x65": __Oxdae04[0x54],
                    "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x55]] ? process[__Oxdae04[0x8]][__Oxdae04[0x55]] : (require(__Oxdae04[0x57])[__Oxdae04[0x56]])) : ($[__Oxdae04[0xd]](__Oxdae04[0x58]) ? $[__Oxdae04[0xd]](__Oxdae04[0x58]) : __Oxdae04[0x59]),
                    "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxdae04[0x5a]
                },
                timeout: 10000
            };
            $[__Oxdae04[0x64]](option, (_0xbb1bx19, _0xbb1bx1a, _0xbb1bx1b) => {
                try {
                    if (_0xbb1bx19) {
                        $[__Oxdae04[0x5e]] = null
                    } else {
                        if (safeGet(_0xbb1bx1b)) {
                            $[__Oxdae04[0x5e]] = JSON[__Oxdae04[0x48]](_0xbb1bx1b)
                        }
                    }
                } catch (e) {
                    $[__Oxdae04[0x31]](e, _0xbb1bx1a)
                } finally {
                    _0xbb1bx18()
                }
            })
        })
    }
}

!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxdae04[0x36]]($[__Oxdae04[0x68]], __Oxdae04[0x6b], __Oxdae04[0x6c], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxdae04[0x6c]});
        return
    }
    ;await getHub();
    if (!github) {
        console[__Oxdae04[0xa]](`${__Oxdae04[0x6d]}`);
        return
    }
    ;await $[__Oxdae04[0x45]](2000);
    console[__Oxdae04[0xa]](`${__Oxdae04[0x6e]}`);
    for (let _0xbb1bx28 = 0; _0xbb1bx28 < cookiesArr[__Oxdae04[0x6f]]; _0xbb1bx28++) {
        if (cookiesArr[_0xbb1bx28]) {
            cookie = cookiesArr[_0xbb1bx28];
            $[__Oxdae04[0x70]] = decodeURIComponent(cookie[__Oxdae04[0x71]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxdae04[0x71]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxdae04[0x72]] = _0xbb1bx28 + 1;
            $[__Oxdae04[0x73]] = true;
            $[__Oxdae04[0x74]] = __Oxdae04[0x0];
            if (xiequ == __Oxdae04[0x19]) {
                await $[__Oxdae04[0x45]](1000);
                await superagent();
                await initForFarm()
            } else {
                await initForFarm();
                await $[__Oxdae04[0x45]](2000)
            }
            ;await getJDFruit()
        }
    }
    ;
    for (let _0xbb1bx28 = 0; _0xbb1bx28 < cookiesArr[__Oxdae04[0x6f]]; _0xbb1bx28++) {
        if (cookiesArr[_0xbb1bx28]) {
            cookie = cookiesArr[_0xbb1bx28];
            $[__Oxdae04[0x70]] = decodeURIComponent(cookie[__Oxdae04[0x71]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxdae04[0x71]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxdae04[0x72]] = _0xbb1bx28 + 1;
            $[__Oxdae04[0x73]] = true;
            $[__Oxdae04[0x74]] = __Oxdae04[0x0];
            await TotalBean();
            console[__Oxdae04[0xa]](`${__Oxdae04[0x75]}`);
            console[__Oxdae04[0xa]](`${__Oxdae04[0x76]}`);
            console[__Oxdae04[0xa]](`${__Oxdae04[0x77]}${$[__Oxdae04[0x72]]}${__Oxdae04[0x78]}${$[__Oxdae04[0x74]] || $[__Oxdae04[0x70]]}${__Oxdae04[0x79]}`);
            if (!$[__Oxdae04[0x73]]) {
                $[__Oxdae04[0x36]]($[__Oxdae04[0x68]], `${__Oxdae04[0x7a]}`, `${__Oxdae04[0x7b]}${$[__Oxdae04[0x72]]}${__Oxdae04[0x7c]}${$[__Oxdae04[0x74]] || $[__Oxdae04[0x70]]}${__Oxdae04[0x7d]}`, {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxdae04[0x6c]});
                continue
            }
            ;message = __Oxdae04[0x0];
            subTitle = __Oxdae04[0x0];
            option = {};
            await shareCodesFormatJDWXX();
            if (xiequ == __Oxdae04[0x19]) {
                await superagent()
            }
            ;await initForFarm();
            await jdFruit()
        }
    }
    ;
    if ($[__Oxdae04[0x2]]() && allMessage && $[__Oxdae04[0x7e]]) {
    }
})()[__Oxdae04[0x5d]]((_0xbb1bx27) => {
    $[__Oxdae04[0xa]](__Oxdae04[0x0], `${__Oxdae04[0x67]}${$[__Oxdae04[0x68]]}${__Oxdae04[0x69]}${_0xbb1bx27}${__Oxdae04[0x6a]}`, __Oxdae04[0x0])
})[__Oxdae04[0x66]](() => {
    $[__Oxdae04[0x65]]()
});

async function jdFruit() {
    try {
        if ($[__Oxdae04[0x5e]][__Oxdae04[0x7f]]) {
            await masterHelpShare();
            await doDailyTask()
        } else {
            console[__Oxdae04[0xa]](`${__Oxdae04[0x80]}`);
            message = `${__Oxdae04[0x81]}${$[__Oxdae04[0x68]]}${__Oxdae04[0x82]}`
        }
    } catch (e) {
        console[__Oxdae04[0xa]](`${__Oxdae04[0x83]}`)
    }
}

async function doDailyTask() {
    await taskInitForFarm();
    await turntableFarm()
}

async function turntableFarm() {
    await initForTurntableFarm();
    if ($[__Oxdae04[0x84]][__Oxdae04[0x34]] === __Oxdae04[0x85]) {
        let {
            timingIntervalHours,
            timingLastSysTime,
            sysTime,
            timingGotStatus,
            remainLotteryTimes,
            turntableInfos
        } = $[__Oxdae04[0x84]];
        if (!timingGotStatus) {
            console[__Oxdae04[0xa]](`${__Oxdae04[0x86]}${sysTime > (timingLastSysTime + 60 * 60 * timingIntervalHours * 1000)}${__Oxdae04[0x0]}`);
            if (sysTime > (timingLastSysTime + 60 * 60 * timingIntervalHours * 1000)) {
                await timingAwardForTurntableFarm();
                await initForTurntableFarm();
                remainLotteryTimes = $[__Oxdae04[0x84]][__Oxdae04[0x87]]
            } else {
                console[__Oxdae04[0xa]](`${__Oxdae04[0x88]}`)
            }
        } else {
            console[__Oxdae04[0xa]](__Oxdae04[0x89])
        }
        ;
        if ($[__Oxdae04[0x84]][__Oxdae04[0x8a]] && $[__Oxdae04[0x84]][__Oxdae04[0x8a]][__Oxdae04[0x6f]] > 0) {
            for (let _0xbb1bx2c = 0; _0xbb1bx2c < $[__Oxdae04[0x84]][__Oxdae04[0x8a]][__Oxdae04[0x6f]]; _0xbb1bx2c++) {
                if (!$[__Oxdae04[0x84]][__Oxdae04[0x8a]][_0xbb1bx2c][__Oxdae04[0x8b]]) {
                    console[__Oxdae04[0xa]](`${__Oxdae04[0x8c]}${_0xbb1bx2c + 1}${__Oxdae04[0x8d]}`);
                    browserForTurntableFarm(1, $[__Oxdae04[0x84]][__Oxdae04[0x8a]][_0xbb1bx2c][__Oxdae04[0x8e]]);
                    if ($[__Oxdae04[0x8f]][__Oxdae04[0x34]] === __Oxdae04[0x85] && $[__Oxdae04[0x8f]][__Oxdae04[0x8b]]) {
                        console[__Oxdae04[0xa]](`${__Oxdae04[0x90]}${_0xbb1bx2c + 1}${__Oxdae04[0x91]}`);
                        browserForTurntableFarm(2, $[__Oxdae04[0x84]][__Oxdae04[0x8a]][_0xbb1bx2c][__Oxdae04[0x8e]]);
                        if ($[__Oxdae04[0x8f]][__Oxdae04[0x34]] === __Oxdae04[0x85]) {
                            console[__Oxdae04[0xa]](`${__Oxdae04[0x90]}${_0xbb1bx2c + 1}${__Oxdae04[0x92]}`);
                            await initForTurntableFarm();
                            remainLotteryTimes = $[__Oxdae04[0x84]][__Oxdae04[0x87]]
                        }
                    }
                } else {
                    console[__Oxdae04[0xa]](`${__Oxdae04[0x93]}${_0xbb1bx2c + 1}${__Oxdae04[0x94]}`)
                }
            }
        }
        ;console[__Oxdae04[0xa]](__Oxdae04[0x95]);
        for (let _0xbb1bx2d of newShareCodes) {
            if (_0xbb1bx2d === $[__Oxdae04[0x5e]][__Oxdae04[0x7f]][__Oxdae04[0x96]]) {
                console[__Oxdae04[0xa]](__Oxdae04[0x97]);
                continue
            }
            ;await lotteryMasterHelp(_0xbb1bx2d);
            if ($[__Oxdae04[0x99]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0x85]) {
                console[__Oxdae04[0xa]](`${__Oxdae04[0x9a]}${$[__Oxdae04[0x99]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0x9c]}`)
            } else {
                if ($[__Oxdae04[0x99]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0x9d]) {
                    console[__Oxdae04[0xa]](`${__Oxdae04[0x9e]}${$[__Oxdae04[0x99]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0x79]}`)
                } else {
                    if ($[__Oxdae04[0x99]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0x9f]) {
                        console[__Oxdae04[0xa]](`${__Oxdae04[0x9a]}${$[__Oxdae04[0x99]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0xa0]}`);
                        break
                    }
                }
            }
        }
        ;console[__Oxdae04[0xa]](`${__Oxdae04[0xa1]}${remainLotteryTimes}${__Oxdae04[0xa2]}`);
        if (remainLotteryTimes > 0) {
            console[__Oxdae04[0xa]](__Oxdae04[0xa3]);
            let _0xbb1bx2e = __Oxdae04[0x0];
            for (let _0xbb1bx28 = 0; _0xbb1bx28 < new Array(remainLotteryTimes)[__Oxdae04[0xa4]](__Oxdae04[0x0])[__Oxdae04[0x6f]]; _0xbb1bx28++) {
                await $[__Oxdae04[0x45]](2000);
                await lotteryForTurntableFarm();
                if ($[__Oxdae04[0xa5]][__Oxdae04[0x34]] === __Oxdae04[0x85]) {
                    turntableInfos[__Oxdae04[0x10]]((_0xbb1bxb) => {
                        if (_0xbb1bxb[__Oxdae04[0xa6]] === $[__Oxdae04[0xa5]][__Oxdae04[0xa6]]) {
                            if ($[__Oxdae04[0xa5]][__Oxdae04[0xa6]][__Oxdae04[0x71]](/bean/g) && $[__Oxdae04[0xa5]][__Oxdae04[0xa6]][__Oxdae04[0x71]](/bean/g)[0x0] === __Oxdae04[0xa7]) {
                                _0xbb1bx2e += `${__Oxdae04[0x0]}${_0xbb1bxb[__Oxdae04[0x68]]}${__Oxdae04[0xa8]}`
                            } else {
                                if ($[__Oxdae04[0xa5]][__Oxdae04[0xa6]][__Oxdae04[0x71]](/water/g) && $[__Oxdae04[0xa5]][__Oxdae04[0xa6]][__Oxdae04[0x71]](/water/g)[0x0] === __Oxdae04[0xa9]) {
                                    _0xbb1bx2e += `${__Oxdae04[0x0]}${_0xbb1bxb[__Oxdae04[0x68]]}${__Oxdae04[0xaa]}`
                                } else {
                                    _0xbb1bx2e += `${__Oxdae04[0x0]}${_0xbb1bxb[__Oxdae04[0x68]]}${__Oxdae04[0xaa]}`
                                }
                            }
                        }
                    });
                    if ($[__Oxdae04[0xa5]][__Oxdae04[0x87]] === 0) {
                        break
                    }
                }
            }
            ;
            if (_0xbb1bx2e) {
                console[__Oxdae04[0xa]](`${__Oxdae04[0xab]}${_0xbb1bx2e[__Oxdae04[0xac]](0, _0xbb1bx2e[__Oxdae04[0x6f]] - 1)}${__Oxdae04[0x79]}`)
            }
        } else {
            console[__Oxdae04[0xa]](__Oxdae04[0xad])
        }
    } else {
        console[__Oxdae04[0xa]](__Oxdae04[0xae])
    }
}

async function masterHelpShare() {
    console[__Oxdae04[0xa]](__Oxdae04[0xaf]);
    let _0xbb1bx30 = 0;
    let _0xbb1bx31 = 3;
    let _0xbb1bx32 = __Oxdae04[0x0];
    console[__Oxdae04[0xa]](`${__Oxdae04[0xb0]}${newShareCodes[__Oxdae04[0x6f]]}${__Oxdae04[0x79]}`);
    for (let _0xbb1bx2d of newShareCodes) {
        console[__Oxdae04[0xa]](`${__Oxdae04[0xb1]}${$[__Oxdae04[0x72]]}${__Oxdae04[0xb2]}${$[__Oxdae04[0x74]] || $[__Oxdae04[0x70]]}${__Oxdae04[0xb3]}${_0xbb1bx2d}${__Oxdae04[0x0]}`);
        if (!_0xbb1bx2d) {
            continue
        }
        ;
        if (_0xbb1bx2d === $[__Oxdae04[0x5e]][__Oxdae04[0x7f]][__Oxdae04[0x96]]) {
            console[__Oxdae04[0xa]](__Oxdae04[0xb4]);
            continue
        }
        ;await $[__Oxdae04[0x45]](2000);
        await masterHelp(_0xbb1bx2d);
        if ($[__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0x85]) {
            if ($[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0x85]) {
                _0xbb1bx30 += $[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0xb5]];
                console[__Oxdae04[0xa]](`${__Oxdae04[0xb6]}${$[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0xb7]}`);
                console[__Oxdae04[0xa]](`${__Oxdae04[0xb8]}${$[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0xb9]}${$[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0xb5]]}${__Oxdae04[0xba]}`);
                _0xbb1bx32 += ($[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]] || __Oxdae04[0xbb]) + __Oxdae04[0xbc]
            } else {
                if ($[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0xbd]) {
                    console[__Oxdae04[0xa]](`${__Oxdae04[0xbe]}${$[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0xbf]}`)
                } else {
                    if ($[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0xc0]) {
                        console[__Oxdae04[0xa]](`${__Oxdae04[0xc1]}${$[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0xc2]}`)
                    } else {
                        if ($[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x34]] === __Oxdae04[0xc3]) {
                            console[__Oxdae04[0xa]](`${__Oxdae04[0xc4]}${$[__Oxdae04[0x98]][__Oxdae04[0x98]][__Oxdae04[0x9b]][__Oxdae04[0x74]]}${__Oxdae04[0xc5]}`);
                            for (var _0xbb1bx28 = 0; _0xbb1bx28 < shareCodesdq[__Oxdae04[0x6f]]; _0xbb1bx28++) {
                                if (shareCodesdq[_0xbb1bx28] == _0xbb1bx2d) {
                                    shareCodesdq[__Oxdae04[0xc6]](_0xbb1bx28, 1);
                                    _0xbb1bx28--
                                }
                            }
                        } else {
                        }
                    }
                }
            }
        } else {
            console[__Oxdae04[0xa]](`${__Oxdae04[0xc7]}`)
        }
    }
    ;
    if ($[__Oxdae04[0xc8]]() || $[__Oxdae04[0xc9]]() || $[__Oxdae04[0xca]]()) {
        let _0xbb1bx33 = timeFormat() + $[__Oxdae04[0x5e]][__Oxdae04[0x7f]][__Oxdae04[0x96]];
        if (!$[__Oxdae04[0xd]](_0xbb1bx33)) {
            $[__Oxdae04[0xcc]](__Oxdae04[0x0], timeFormat(Date[__Oxdae04[0xcb]]() - 24 * 60 * 60 * 1000) + $[__Oxdae04[0x5e]][__Oxdae04[0x7f]][__Oxdae04[0x96]]);
            $[__Oxdae04[0xcc]](__Oxdae04[0x0], _0xbb1bx33)
        }
        ;
        if (_0xbb1bx32) {
            if ($[__Oxdae04[0xd]](_0xbb1bx33)) {
                $[__Oxdae04[0xcc]]($[__Oxdae04[0xd]](_0xbb1bx33) + __Oxdae04[0xbc] + _0xbb1bx32, _0xbb1bx33)
            } else {
                $[__Oxdae04[0xcc]](_0xbb1bx32, _0xbb1bx33)
            }
        }
        ;_0xbb1bx32 = $[__Oxdae04[0xd]](_0xbb1bx33)
    }
    ;
    if (_0xbb1bx32 && _0xbb1bx32[__Oxdae04[0x6f]] > 0) {
        message += `${__Oxdae04[0xcd]}${_0xbb1bx32[__Oxdae04[0xac]](0, _0xbb1bx32[__Oxdae04[0x6f]] - 1)}${__Oxdae04[0x79]}`
    }
    ;
    if (_0xbb1bx30 > 0) {
        console[__Oxdae04[0xa]](`${__Oxdae04[0xce]}${_0xbb1bx30}${__Oxdae04[0xcf]}`)
    }
    ;message += `${__Oxdae04[0xd0]}${_0xbb1bx31}${__Oxdae04[0xd1]}`;
    console[__Oxdae04[0xa]](__Oxdae04[0xd2])
}

async function initForTurntableFarm() {
    $[__Oxdae04[0x84]] = await request(arguments[__Oxdae04[0xd3]][__Oxdae04[0x68]].toString(), {version: 4, channel: 1})
}

async function lotteryForTurntableFarm() {
    await $[__Oxdae04[0x45]](400);
    console[__Oxdae04[0xa]](__Oxdae04[0xd4]);
    $[__Oxdae04[0xa5]] = await request(arguments[__Oxdae04[0xd3]][__Oxdae04[0x68]].toString(), {
        type: 1,
        version: 4,
        channel: 1
    })
}

async function timingAwardForTurntableFarm() {
    $[__Oxdae04[0xd5]] = await request(arguments[__Oxdae04[0xd3]][__Oxdae04[0x68]].toString(), {version: 4, channel: 1})
}

function browserForTurntableFarm(_0xbb1bx38, _0xbb1bx39) {
    if (_0xbb1bx38 === 1) {
        console[__Oxdae04[0xa]](__Oxdae04[0xd6])
    }
    ;
    if (_0xbb1bx38 === 2) {
        console[__Oxdae04[0xa]](__Oxdae04[0xd7])
    }
    ;const _0xbb1bx23 = {
        "\x74\x79\x70\x65": _0xbb1bx38,
        "\x61\x64\x49\x64": _0xbb1bx39,
        "\x76\x65\x72\x73\x69\x6F\x6E": 4,
        "\x63\x68\x61\x6E\x6E\x65\x6C": 1
    };
    $[__Oxdae04[0x8f]] = request(arguments[__Oxdae04[0xd3]][__Oxdae04[0x68]].toString(), _0xbb1bx23)
}

async function lotteryMasterHelp() {
    $[__Oxdae04[0x99]] = await request(`${__Oxdae04[0xd8]}`, {
        imageUrl: __Oxdae04[0x0],
        nickName: __Oxdae04[0x0],
        shareCode: arguments[0x0] + __Oxdae04[0xd9],
        babelChannel: __Oxdae04[0xda],
        version: 4,
        channel: 1
    })
}

async function masterHelp() {
    $[__Oxdae04[0x98]] = await request(`${__Oxdae04[0xd8]}`, {
        imageUrl: __Oxdae04[0x0],
        nickName: __Oxdae04[0x0],
        shareCode: arguments[0x0],
        babelChannel: __Oxdae04[0xda],
        version: 2,
        channel: 1
    })
}

async function taskInitForFarm() {
    const _0xbb1bx3d = arguments[__Oxdae04[0xd3]][__Oxdae04[0x68]].toString();
    $[__Oxdae04[0xdb]] = await request(_0xbb1bx3d, {
        "\x76\x65\x72\x73\x69\x6F\x6E": 14,
        "\x63\x68\x61\x6E\x6E\x65\x6C": 1,
        "\x62\x61\x62\x65\x6C\x43\x68\x61\x6E\x6E\x65\x6C": __Oxdae04[0xdc]
    })
}

function timeFormat(_0xbb1bx3f) {
    let _0xbb1bx40;
    if (_0xbb1bx3f) {
        _0xbb1bx40 = new Date(_0xbb1bx3f)
    } else {
        _0xbb1bx40 = new Date()
    }
    ;
    return _0xbb1bx40[__Oxdae04[0xdd]]() + __Oxdae04[0xde] + ((_0xbb1bx40[__Oxdae04[0xdf]]() + 1) >= 10 ? (_0xbb1bx40[__Oxdae04[0xdf]]() + 1) : __Oxdae04[0x85] + (_0xbb1bx40[__Oxdae04[0xdf]]() + 1)) + __Oxdae04[0xde] + (_0xbb1bx40[__Oxdae04[0xe0]]() >= 10 ? _0xbb1bx40[__Oxdae04[0xe0]]() : __Oxdae04[0x85] + _0xbb1bx40[__Oxdae04[0xe0]]())
}

function shareCodesFormatJDWXX() {
    return new Promise(async (_0xbb1bx18) => {
        newShareCodes = [];
        newShareCodes = shareCodesdq[__Oxdae04[0xe1]](0, 4);
        console[__Oxdae04[0xa]](`${__Oxdae04[0x90]}${$[__Oxdae04[0x72]]}${__Oxdae04[0xe2]}${JSON[__Oxdae04[0x4a]](newShareCodes)}${__Oxdae04[0x0]}`);
        _0xbb1bx18()
    })
}

async function getJDFruit() {
    try {
        if ($[__Oxdae04[0x5e]] != null && $[__Oxdae04[0x5e]] && $[__Oxdae04[0x5e]][__Oxdae04[0x7f]]) {
            console[__Oxdae04[0xa]](`${__Oxdae04[0xe3]}${$[__Oxdae04[0x72]]}${__Oxdae04[0xe4]}${$[__Oxdae04[0x70]]}${__Oxdae04[0xe5]}${$[__Oxdae04[0x5e]][__Oxdae04[0x7f]][__Oxdae04[0x96]]}${__Oxdae04[0x0]}`);
            shareCodesdq[__Oxdae04[0x4]]($[__Oxdae04[0x5e]][__Oxdae04[0x7f]][__Oxdae04[0x96]])
        }
    } catch (e) {
        console[__Oxdae04[0xa]](`${__Oxdae04[0xe3]}${$[__Oxdae04[0x72]]}${__Oxdae04[0xe4]}${$[__Oxdae04[0x70]]}${__Oxdae04[0xe6]}`)
    }
}

function TotalBean() {
    return new Promise(async (_0xbb1bx18) => {
        const _0xbb1bx44 = {
            "\x75\x72\x6C": `${__Oxdae04[0xe7]}`,
            "\x68\x65\x61\x64\x65\x72\x73": {
                "\x41\x63\x63\x65\x70\x74": __Oxdae04[0xe8],
                "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxdae04[0x5a],
                "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxdae04[0x4d],
                "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxdae04[0xe9],
                "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxdae04[0xea],
                "\x43\x6F\x6F\x6B\x69\x65": cookie,
                "\x52\x65\x66\x65\x72\x65\x72": __Oxdae04[0xeb],
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x55]] ? process[__Oxdae04[0x8]][__Oxdae04[0x55]] : (require(__Oxdae04[0x57])[__Oxdae04[0x56]])) : ($[__Oxdae04[0xd]](__Oxdae04[0x58]) ? $[__Oxdae04[0xd]](__Oxdae04[0x58]) : __Oxdae04[0x59])
            }
        };
        $[__Oxdae04[0x64]](_0xbb1bx44, (_0xbb1bx19, _0xbb1bx1a, _0xbb1bx1b) => {
            try {
                if (_0xbb1bx19) {
                    console[__Oxdae04[0xa]](`${__Oxdae04[0x0]}${$[__Oxdae04[0x68]]}${__Oxdae04[0xec]}`)
                } else {
                    if (_0xbb1bx1b) {
                        _0xbb1bx1b = JSON[__Oxdae04[0x48]](_0xbb1bx1b);
                        if (_0xbb1bx1b[__Oxdae04[0xed]] === 13) {
                            $[__Oxdae04[0x73]] = false;
                            return
                        }
                        ;
                        if (_0xbb1bx1b[__Oxdae04[0xed]] === 0 && _0xbb1bx1b[__Oxdae04[0xee]] && _0xbb1bx1b[__Oxdae04[0xee]][__Oxdae04[0xef]]) {
                            $[__Oxdae04[0x74]] = _0xbb1bx1b[__Oxdae04[0xee]][__Oxdae04[0xef]]
                        }
                    } else {
                        console[__Oxdae04[0xa]](`${__Oxdae04[0xf0]}`)
                    }
                }
            } catch (e) {
                $[__Oxdae04[0x31]](e)
            } finally {
                _0xbb1bx18()
            }
        })
    })
}

function safeGet(_0xbb1bx1b) {
    try {
        if (typeof JSON[__Oxdae04[0x48]](_0xbb1bx1b) == __Oxdae04[0xf1]) {
            return true
        }
    } catch (e) {
        console[__Oxdae04[0xa]](e);
        console[__Oxdae04[0xa]](`${__Oxdae04[0xf2]}`);
        return false
    }
}

function taskUrl(_0xbb1bx22, _0xbb1bx23 = {}) {
    return {
        url: `${__Oxdae04[0x0]}${JD_API_HOST}${__Oxdae04[0xf3]}${_0xbb1bx22}${__Oxdae04[0xf4]}${encodeURIComponent(JSON[__Oxdae04[0x4a]](_0xbb1bx23))}${__Oxdae04[0xf5]}`,
        headers: {
            "\x48\x6F\x73\x74": __Oxdae04[0xf6],
            "\x41\x63\x63\x65\x70\x74": __Oxdae04[0x4c],
            "\x4F\x72\x69\x67\x69\x6E": __Oxdae04[0xf7],
            "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxdae04[0x4d],
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxdae04[0x2]]() ? (process[__Oxdae04[0x8]][__Oxdae04[0x55]] ? process[__Oxdae04[0x8]][__Oxdae04[0x55]] : (require(__Oxdae04[0x57])[__Oxdae04[0x56]])) : ($[__Oxdae04[0xd]](__Oxdae04[0x58]) ? $[__Oxdae04[0xd]](__Oxdae04[0x58]) : __Oxdae04[0x59]),
            "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxdae04[0xf8],
            "\x52\x65\x66\x65\x72\x65\x72": __Oxdae04[0xf9],
            "\x43\x6F\x6F\x6B\x69\x65": cookie
        },
        timeout: 10000
    }
}

function jsonParse(_0xbb1bx48) {
    if (typeof _0xbb1bx48 == __Oxdae04[0xfa]) {
        try {
            return JSON[__Oxdae04[0x48]](_0xbb1bx48)
        } catch (e) {
            console[__Oxdae04[0xa]](e);
            $[__Oxdae04[0x36]]($[__Oxdae04[0x68]], __Oxdae04[0x0], __Oxdae04[0xfb]);
            return []
        }
    }
}

(function (_0xbb1bx49, _0xbb1bx4a, _0xbb1bx4b, _0xbb1bx4c, _0xbb1bx4d, _0xbb1bx4e) {
    _0xbb1bx4e = __Oxdae04[0xfc];
    _0xbb1bx4c = function (_0xbb1bx4f) {
        if (typeof alert !== _0xbb1bx4e) {
            alert(_0xbb1bx4f)
        }
        ;
        if (typeof console !== _0xbb1bx4e) {
            console[__Oxdae04[0xa]](_0xbb1bx4f)
        }
    };
    _0xbb1bx4b = function (_0xbb1bx50, _0xbb1bx49) {
        return _0xbb1bx50 + _0xbb1bx49
    };
    _0xbb1bx4d = _0xbb1bx4b(__Oxdae04[0xfd], _0xbb1bx4b(_0xbb1bx4b(__Oxdae04[0xfe], __Oxdae04[0xff]), __Oxdae04[0x100]));
    try {
        _0xbb1bx49 = __encode;
        if (!(typeof _0xbb1bx49 !== _0xbb1bx4e && _0xbb1bx49 === _0xbb1bx4b(__Oxdae04[0x101], __Oxdae04[0x102]))) {
            _0xbb1bx4c(_0xbb1bx4d)
        }
    } catch (e) {
        _0xbb1bx4c(_0xbb1bx4d)
    }
})({})// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
