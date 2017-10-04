angular.module("crmAdmin").directive("uiPhone", function ($filter) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatPhone = function (phone) {
				if (!phone) return phone;
				phone = phone.replace(/[^0-9]+/g, "");
				if(phone.length > 2) {
					phone = "("+phone.substring(0,2)+") "+phone.substring(2);
				}
				if (phone.length > 13) {
					phone = phone.substring(0,10)+"-"+phone.substring(10,14);
				} else {
					phone = phone.substring(0,9)+"-"+phone.substring(9,13);
				}

				return phone;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});
