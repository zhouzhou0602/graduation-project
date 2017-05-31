angular.module("myApp")
.controller("myController",["$scope","$state","home_scroll","$location","$anchorScroll","home_getInfo","$rootScope","$anchorScroll",function($scope,$state,home_scroll,$location,$anchorScroll,home_getInfo,$rootScope,$anchorScroll){
	$anchorScroll();
	$scope.jump = function(addr){
		$state.go(addr);	
	}
	$scope.returnTop =function(addr){
		$location.hash(addr);//设置当前锚点值
		$anchorScroll();//跳转至锚点
	}
	home_scroll();
	$scope.getInfo = function(ele){
		$rootScope.goodInfo = home_getInfo(ele);
		$scope.jump("goods");
	}
	
}])
//控制器 搜索
.controller("searchController", ["$scope","$filter","searchService", "home_swiper", function($scope,$filter,searchSer, home_swiper) {
		home_swiper();
		searchSer.getData("data/filter.json").success(function(res) {
			$scope.items = res.list;
		$scope.result = $filter("filter")($scope.items,localStorage.searchVal);
		});
	}])
.controller("home_headController", ["$scope", "homeService", "home_swiper",function($scope, homeSer, home_swiper) {
		home_swiper();
		$scope.goods = [];
		$scope.channes = [];
		homeSer.getData("data/home_boot_channe.json").success(function(res) {
			$scope.channes.push(res);
		})
		homeSer.getData("data/home_beauty_channe.json").success(function(res) {
			$scope.channes.push(res);
		})
		homeSer.getData("data/home_cases_channe.json").success(function(res) {
			$scope.channes.push(res);
		})
		homeSer.getData("data/home_watch_channe.json").success(function(res) {
			$scope.channes.push(res);
		})
		homeSer.getData("data/home_watch_goods_3.json").success(function(res) {
			$scope.channes.push(res);
		})

		homeSer.getData("data/home_beauty_goods_2.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_beauty_goods_3.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_cases_goods_2.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_cases_goods_3.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_boot_goods_2.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_boot_goods_3.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_watch_goods_2.json").success(function(res) {
			$scope.goods.push(res);
		})
		homeSer.getData("data/home_watch_goods_3.json").success(function(res) {
			$scope.goods.push(res);
		})

	}])
	//控制器 美妆
	.controller("home_beautyController", ["$scope", "homeService", "home_swiper", function($scope, homeSer, home_swiper) {
		home_swiper();
		homeSer.getData("data/home_beauty_channe_1.json").success(function(res) {
			$scope.channe = res;
		})
		homeSer.getData("data/home_beauty_goods_4.json").success(function(res) {
			$scope.goods_1 = res;
		})
		homeSer.getData("data/home_beauty_goods_5.json").success(function(res) {
			$scope.goods_2 = res;
		})
		homeSer.getData("data/home_beauty_goods_6.json").success(function(res) {
			$scope.goods_3 = res;
		})


	}])
	//控制器 箱包手袋
	.controller("home_casesController", ["$scope", "homeService", "home_swiper", function($scope, homeSer, home_swiper) {
		home_swiper();
		homeSer.getData("data/home_cases_channe_1.json").success(function(res) {
			$scope.channe = res;
		})
		homeSer.getData("data/home_cases_goods_4.json").success(function(res) {
			$scope.goods_1 = res;
		})
		homeSer.getData("data/home_cases_goods_5.json").success(function(res) {
			$scope.goods_2 = res;
		})
		homeSer.getData("data/home_cases_goods_6.json").success(function(res) {
			$scope.goods_3 = res;
		})

	}])
	//控制器 鞋靴
	.controller("home_bootController", ["$scope", "homeService", "home_swiper", function($scope, homeSer, home_swiper) {
		home_swiper();
		homeSer.getData("data/home_boot_channe_1.json").success(function(res) {
			$scope.channe = res;
		})
		homeSer.getData("data/home_boot_goods_4.json").success(function(res) {
			$scope.goods_1 = res;
		})
		homeSer.getData("data/home_boot_goods_5.json").success(function(res) {
			$scope.goods_2 = res;
		})
		homeSer.getData("data/home_boot_goods_6.json").success(function(res) {
			$scope.goods_3 = res;
		})

	}])

//控制器 手表配饰
.controller("home_watchController", ["$scope", "homeService", "home_swiper", function($scope, homeSer, home_swiper) {
	home_swiper();
	homeSer.getData("data/home_watch_channe_1.json").success(function(res) {
		$scope.channe = res;
	})
	homeSer.getData("data/home_watch_goods_4.json").success(function(res) {
		$scope.goods_1 = res;
	})
	homeSer.getData("data/home_watch_goods_5.json").success(function(res) {
		$scope.goods_2 = res;
	})
	homeSer.getData("data/home_watch_goods_6.json").success(function(res) {
		$scope.goods_3 = res;
	})
}])

