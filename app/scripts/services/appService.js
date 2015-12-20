'use strict';

angular.module( 'myApp' )

.factory('UserLogin', function ($http) {
  var UserLogin = {};

  UserLogin.userPostLogin = function(usr) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: usr
    })
    .then(function (res) {
      return res.data.sessionId;
    })
  };

  return UserLogin;
});
