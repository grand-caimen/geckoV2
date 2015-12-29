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
        .then(function (res) {
          console.log('res after user signin: ', res);
          if (res) {
            $state.go('userTasks');
          } else {
            alert('invalid username/password');
          }
        });
      };
    });
