angular.module('tryitApp')
	.controller('ScheduleCtrl', function ($scope, Talks){
		$scope.talks = Talks.query();
	}
		));

angular.module('tryitApp')
.factory('Favorites', function ($log) {
	var Favorites = [];

	function addTalk(talk) {

	}
	function isIn(talk) {

	}

	return {
		addTalk: addTalk,
		isIn: isIn,
		talks: function() {
			return favorites;
		},
	}
})