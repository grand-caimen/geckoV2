'use strict';

angular.module( 'myApp' )

.controller( 'UserSignUpCtrl',
    function ( $scope, UserSignUp) {
      var info = {};

      $scope.userSignUp = function() {
        info.username = $scope.username;
        info.password = $scope.password;
        console.log('user: ', info);
        console.log(UserLogin);
        UserLogin.userPostLogin(user)
      }
    });
