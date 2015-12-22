'use strict';

angular.module( 'myApp' )

.controller( 'UserSignUpCtrl',
    function ( $scope, UserSignUp) {
      var info = {};

      $scope.userSignUp = function() {
        info.username = $scope.username;
        info.password = $scope.password;
        info.name = $scope.name;
        info.email = $scope.email;
        info.address = $scope.address;
        info.phone = $scope.phone;

        console.log('user: ', info);
        console.log(UserSignUp);
        UserSignUp.userPostSignUp(info)
      }
    });


