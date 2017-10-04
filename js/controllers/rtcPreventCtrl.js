angular.module("rtcPrevent").controller("RtcPreventCtrl", function ($scope, $state, $timeout) {
	$scope.initial = ''

	$timeout(function(){
		$state.go("app.home");
	}, 5000)
});
