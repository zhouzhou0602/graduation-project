angular.module("myApp")
	.filter("homeFilter", function() {
		return function(val) {
			var localDate = new Date().getTime();
			var endTime = new Date(val);
			var moreTime = endTime - localDate;
			var day = parseInt(moreTime / 1000 / 60 / 60 / 24);
			var hour = parseInt((moreTime - day * 24 * 60 * 60 * 1000) / 1000 / 60 / 60);
			var min = parseInt((moreTime - day * 24 * 60 * 60 * 1000 - hour * 1000 * 60 * 60) / 1000 / 60);
			var ss = parseInt((moreTime - day * 24 * 60 * 60 * 1000 - hour * 1000 * 60 * 60 - min * 1000 * 60) / 1000);
			if (hour<10) {
				hour = "0"+hour;
			}
			if (min<10) {
				min = "0"+min;
			}
			if (ss<10) {
				ss = "0"+ss;
			}
			return day + "天" + hour + "小时";
		}
	})