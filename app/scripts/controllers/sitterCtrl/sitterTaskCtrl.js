'use strict';

angular.module( 'myApp' )

.controller( 'SitterTasksCtrl',
    function ( $rootScope, $scope, $state, $cookies, Sitter ) {
      if ($cookies.get('sessionId') !== 'undefined') {

        $scope.tasks = ['Current tasks'];

        $scope.refreshTasks = function() {
          Sitter.sitterGetTasks()
          .then(function (tasks) {
          // todo: push new/updated tasks to tasks arr
          // so we can display them.
            console.log('tasks: ', tasks);
          })
        }

        $scope.sitterLogout = function() {
          Sitter.sitterPostLogout()
          .then(function (res) {
            console.log('after sitter logout: ', res);
            $state.go('index');
          })
        }
        $scope.refreshTasks();
      } else {
        $state.go('sitterLogin');
      }
});
