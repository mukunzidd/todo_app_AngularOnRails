(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

  	$scope.todos = [];
		
		$scope.addTodo = function(todo){
			if (todo) {
				$scope.todos.push(todo);
				$scope.newTodo = "";
			}
		};

		$scope.done = function(index){
			// var index = $scope.todos.indexOf(todo)
			$scope.todos.splice(index, 1);
		}

  });
  // window.$scope = $scope;
}());