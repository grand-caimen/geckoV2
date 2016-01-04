'use strict';

angular.module( 'myApp' )

.controller( 'SitterTasksCtrl',
    function ( $rootScope, $scope, $state, $cookies, Sitter ) {
      if ($cookies.get('sessionId') !== 'undefined') {

        $scope.tasks = ['Current tasks'];

        $scope.myTasksLoad = function() {
          Sitter.sitterGetTasks()
          .then(function (tasks) {
            console.log('tasks:....sfdfgdgdsggdfgdgsd ', tasks);
          // todo: push new/updated tasks to tasks arr
          // so we can display them.
            $scope.myTasks = tasks.data;
            console.log('tasks:.... ', tasks);
          })
        }

        $scope.refreshTasks = function () {
          Sitter.sitterAllGetTasks()
          .then(function (tasks) {
            console.log('tasks:....sfdfgdgdsggdfgdgsd ', tasks);
            // todo: push new/updated tasks to tasks arr
            // so we can display them.
            $scope.allTasks = tasks.data;
            console.log('tasks:.... ', tasks);
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
        $scope.myTasksLoad();
      } else {
        $state.go('sitterLogin');
      }
});
