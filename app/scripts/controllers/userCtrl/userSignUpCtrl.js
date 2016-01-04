'use strict';

angular.module( 'myApp' )

.controller( 'UserSignUpCtrl',
    function ( $scope, $rootScope, $state, User ) {
      // var info = {};

      $scope.user = {
        username: undefined,
        passowrd: undefined,
        name: undefined,
        email: undefined,
        address: undefined,
        phone: undefined
      };

      $scope.userSignUp = function() {
        // info.username = $scope.username;
        // info.password = $scope.password;
        // info.name = $scope.name;
        // info.email = $scope.email;
        // info.address = $scope.address;
        // info.phone = $scope.phone;

        console.log('user: ', $scope.user);
        User.userPostSignUp($scope.user)
        .then(function () {
          $rootScope.user = $scope.user;
          $state.go('userTasks');
        })
      }
    });


