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

  User.userPostAddTask = function(newTask) {
    return $http({
      method: 'POST',
      url: '/newtask',
      data: newTask
    })
    .then(function (res) {
      console.log('tasks inside UserTasks.newTasks factory: ', res);
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
    console.log('sitter test :', sitter);
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

  Sitter.sitterAllGetTasks = function () {
    return $http({
      method: 'GET',
      url: 'sitter/tasks'
    })
    .then(function (res) {
      console.log('tasks inside SitterTasks.getTasks factory: ', res);
      return res;
    })
  };

  Sitter.sitterChooseTask = function(task) {

    console.log('task: ', task);
    return $http({
      method: 'POST',
      url: 'sitter/tasks',
      data: task
    })
    .then(function (res) {
      console.log('task post to backend: ', res);
      return res;
    })
  }
  return Sitter;
})
