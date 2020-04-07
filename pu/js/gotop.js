window.onload=function(){
    var gotop = document.getElementById("goTop");
    var timer =null;
    gotop.onclick = function(){
        gotop.setAttribute("style","display:none")
        //定时器
        timer = setInterval(function(){
            var backtop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = backtop/40;
            document.documentElement.scrollTop = backtop-speed;
            if(backtop == 0){
                clearInterval(timer);
            }
        },0.1);
    }
    //显示 or 隐藏
    var pH = 1400;
    window.onscroll = function(){
        var backtop = document.documentElement.scrollTop || document.body.scrollTop;
        if(backtop>pH){
            gotop.style.display = "block";

        }
        else{
            gotop.style.display = "none";
        }
    }
}