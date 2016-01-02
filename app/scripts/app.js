'use strict';

angular
  .module( 'myApp', [
    'ngResource',
    'ui.router',
    'ADM-dateTimePicker'
  ] )
  .config(
    function ( $stateProvider, $urlRouterProvider, ADMdtpProvider) {

      //delete $httpProvider.defaults.headers.common[ 'X-Requested-With' ];
      $urlRouterProvider.otherwise( '/' );
      $stateProvider
        .state( 'index', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('userLogin', {
          url: '/userlogin',
          templateUrl: 'views/userViews/userLogin.html',
          controller: 'UserLoginCtrl'
        })
        .state('userSignUp', {
          url: '/usersignup',
          templateUrl: 'views/userViews/userSignUp.html',
          controller: 'UserSignUpCtrl'
        })
        .state('userTasks', {
          url: '/usertasks',
          templateUrl: 'views/userViews/userTasks.html',
          controller: 'UserTasksCtrl'
        })
        .state('sitterLogin', {
          url: '/sitterlogin',
          templateUrl: 'views/sitterViews/sitterLogin.html',
          controller: 'SitterLoginCtrl'
        })
        .state('sitterSignUp', {
          url: '/sittersignup',
          templateUrl: 'views/sitterViews/sitterSignUp.html',
          controller: 'SitterSignUpCtrl'
        })
        .state('sitterTasks', {
          url: '/sittertasks',
          templateUrl: 'views/sitterViews/sitterTasks.html',
          controller: 'SitterTasksCtrl'
        })
    }
  )


