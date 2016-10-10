'use strict';

/**
 * @ngdoc function
 * @name kanbanListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanbanListApp
 */
angular.module('kanbanListApp')
  .controller('MenuTaleCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.showMenuTable = function() { return $rootScope.showTableMenu; };

    $scope.tableList = [
      { titre : "tableau 1" },
      { titre : "tableau 2" }
    ];
  }]);
