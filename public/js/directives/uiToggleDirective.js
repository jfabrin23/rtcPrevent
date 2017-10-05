angular.module("crmAdmin").directive("toggle", function ($compile,$http) {
	return {
    restrict: 'A',
    link: function(scope, element, attrs){
      	if (attrs.toggle=="tooltip"){
        	$(element).tooltip();
      	}
  		if (attrs.toggle=="popover"){
			var html = "<div class='jumbotron'>Teste</div>"
			var compile = $compile(html);
        	$(element).popover({
				html:true
			});
      	}
    }
  };
});
