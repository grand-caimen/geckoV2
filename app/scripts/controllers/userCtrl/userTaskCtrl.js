'use strict';

angular.module( 'myApp' )

.controller( 'UserTasksCtrl',
    function ( $rootScope, $scope, $state, User ) {
      $scope.tasks = ['Current tasks'];

      $scope.refreshTasks = function() {
        User.getTasks()
        .then(function (tasks) {
        // todo: push new/updated tasks to tasks arr
        // so we can display them.
          console.log('tasks: ', tasks);
        })
      }

      $scope.userLogout = function() {
        User.userPostLogout()
        .then(function (res) {
          console.log('after user logout: ', res);
          $state.go('index');
        })
      }

      $scope.refreshTasks();
    });
