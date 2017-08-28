
// 弹出框
$.toast = (function() {
    var temp = {
        message: '提示',
        state: 'default',
        time: 2000
    };
    return function() {
        var cur,modal,param;
        if(arguments.length > 1) {
            param = {
                message: arguments[0],
                state: arguments[1]
            }
        } else {
            param = arguments[0];
            if(typeof  param == 'string') {
                param = {message: param};
            }
        }

        cur = $.extend({},temp,param);
        modal = $('<div class="toast ' + cur.state + '">' + cur.message + '</div>').appendTo(document.body);
        modal.css({
            marginTop: - Math.round(modal.outerHeight() / 2) + 'px',
            marginLeft: - Math.round(modal.outerWidth()/2) + 'px',//1.185 是初始化时候的放大效果
            display: 'block'
        }).addClass('in');
        setTimeout(function() {
            modal.remove();
        },cur.time)
    };
})();

//rem转换
(function (win) {
    var doc = win.document, html = doc.documentElement;
    var baseWidth = 750;
    var grids = baseWidth / 100;
    var clientWidth = html.clientWidth || 320;
    html.style.fontSize = clientWidth / grids + "px";
    //var testDom = document.createElement("div");
    var testDomWidth = 0;
    var adjustRatio = 0;
    //setTimeout(calcTestDom, 20);
    var reCalc = function () {
        var newCW = html.clientWidth;
        if (newCW === clientWidth) {
            return
        }
        clientWidth = newCW;
        html.style.fontSize = newCW * (adjustRatio ? adjustRatio : 1) / grids + "px"
    };
    if (!doc.addEventListener) {
        return
    }
    var resizeEvt = "orientationchange" in win ? "orientationchange" : "resize";
    win.addEventListener(resizeEvt, reCalc, false);
    doc.addEventListener("DOMContentLoaded", reCalc, false)

})(window);

//时间转换函数
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


