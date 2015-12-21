'use strict';

angular.module( 'myApp' )

.factory('UserLogin', function ($http) {
  var UserLogin = {};

  UserLogin.userPostLogin = function(user) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: user
    })
    .then(function (res) {
      console.log('user inside factory: ', res.data);
      return res.data.sessionId;
    })
  };

  return UserLogin;
});
