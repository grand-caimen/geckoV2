'use strict';

angular.module( 'myApp' )

.controller( 'UserLoginCtrl',
    function ( $scope, UserLogin ) {
      var user = {};

      $scope.userLogin = function() {
        user.username = $scope.username;
        user.password = $scope.password;
        console.log('user I: ', user);
        console.log(UserLogin);
        UserLogin.userPostLogin(user)
      }
    });