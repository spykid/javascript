angular.module('tryitApp')
	.controller('ScheduleCtrl', function ($scope){
		$scope.talks = [];
	}
		));

angular.module('tryitApp')
	.service('Talks', function Talks() {
		var talks = [
		{
			'id' : 1,
			'title' : 'Acto de Apertura',
			'starts' : new Date('2012-03-17'),

		},];
		this.query = function() {
			return talks;
		};
	}) ;
	