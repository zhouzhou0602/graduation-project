angular.module("myApp")
//home
.service("homeService",function($http){
	this.getData = function(url){
    return $http.get(url);
	}
})
//search
.service("searchService",function($http){
    this.getData = function(){
        return $http.get("data/filter.json");
    }
})
//type
.service("typeService",function($http){
    this.getData = function(){
        return $http.get("data/type.json");
    }
})
.service("typeBrandService",function($http){
    this.getData = function(){
        return $http.get("data/type_brand.json");
    }
})
//cheap_daily
.service("cheapDailyService",function($http){
    this.getData = function(){
        return  $http.get("data/cheap_hotTwo.json");
    }
    
})
//cheap_flash
.service("flashService",function($http){
    this.getData = function(){
        return  $http.get("data/cheap_hotOne.json");
    }
    
})
.service("flashService1",function($http){
    this.getData=function(){
        return $http.get("data/cheap_hotTwo.json");
    }
})	
.service("flashService2",function($http){
    this.getData = function(){
        return  $http.get("data/cheap_makeupOne.json");
    }
    
})
.service("flashService3",function($http){
    this.getData=function(){
        return $http.get("data/cheap_makeupTwo.json");
    }
})	
.service("flashService4",function($http){
    this.getData = function(){
        return  $http.get("../data/cheap_childOne.json");
    }
    
})
.service("flashService5",function($http){
    this.getData=function(){
        return $http.get("data/cheap_childTwo.json");
    }
})
.service("flashService6",function($http){
    this.getData = function(){
        return  $http.get("data/cheap_perOne.json");
    }
    
})
.service("flashService7",function($http){
    this.getData=function(){
        return $http.get("data/cheap_perTwo.json");
    }
})
//cheap_hot
.service("cheapHotService",function($http){
    this.getData = function(){
        return $http.get("data/cheap_hotOne.json");
    }
    
})
.service("cheapHotService1",function($http){
    this.getData=function(){
        return $http.get("data/cheap_hotTwo.json");
    }
})
//cheap_cheap
.service("cheapCheapService",function($http){
    this.getData = function(){
        return $http.get("data/cheap_hotTwo.json");
    }
    
})
//list
.service('goods_myhotselling_service',function($http){
    this.getData=function(){
        return $http.get('data/hot_selling.json');   
    }
})
//goods
.service('goods_mydataservice',function($http){
    this.items=[];
    this.getData=function(url){
        return $http.get(url);  
    }
})