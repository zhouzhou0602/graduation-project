angular.module("myApp")
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("login");
	$stateProvider
	.state("home",{
		url : "/home",
		templateUrl : "module/home/home.html",
		controller : "myController",
		controller: function($state){
            $state.go('home.hot');//默认显示home.hot
        }
	})
	.state("home.hot",{
		url : "/home_hot",
		templateUrl : "module/home/views/home_hot.html"
	})
	.state("home.boot",{
		url : "/home_boot",
		templateUrl : "module/home/views/home_boot.html"
	})
	.state("home.cases",{
		url : "/home_cases",
		templateUrl : "module/home/views/home_cases.html"
	})
	.state("home.beauty",{
		url : "/home_beauty",
		templateUrl : "module/home/views/home_beauty.html"
	})
	.state("home.watch",{
		url : "/home_watch",
		templateUrl : "module/home/views/home_watch.html"
	})
	.state("type",{
		url : "/type",
		templateUrl : "module/type/type.html",
		controller : "myController",
		controller: function($state){
            $state.go('type.type');//默认显示home.hot
        }
	})
	.state("type.type",{
		url : "/type",
		templateUrl : "module/type/type_type.html"
	})
	.state("type.brand",{
		url : "/type_brand",
		templateUrl : "module/type/type_brand.html"
	})
	.state("cheapDaily",{
		url : "/cheap_daily",
		templateUrl : "module/cheap/cheap_daily.html"
	})
	.state("cheapFlash",{
		url : "/cheap_flash_index",
		templateUrl : "module/cheap/cheap_flash/cheap_flash_index.html",
		controller : "myController",
		controller: function($state){
            $state.go('cheapFlash.hot');//默认显示home.hot
        }
	})
	.state("cheapFlash.hot",{
		url : "/cheap_flash_hot",
		templateUrl : "module/cheap/cheap_flash/cheap_flash_hot.html"
	})
	.state("cheapFlash.makeup",{
		url : "/cheap_flash_makeup",
		templateUrl : "module/cheap/cheap_flash/cheap_flash_makeup.html"
	})
	.state("cheapFlash.children",{
		url : "/cheap_flash_children",
		templateUrl : "module/cheap/cheap_flash/cheap_flash_children.html"
	})
	.state("cheapFlash.person",{
		url : "/cheap_flash_person",
		templateUrl : "module/cheap/cheap_flash/cheap_flash_person.html"
	})
	.state("cheapHot",{
		url : "/cheap_hot",
		templateUrl : "module/cheap/cheap_hot.html"
	})
	.state("cheapCheap",{
		url : "/cheap_cheap",
		templateUrl : "module/cheap/cheap_cheap.html"
	})
	.state("search",{
		url : "/search",
		templateUrl : "module/search/search.html"
	})
	.state("list",{
		url : "/list",
		templateUrl : "module/list/list.html"
	})
	.state("goods",{
		url : "/goods",
		templateUrl : "module/goods/goods.html"
	})
	.state("cart",{
		url : "/cart",
		templateUrl : "module/cart/cart.html"
	})
	.state("mine",{
		url : "/mine",
		templateUrl : "module/mine/mine.html"
	})
	.state("mine_info",{
		url : "/mine_info",
		templateUrl : "module/mine/mine_info.html"
	})
	.state("mine_person",{
		url : "/mine_person",
		templateUrl : "module/mine/mine_person.html"
	})
	.state("register",{
		url : "/register",
		templateUrl : "module/register/register.html"
	})
	.state("login",{
		url : "/login",
		templateUrl : "module/login/login.html"
	})
})