'use strict';

angular.module( 'myApp' )

.controller( 'SitterSignUpCtrl',
    function ( $scope, Sitter ) {
      var info = {};

      $scope.sitterSignUp = function() {
        info.username = $scope.username;
        info.password = $scope.password;
        info.name = $scope.name;
        info.email = $scope.email;
        info.address = $scope.address;
        info.phone = $scope.phone;

        console.log('user: ', info);
        //Sitter.sitterPostSignUp doesn't exists yet..
        Sitter.sitterPostSignUp(info)
        .then(function () {
          $state.go('userTasks');
        })
      }
    });


