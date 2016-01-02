'use strict';

angular.module( 'myApp' )

.controller( 'UserLoginCtrl',
    function ( $rootScope, $scope, $state, User ) {
       $scope.user = {
         username: undefined,
         password: undefined
       };

       $scope.authError = undefined;


      $scope.userLogin = function() {
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
