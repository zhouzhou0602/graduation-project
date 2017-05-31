//注册
function register(){
	var userNameVal = $(".reg_name").val();
	var userPasswordVal = $(".reg_pass").val();
	var userPasswordRe = $(".reg_repass").val();
	if(userPasswordVal != userPasswordRe){
		alert("请确认密码！");
	}else{
		var data = {
			userName : userNameVal,
			userPassword : userPasswordVal
		};
		$.ajax({
            url:'http://localhost:3000/register',
            type:'POST',
            data:data,
            success:function(data,status){
            	console.log("success");
                if(status == 'success'){
                	alert("注册成功！");
                    location.href='#/login';
                }
            },
            error:function(data,err){
            	console.log(err);
                location.href='#/register';
            }
        });
	}
}
//登录
var userObj = {};
function login(){
	var login_name = $(".login_name").val(),
		login_pass = $(".login_pass").val(),
		userData = {
			userName : login_name,
			userPassword : login_pass
		};
	$.ajax({
        url:'http://localhost:3000/login',
        type:'POST',
        data:userData,
        success:function(data,status){
        	userObj = userData;
            location.href='#/home/home_hot';
        },
        error:function(data,err){
        	alert("登录失败！");
            window.location.reload('#/login');
        }
    });
}
//搜索
function search(){
    var val = $(".searchVal").val();
    console.log(val);
    if(localStorage.searchVal){
        localStorage.searchVal = val;
    }else{
        localStorage.setItem("searchVal",val);
    }
}
//购物车
function cart_add(e){
    e = e || window.event;
    var num = Number($(e.target).siblings(".cart_num").text())+1;
    $(e.target).siblings(".cart_num").html(num);
    if($(".cat_in_span_3").hasClass("selected")){
        addPrice();
    }
}
function cart_cut(e){
    e = e || window.event;
    var num = Number($(e.target).siblings(".cart_num").text());
    if(num == 1){
        var flag = confirm("确定删除商品？");
        if(flag == true){
            $(e.target).parents(".cart_list").hide();
            if($(".cat_in_span_3").hasClass("selected")){
                addPrice();
            }
        }else{
            return;
        }
    }else{
        $(e.target).siblings(".cart_num").html(num-1);
        if($(".cat_in_span_3").hasClass("selected")){
            addPrice();
        }
    }
}
function allPrice(){
    if($(".cat_in_span_3").hasClass("selected")){
        $.each($(".cart_point"),function(i,item){
            $(item).removeClass("selected");
        });
        $(".cat_in_span3").text("￥"+0);
    }else{
        $.each($(".cart_point"),function(i,item){
            $(item).addClass("selected");
        });
        addPrice();
    }
}
function addPrice(){
    var sum = 0;
    $.each($(".cart_price:visible"),function(i,item){
        sum += Number($(item).text().slice(4).replace(",",""))*Number($(item).siblings(".cart_num").text());
    });
    $(".cat_in_span3").text("￥"+sum.toFixed(2));
}	
function order(){
    if(!$(".cat_in_span_3").hasClass("selected")){
        return;
    }
    var obj = {};
    var num = 0;
    $.each($(".cat_in_span_9:visible"),function(i,item){
        num = i;
        obj["name"+i] = $(item).children(".cart_name").text();
        obj["num"+i] = Number($(item).children(".cart_num_handle").children(".cart_num").text());
        obj["price"+i] = Number($(item).children(".cart_num_handle").children(".cart_price").text().slice(4).replace(",",""));
    })
    $.showLightBox();
    var str = "";
    var sum = 0;
    for(var i = 0;i<num+1;i++){
        str += "<li><div>"+obj["name"+i]+"</div><div><span>"+obj["num"+i]+"</span><span>*</span><span>"+obj["price"+i]+"</span><span class='all'>总价："+(Number(obj["num"+i])*Number(obj["price"+i])).toFixed(2)+"</span></div></li>";
        sum += Number(obj["num"+i])*Number(obj["price"+i]);
    }
    $(".order_sum").html(sum.toFixed(2));
    $(".order_list").html(str);
    $(".order").show();
}
function pay () {
    $(".order").hide();
    $.hideLightBox();
    window.location.reload('#/cart');
}
//蒙版插件
;(function($){
    var lightBox = $('<div style="width:100%;height:100%;position:fixed;top:0;left:0;background-color:black;opacity:0.4;"></div>');
    $.extend({
        showLightBox: function(){
            if($("body").find(lightBox).size() > 0){//如果div已经在页面上了
                lightBox.show();
            }else{
                $("body").append(lightBox);
            }
        },
        hideLightBox: function(){
            lightBox.hide();
        }
    });
})(jQuery);