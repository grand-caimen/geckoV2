'use strict';

angular.module( 'myApp' )

.factory('User', function ($http) {
  var User = {};

  User.userPostLogin = function(user) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: user
    })
    .then(function (res) {
      console.log('user inside factory: ', res.data);
      console.log('user sessionID after signin: ', res.data.sessionId);
      return res.data;
    })
  };

  User.userPostSignUp = function(info) {
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

  User.userGetTasks = function() {
    return $http({
      method: 'GET',
      url: '/mytasks'
    })
    .then(function (res) {
      console.log('tasks inside UserTasks.getTasks factory: ', res);
      return res;
    })
  };

  User.userPostLogout = function() {
    return $http({
      method: 'POST',
      url: '/signout'
    })
    .then(function (res) {
      console.log('user inside factory: ', res.data);
      console.log('user sessionID after logout: ', res.data.sessionId);
      return res.data.sessionId;
    })
  };

  return User;
})

.factory('Sitter', function ($http) {
  var Sitter = {};

  Sitter.sitterPostLogin = function(sitter) {
    return $http({
      method: 'POST',
      url: 'sitter/signin',
      data: sitter
    })
    .then(function (res) {
      console.log('sitter inside factory: ', res.data);
      return res.data;
    })
  };

  Sitter.sitterPostLogout = function() {
    return $http({
      method: 'POST',
      url: 'sitter/signout'
    })
    .then(function (res) {
      console.log('sitter inside factory: ', res.data);
      console.log('sitter sessionID after logout: ', res.data.sessionId);
      return res.data.sessionId;
    })
  };

  Sitter.sitterGetTasks = function() {
    return $http({
      method: 'GET',
      url: 'sitter/mytasks'
    })
    .then(function (res) {
      console.log('tasks inside SitterTasks.getTasks factory: ', res);
      return res;
    })
  };

  return Sitter;
})
