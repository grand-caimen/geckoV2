'use strict';

angular.module( 'myApp' )

.controller( 'UserLoginCtrl',
    function ( $rootScope, $scope, $state, User ) {
      var user = {};

      $scope.userLogin = function() {
        user.username = $scope.username;
        user.password = $scope.password;
        console.log('user I: ', user);
        $rootScope.user = user;
        User.userPostLogin(user)
        .then(function (res) {
          console.log('res after user signin: ', res);
          if (res) {
            $state.go('userTasks');
          } else {
            alert('Invalid username/password');
          }
        });
      };
    });
