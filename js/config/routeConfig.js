angular.module("rtcPrevent").config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('init', {
		name       : 'init',
		url        : '/init',
		templateUrl: 'view/init.html',
		controller : 'RtcPreventCtrl',
		authorize   : true
	})
	$stateProvider.state('app', {
		abstract   : true,
		url        : '/app',
		templateUrl: 'view/app.html',
		controller : 'RtcPreventCtrl'
	})
	.state('app.home', {
		url        : '/home',
		templateUrl: 'view/home.html',
		controller : 'HomeCtrl',
		resolve    : {
			
		}
	})

	$urlRouterProvider.otherwise("/init");
});
