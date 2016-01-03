'use strict';

angular.module( 'myApp')

<<<<<<< HEAD

.controller( 'UserTasksCtrl', 'ADMdtpProvider'
    function ( $rootScope, $scope, $state, UserTasks ) {
      $scope.loggedUser = $scope.user;
=======
.controller( 'UserTasksCtrl',
    function ( $rootScope, $scope, $state, User ) {
>>>>>>> 73aa12cb6b9c5a731968414c660ba36ff888a98d
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


app.config(['ADMdtpProvider', function(ADMdtp) {
    ADMdtp.setOptions({
        calType: 'gregorian',
        format: 'YYYY/MM/DD HH:MM',
        ...
    });
}]);
