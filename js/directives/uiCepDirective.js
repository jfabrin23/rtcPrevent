angular.module("crmAdmin").directive("uiCep", function ($filter) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatCep = function (cep) {
				if (!cep) return cep;
				cep = cep.replace(/[^0-9]+/g, "");
				if(cep.length > 5) {
					cep = cep.substring(0,5) + "-" + cep.substring(5,8);
				}

				return cep;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatCep(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});
