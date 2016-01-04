'use strict';

angular.module( 'myApp' )

.controller( 'SitterTasksCtrl',
    function ( $rootScope, $scope, $state, $cookies, Sitter ) {
      if ($cookies.get('sessionId') !== 'undefined') {

        $scope.myTasks = [];
        $scope.allTasks = [];

        // $scope.myTasksLoad = function() {
        //   Sitter.sitterGetTasks()
        //   .then(function (tasks) {
        //     console.log('tasks:....sfdfgdgdsggdfgdgsd ', tasks);
        //   // todo: push new/updated tasks to tasks arr
        //   // so we can display them.
        //     $scope.myTasks = tasks.data;
        //     console.log('tasks:.... ', tasks);
        //   })
        // }

        $scope.refreshTasks = function () {
          Sitter.sitterAllGetTasks()
          .then(function (tasks) {
            console.log('tasks:....sfdfgdgdsggdfgdgsd ', tasks);
            // todo: push new/updated tasks to tasks arr
            // so we can display them.
            tasks.data.forEach(function(task) {
              if (task.status === 'new') {
                $scope.allTasks.push(task);
              } else {
                $scope.myTasks.push(task);
              }
            })
          })
        }

        $scope.chooseTask = function(index) {
          Sitter.sitterChooseTask($scope.allTasks[index])
          .then(function() {
            $scope.refreshTasks();
          })
        }

        $scope.completeTask = function(index) {
          Sitter.sitterCompleteTask($scope.myTasks[index])
          .then(function() {
            $scope.refreshTasks();
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
        // $scope.myTasksLoad();
      } else {
        $state.go('sitterLogin');
      }
});
