'use strict';

angular.module( 'myApp' )

.controller( 'SitterLoginCtrl',
    function ( $rootScope, $scope, $state, Sitter ) {
      $scope.sitter = {
        username: undefined,
        password: undefined
      };

      $scope.authError = undefined;

      $scope.sitterLogin = function() {
        $rootScope.sitter = $scope.sitter;
        Sitter.sitterPostLogin($scope.sitter)
        .then(function (res) {
          if (res) {
            $state.go('sitterTasks');
          } else {
            $scope.authError = 'Invalid username/password';
          }
        });
      };
    });
