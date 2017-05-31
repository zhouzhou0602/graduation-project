angular.module("myApp")
	.factory("home_swiper", function() {
		return function() {
			var mySwiper = new Swiper('.swiper-container', {
				lazyLoading: true,
				preloadImages: true,
				autoplay: 2500,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				pagination: '.swiper-pagination',
				paginationClickable: true,
			})
		}
	})
	.factory("home_scroll", function() {
		function returnTop() {
			if (!document.getElementById("returnTop")) {
				window.removeEventListener("scroll", returnTop);
				return;
			}
			var scrollTop = document.documentElement.scrollTop || window.scrollTop || document.body.scrollTop;
			var returnUp = document.getElementById("returnTop");
			if (scrollTop > 1000) {
				returnUp.style.display = "block";
			}
			if (scrollTop < 1000) {
				returnUp.style.display = "none";
			}
		}
		return function() {
			window.addEventListener('scroll', returnTop);
		}
	})
	.factory("home_getInfo", function() {
		return function(ele) {
			if (ele.global_goods) {
				var goodInfo = {
					img: ele.global_goods.selected_sku.image_url,
					name: ele.global_goods.title,
					price: ele.global_goods.selected_sku.fixed_price,
					old_price: ele.global_goods.selected_sku.tag_price,
					id: ele.global_goods.goods_id,
					mail_name: ele.global_goods.mall_name,
					country: ele.global_goods.country
				}
			} else {
				var goodInfo = {
					img: ele.selected_sku.image_url,
					name: ele.title,
					price: ele.selected_sku.fixed_price,
					old_price: ele.selected_sku.restore_price,
					id: ele.goods_id,
					mail_name: ele.mall_name,
					country: ele.country
				}
			}

			return goodInfo;
		}
	})
	.factory("cart_good", function() {
		return function(ele, arr) {
			if (arr.length == 0) {
				ele.num = 1;
				arr.push(ele);
				return arr;
			} else {
				for (var i = 0; i < arr.length; i++) {
					if (ele.id == arr[i].id) {
						arr[i].num = arr[i].num + 1;
						return arr;
					}
				};
				ele.num = 1;
				arr.push(ele);
				return arr;
			}
		}
	})
	.factory("cart_sum", function() {
		return function(arr) {
			var sum = 0;
			var money = 0;
			for (var i = 0; i < arr.length; i++) {
				sum += arr[i].num;
				money += (arr[i].price*arr[i].num);
			}
			return {
				sum:sum,
				money:money
			};
		};
	})
	.factory("cart_allprice", function() {
		return function(arr) {
			var allPrice = 0;
			allPrice+=(Number(arr.price)*arr.num);
			return allPrice;
		};
	})
	.factory("cart_deleteprice", function() {
		return function(arr) {
			var allPrice = 0;
			allPrice-=(Number(arr.price)*arr.num);
			return allPrice;
		};
	})