'use strict';

angular.module( 'myApp' )

.controller( 'UserTasksCtrl',
    function ( $rootScope, $scope, $state, $cookies, User, $filter ) {
      if ($cookies.get('sessionId') !== 'undefined') {

        var newTask = {};
        // var myTasks = [];


        $scope.refreshTasks = function() {
          User.userGetTasks()
          .then(function (tasks) {
          $scope.myTasks = tasks.data;

            console.log('My Tasks: ', $scope.myTasks);
            console.log('Refreshed tasks: ', tasks.data);
          })
        }

        $scope.addTask = function() {
          newTask.date = $filter('date')(new Date($scope.dateValue), 'MM/dd/yyyy'); //format date to 'MM/dd/yyyy'
          newTask.time = $scope.data.time;
          newTask.task = $scope.data.addedTask;
          newTask.notes = $scope.notes;

          console.log('New Task: ', newTask);

          User.userPostAddTask(newTask)

          .then(function () {
            $scope.refreshTasks();

            console.log('All tasks: ', tasks);
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
