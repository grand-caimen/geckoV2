'use strict';

angular.module( 'myApp' )

.controller( 'UserTasksCtrl',
    function ( $rootScope, $scope, $state, $cookies, User ) {
      console.log('typeof cookie: ', typeof $cookies.get('sessionId'));
      if ($cookies.get('sessionId') !== 'undefined') {

        $scope.tasks = ['Current tasks'];

        $scope.refreshTasks = function() {
          User.userGetTasks()
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
      } else {
        $state.go('userLogin');
      }
});
