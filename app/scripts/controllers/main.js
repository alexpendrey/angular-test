'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {

    $scope.todos = [];

    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    }

    $scope.remoteTodo = function (index) {
    	$scope.todos.splice(index, 1);
    }

  });
