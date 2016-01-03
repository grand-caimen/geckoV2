'use strict';

angular.module( 'myApp' )

.controller( 'SitterLoginCtrl',
    function ( $rootScope, $scope, $state, SitterLogin ) {
      $scope.sitter = {
        username: undefined,
        password: undefined
      };

      $scope.authError = undefined;

      $scope.sitterLogin = function() {
        SitterLogin.sitterPostLogin($scope.sitter)
        .then(function (res) {
          if (res) {
            $state.go('sitterTasks');
          } else {
            $scope.authError = 'Invalid username/password'
          }
        });
      };
    });
