angular.module("crmAdmin").directive("navTabs", function () {
	return {
		link: function (scope, element, attrs) {
            element.click(function (e) {
                e.preventDefault();
                jQuery(element).tab('show');
            });
        }
	};
});
