function TodoCtrl ($scope) {
	$scope.todos = [{text: 'Learn Angluar Js', done: false}, {text: 'Learn PHP', done: false}];
	$scope.addToDo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false})
		$scope.formTodoText = '';
	}
	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}

	$scope.clearCompleted = function() {
		$scope.todos = filter($scope.todos, function(todo){
			return todo.done;
		})

	}

}