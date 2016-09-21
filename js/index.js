/*** Created by 晨 on 3/9/2016.*/
window.onload=function(){
    var sociality=$('sociality').getElementsByTagName('i');
    var phone=$('phone').getElementsByTagName('i');
    var sublist=document.getElementById('sublist');
    $('sociality').onmouseover=function(){
     sociality[0].innerHTML="&#xe61e";
    };
    $('sociality').onmouseout=function(){
        sociality[0].innerHTML="&#xe6db;";
    };
    $('phone').onmouseover=function(){
        phone[0].innerHTML="&#xe61e";
    }
    $('phone').onmouseout=function(){
        phone[0].innerHTML="&#xe6db;";
    }
    <!--头部褐色部分js-->
/*  广告js代码*/
var advertisement=document.getElementById("advertisement");
    var X=document.getElementById('X');
    X.onclick=function(){
        advertisement.style.display="none";
    }
    /*搜索js代码*/
    var info=$('search_info');
    var input=$('input');
    /*图片轮播代码*/
    var box=$('center_slider');
    var imglist=document.getElementById('contain').getElementsByTagName("a");
    var span=document.getElementById("paganation").getElementsByTagName("span");
    var left=$("left");
    var right=$("right");
    var index=0;
    var timer;//用于计时器的赋值
    var settimeall=3000;//用于定时器的间隔
    function AutoGo(){
        for(var i=0;i<imglist.length;i++){
            imglist[i].style.opacity='0';
            span[i].className="";
        }
        if(index==span.length){
            span[0].className="selected";
        }else{
            span[index].className="selected";
        }
        imglist[index].style.opacity='1';
    }


    timer=setInterval(run,settimeall);
    function run(){
        index++;
        if(index>=imglist.length){
            index=0;
        }
        AutoGo();
    }
   box.onmouseover=function(){
       clearInterval(timer);
   };
    box.onmouseout=function(){
        timer=setInterval(run,settimeall);
    }
        for(var j=0;j<span.length;j++){
              span[j].index=j;
              span[j].onclick=function(){
                   index=this.index;
                AutoGo();
            };

          left.onclick=function(){
              index--;
              if (index<0){
                  index=imglist.length-1;
              }
              AutoGo();
          }

           right.onclick=function(){
               index++;
               clearInterval(timer);
               if (index>=imglist.length){
                   index=0;
               }
               AutoGo();
           }
    }

/*实现楼层变化的js代码*/
 /*   window.onscroll=function(){
        var top=document.documentElement ? document.documentElement.scrollTop:document.body.scrollTop;
        var menus=document.getElementById("menu").getElementsByTagName("a");
        var items=getElementsByClassName(document.getElementById("content"),"item");
        console.log("dsdada:"+items[0]);
        var currentid="";
        for(var i=0;i<items.length;i++){
            var _item=items[i];
            var _itemtop=_item.offsetTop;
            if(top>_itemtop - 200){
                currentid=_item.id;
            }else{
                break;
            }
        }
        if(currentid){
            //赋值class
            for(var j=0;j<menus.length;j++){
                var _menu=menus[j];
                var _href=_menu.href.split("#");
                if((_href[_href.length-1])!=currentid){
                    removeClass(_menu,"current_style");
                }else{
                    addClass(_menu,"current_style");
                }
            }
        }
    };*/

 /*   var menu=$('menu');
    var scroll=menu.offsetTop;
    console.log("scroll:"+scroll);
    var bodyTop=document.body.scrollTop;
    console.log(bodyTop);
        if(bodyTop>900){
            menu.style.opacity="1";
        }else{
            menu.style.opacity="0";
        }*/









    /*7楼特效代码*/
     var f7li=$('f7pic').getElementsByTagName("li");
     console.log(f7li[0]);
     for(var i=0;i<f7li.length;i++){
         f7li[i].index=i;
         f7li[i].onmouseover=function(){
             f7li[this.index].style.boxShadow="0px 0px 15px 2px rgba(25, 38, 6, 0.98)"
         }
     }
     for(var j=0;j<f7li.length;j++){
        f7li[j].index=j;
        f7li[j].onmouseout=function(){
            f7li[this.index].style.boxShadow="";
        }
    }

/*点击按钮切换图片事件*/

     var bottom_pic_box=$("inner");
     var bottom_pic=bottom_pic_box.getElementsByTagName("img");
     var bottom_pic_left_narrow=$("left1");
     var bottom_pic_right_narrow=$("right1");
     var l=-252+"px";
     var m=252+"px";

    bottom_pic_right_narrow.onclick= function () {
        var imgnode = document.createElement('img');
        imgnode.src = bottom_pic[0].src;
        bottom_pic_box.style.left=l;
        bottom_pic_box.removeChild(bottom_pic[0]);
        bottom_pic_box.appendChild(imgnode);
        bottom_pic_box.style.left= 0+'px';
    };

    bottom_pic_left_narrow.onclick= function() {
        var imgnode = document.createElement('img');
        bottom_pic_box.insertBefore(imgnode,bottom_pic[0]);
        imgnode.src = bottom_pic[4].src;
        bottom_pic_box.style.left=m;
        bottom_pic_box.removeChild(bottom_pic[4]);
        bottom_pic_box.style.left= 0+'px';
    };


    /*右部固定栏js代码*/
    var fixed_phone=$('fixed_phone');
    var sub=$('hot_phone');
    var span1=$('s1');
         fixed_phone.onmouseover=function(){
         span1.style.display="block";
             sub.style.display="block";
    };
      fixed_phone.onmouseout=function(){
         span1.style.display="none";
          sub.style.display="none";
    };


    var fixed_question=$('fixed_question');
    var span2=$('s2');
    var question_sub=$('seek_advice');
    fixed_question.onmouseover=function(){
        span2.style.display="block"
        question_sub.style.display="block";
    };
    fixed_question.onmouseout=function(){
        span2.style.display="none";
        question_sub.style.display="none";
    };

    var fixed_home=$('fixed_home');
    var span3=$('s3');
    fixed_home.onmouseover=function(){
        span3.style.display="block"
    };
    fixed_home.onmouseout=function(){
        span3.style.display="none"
    };

    var fixed_write=$('fixed_write');
    var span4=$('s4');
    fixed_write.onmouseover=function(){
        span4.style.display="block"
    };
    fixed_write.onmouseout=function(){
        span4.style.display="none"
    }
















};



