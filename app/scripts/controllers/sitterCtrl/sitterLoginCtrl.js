'use strict';

angular.module( 'myApp' )

.controller( 'SitterLoginCtrl',
    function ( $rootScope, $scope, $state, SitterLogin ) {
      var sitter = {};

      $scope.sitterLogin = function() {
        sitter.sittername = $scope.sittername;
        sitter.password = $scope.password;
        console.log('sitter I: ', sitter);
        console.log(SitterLogin);
        $rootScope.sitter = sitter;
        SitterLogin.sitterPostLogin(sitter)
        .then(function () {
          $state.go('sitterTasks');
        });
      };
    });
