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
})

.factory('UserSignUp', function ($http) {
  var UserSignUp = {};

  UserSignUp.userPostSignUp = function(info) {
    return $http({
      method: 'POST',
      url: '/signup',
      data: info
    })
    .then(function (res) {
      console.log('user signup inside factory: ', res.data);
      return res.data.sessionId;
    })
  };

  return UserSignUp;
});
