/**
 * Created by gc_1993 on 2016/9/12.
 */
$().ready(function(){
    /*头部广告部分*/
    $('#X').click(function(){
        $('#advertisement').css("display","none");
    });
    /*图片轮播*/
    var img=$('#contain a');
    var span=$("#paganation span");
    console.log(span);
    var index=0;
    function GO(){
        $(img).css("opacity","0");
        $(img[index]).css("opacity","1");
        $(span).removeClass();
        $(span[index]).addClass('selected');
    };
   var  timer=setInterval(run,3000);
    function run(){
        index++;
        if(index==img.length){
            index=0;
        }
        GO();
    }
 $('#paganation span').click(function(){
     clearInterval(timer);
     index=$(this).index();
           GO();
  });
    var left=$('#left');
    var right=$("#right");
    left.click(function(){
        index--;
        if (index<0){
            index=img.length-1;
        }
        GO();
    });
    right.click(function(){
        index++;
        clearInterval(timer);
        if (index>=img.length){
            index=0;
        }
        GO();
    });

    /*7F*/
    var li=$('#f7pic li');
    li.mouseover(function(){
        var index=$(this).index();
        $(li[index]).css("boxShadow","0px 0px 15px 2px rgba(25, 38, 6, 0.98)")
    });
    li.mouseout(function(){
        var index=$(this).index();
        $(li[index]).css("boxShadow","");
    });


















});



