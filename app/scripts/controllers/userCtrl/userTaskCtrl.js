'use strict';

angular.module( 'myApp' )

.controller( 'UserTasksCtrl',
    function ( $rootScope, $scope, $state, UserTasks ) {
      $scope.loggedUser = $scope.user;
      $scope.tasks = ['Current tasks'];

      $scope.refreshTasks = function() {
        UserTasks.getTasks()
        // todo: push new/updated tasks to tasks arr
        // so we can display them.
        .then(function (tasks) {
          console.log('tasks: ', tasks);
        })
      }

      $scope.refreshTasks();
    });
