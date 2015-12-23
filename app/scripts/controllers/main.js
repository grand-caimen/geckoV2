'use strict';


//Need define the OnClick event for the input button
angular.module( 'myApp' )
  .controller( 'MainCtrl',
    function ( $scope ) {

      $scope.awesomeThings = [
        'LoopBack',
        'AngularJS + UI Router',
        'HTML5 Boilerplate',
        'Bootstrap CSS',
        'Karma + Jasmine'
      ];

    });