/*定义了一个删除class 增加class的方法获取className的方法*/
function hasClass(obj,cls){
    return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));
}
function removeClass(){
    if(hasClass(obj,cls)){
        var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");
        obj.className=obj.className.replace(reg,"");
    }
}
function addClass(){
    if(!hasClass(obj,cls)){
        obj.className+=""+cls;
    }
}
function getElementsByClassName(obj,cls){
    var elements=obj.getElementsByTagName("*");
    var result=[];
    for(var i=0;i<elements.length;i++){
        if(elements[i].className==cls){
            result.push(elements[i]);
        }
    }
    return result;
}


/*     让搜索栏信息隐藏焦点事件*/
        function hideinfo(){
            $('search_info').style.display="none"
        }
    document.documentElement.onclick=function(e){
    /*e事件参数*/
    e=window.event?window.event:e;/*处理此窗口上发生的窗口焦点事件：将它们指派到任何注册。
     注：只有为此组件启用了窗口事件时，此方法才有可能被调用。*/
    var e_tar=e.srcElement?e.srcElement:e.target;/*规范：第一个是ie下的  第二个是ff下的*/
    if(e_tar.id=="input")
    {
        return;
    }
    else
    {
        $('search_info').style.display="block";
    }
}
/*定义一个全局声明函数*/
   function $(id){
    return document.getElementById(id);
    }