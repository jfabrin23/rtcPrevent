angular.module("crmAdmin").directive("uiDatemonth", function ($filter) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (date) {
				if (!date) return date;
				date = date.replace(/[^0-9]+/g, "");
				if(date.length > 2) {
					date = date.substring(0,2) + "/" + date.substring(2,6);
				}
				return date;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			ctrl.$parsers.push(function (value) {
				if (value.length === 7) {
					var dateArray = value.split("/");
					return dateArray[1]+"-"+dateArray[0]+"-01";
				}
			});

			ctrl.$formatters.push(function (value) {
				if (value != undefined){
					return value;
				}
			});
		}
	};
});
