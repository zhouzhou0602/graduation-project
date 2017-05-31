(function(window){
		//取得当前浏览器窗口宽度
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = winW / 3.75 + "px";
        window.onresize = function(){
        document.documentElement.style.fontSize=(document.documentElement.clientWidth||document.body.clientWidth)/3.75+"px";
        }
})(window)




