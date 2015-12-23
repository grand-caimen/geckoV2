'use strict';

angular.module( 'myApp' )

.controller( 'UserLoginCtrl',
    function ( $rootScope, $scope, $state, UserLogin ) {
      var user = {};

      $scope.userLogin = function() {
        user.username = $scope.username;
        user.password = $scope.password;
        console.log('user I: ', user);
        console.log(UserLogin);
        $rootScope.user = user;
        UserLogin.userPostLogin(user)
        .then(function () {
          $state.go('userTasks');
        });
      };
    });
