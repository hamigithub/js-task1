/**
 * Created by Administrator on 2017/5/25 0025.
 */
    var obj = document.getElementsByClassName("box");//获取类名为box的DOM，因为class是可以重复的，所以element要+s；全局变量

    function bbc(){
        for(var e=0;e<obj.length;e++){
            obj[e].style.background="#fff";
        };
    }
    function ool(){
        var lo= Math.floor((Math.random()*obj.length));
        var le= Math.floor((Math.random()*obj.length));
        var li= Math.floor((Math.random()*obj.length));//三个变量用来装随机得到的三个小盒子的DOM；
        if (lo!=le&&le!=li&&li!=lo){
            var str = "0123456789abcdef";//声明变量储存值为0-9、a-f，
            var t = "#";
            var y = "#";
            var u = "#";//三个变量用来装随机得到的三个颜色字符串；
            for(var j=0;j<6;j++){
                t = t+ str.charAt(Math.random()*str.length);
                y = y+ str.charAt(Math.random()*str.length);
                u = u+ str.charAt(Math.random()*str.length);//charAt返回字符串中的，取值于str的长度的随机字符；
            }//循环生成颜色值，并将生成的字符串赋值到新的变量t、y、u上；
            bbc();
            if (t!==y&&y!==u&&u!==t){
                obj[lo].style.background=t;
                obj[le].style.background=y;
                obj[li].style.background=u;
            }
            console.log(lo);
            console.log(le);
            console.log(li);
            console.log(t);
            console.log(y);
            console.log(u);
        }
        else {
            return ool();
        }

    };

var p;//在函数ool()外声明一个变量，用以把函数里面的setTimeout装起来给别的函数使用；全局变量

function lpl(){
    clearInterval(p);
    p = setInterval("ool()",1000);

}

function out(){
    bbc();
    clearInterval(p);//终止计时器执行的函数；
};//封装一个终止函数，onclick到button；










