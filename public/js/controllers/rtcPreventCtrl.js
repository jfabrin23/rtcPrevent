angular.module("rtcPrevent").controller("RtcPreventCtrl", function ($scope, $state, $timeout) {
	$scope.initial = ''
	if ($state.current.name === 'init'){
		$timeout(function(){
			$state.go("app.home");
		}, 5000)
	}
});