//控制器 type
.controller("typeController",["$scope","typeService",function($scope,typeSer){
 	typeSer.getData().success(function(res){
 		$scope.items=res;
	});
}])
.controller("typeBrandController",["$scope","typeBrandService",function($scope,typeSer){
	 typeSer.getData().success(function(res){
	 	$scope.items=res;
    });
}])
//cheap_daily
.controller("cheapDailyController",["$scope","cheapDailyService",function($scope,myService){
	myService.getData().success(function(res){
		$scope.items=res;
	})
}])
//cheap_flash
.controller("hotController",["$scope","flashService","flashService1",function($scope,flashService,flashService1){
	flashService.getData().success(function(res){
		$scope.items=res;
	})
	flashService1.getData().success(function(res){
		$scope.item=res;
	})
}])
//cheap_flash  makeup
.controller("muController",["$scope","flashService2","flashService3",function($scope,flashService2,flashService3){
	flashService2.getData().success(function(res){
		$scope.items=res;
	})
	flashService3.getData().success(function(res){
		$scope.item=res;
	})
}])
//cheap_flash  婴儿玩具
.controller("childController",["$scope","flashService4","flashService5",function($scope,flashService4,flashService5){
	flashService4.getData().success(function(res){
		$scope.items=res;
	})
	flashService5.getData().success(function(res){
		$scope.item=res;
	})
}])

//cheap_flash  个人护理
.controller("perController",["$scope","flashService6","flashService7",function($scope,flashService6,flashService7){
	flashService6.getData().success(function(res){
		$scope.items=res;
	})
	flashService7.getData().success(function(res){
		$scope.item=res;
	})
}])
//cheap_hot
.controller("cheapHotController",["$scope","cheapHotService","cheapHotService1",function($scope,cheapHotService,cheapHotService1){
	cheapHotService.getData().success(function(res){
		$scope.items=res;
	})
	cheapHotService1.getData().success(function(res){
		$scope.item=res;
	})
}])
//cheap_cheap
.controller("cheapCheapController",["$scope","cheapCheapService",function($scope,cheapCheapService){
	cheapCheapService.getData().success(function(res){
		$scope.items=res;
	})
}])
.controller('cart',['$scope',"$rootScope","cart_sum","cart_allprice","cart_deleteprice",function($scope,$rootScope,cart_sum,cart_allprice,cart_deleteprice){
	$scope.goodList = $rootScope.goodList||[];
	$scope.resault= cart_sum($rootScope.goodList);
    $scope.surePrice =0;
    $scope.alonePrice = function(ele,e){
    	e = e||window.event;
    	if (e.target.className=="") {
    		e.target.className="selected";
    		$scope.surePrice += cart_allprice(ele);
    		
    	}else{
    		e.target.className = "";
    		$scope.surePrice +=cart_deleteprice(ele);
    		document.querySelector(".cat_last_div>span:first-of-type").setAttribute("class","");
    	}  	
    }
    // $scope.allPrice = function(e){
    // 	e = e||window.event;
    // 	if (e.target.className=="") {
    // 		e.target.className="selected";
    // 		$scope.surePrice = $scope.resault.money;
    // 		var check = document.querySelectorAll(".cat_in_span_9>span");
    // 		for (var i = 0; i < check.length; i++) {
    // 			check[i].setAttribute("class","selected");
    // 		};
    // 	}else{
    // 		var check = document.querySelectorAll(".cat_in_span_9>span");
    // 		for (var i = 0; i < check.length; i++) {
    // 			check[i].setAttribute("class","");
    // 		};
    // 		e.target.className = "";
    // 		$scope.surePrice =0;
    // 	}  	
    // }
}])
//goods
.controller('mydata',['$scope','goods_mydataservice',"$rootScope","cart_good",function($scope,goods_mydataservice,$rootScope,cart_good){
        goods_mydataservice.getData("data/goods.json").success(function(data){
			$scope.titlepic=data.operation.goods.pdd_list[0].rd_image_list[0];
			$scope.branddesc1=data.operation.goods.brand.desc;
			$scope.avatar_boss=data.operation.goods.brand.avatar;
			$scope.avatar_boss_copy=data.operation.goods.brand.title;
			$scope.from_icon=data.operation.goods.from_icon;
			$scope.from_icon_copy=data.operation.goods.mall_name;
			$scope.country_icon=data.operation.goods.brand.goods_list.country_icon;
			$scope.branddesc2=data.operation.goods.mall_desc;
			$scope.goods_promise=data.operation.goods_promise.short_title;
			$scope.goods_msg=data.operation.goods.pdd_list[0].description
			$scope.goods_num=data.operation.goods.pdd_list[0].productId;
			$scope.goods_titleCn=data.operation.goods.pdd_list[0].titleCn;
		})
        goods_mydataservice.getData("data/anothergoods.json").success(function(data){
			$scope.brand_list=data.operation.promotion_brand_list;
		})
        goods_mydataservice.getData("data/size_modulelist.json").success(function(data){
			$scope.pantssize=data.operation.module_list[0].table;
			$scope.demensiontitle=data.operation.module_list[1].title;
			$scope.demensioncharturl=data.operation.module_list[1].action_image.image_url;
		})
		$scope.goodInfo = $rootScope.goodInfo;
		$rootScope.goodList=$rootScope.goodList||[];
        $scope.buyNow = function(){
        	$rootScope.goodList = cart_good($scope.goodInfo, $rootScope.goodList);
        	alert("加入购物车成功");       	
        }
}])	
.controller("mineController",["$scope",function($scope){
	$scope.mineName=userObj.userName;
}])