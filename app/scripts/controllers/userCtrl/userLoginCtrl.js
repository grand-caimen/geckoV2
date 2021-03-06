'use strict';

angular.module( 'myApp' )

.controller( 'UserLoginCtrl',
    function ( $rootScope, $scope, $state, $cookies, User ) {
      console.log('cookie: ', $cookies.get('sessionId'));
      $scope.user = {
         username: undefined,
         password: undefined
      };

      $scope.authError = undefined;

      $scope.userLogin = function() {
        $rootScope.user = $scope.user;
        User.userPostLogin($scope.user)
        .then(function (res) {
          console.log('res after user signin: ', res);
          if (res) {
            $state.go('userTasks');
          } else {
            $scope.authError = 'Invalid username/password'
          }
        });
      };
    });
