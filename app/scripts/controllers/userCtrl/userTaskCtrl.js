'use strict';

angular.module( 'myApp' )

.controller( 'UserTasksCtrl',
    function ( $rootScope, $scope, $state, UserTasks ) {
      $scope.loggedUser = $scope.user;
    });
