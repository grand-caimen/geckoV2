'use strict';

angular.module( 'myApp')


.controller( 'UserTasksCtrl', 'ADMdtpProvider'
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


app.config(['ADMdtpProvider', function(ADMdtp) {
    ADMdtp.setOptions({
        calType: 'gregorian',
        format: 'YYYY/MM/DD HH:MM',
        ...
    });
}]);