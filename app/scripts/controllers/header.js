'use strict';

/**
 * @ngdoc function
 * @name kanbanListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanbanListApp
 */
angular.module('kanbanListApp')
  .controller('HeaderCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

    $rootScope.showTableMenu = true;

    $scope.tableList = [
      { titre : "tableau 1" },
      { titre : "tableau 2" }
    ];

    $scope.showTableau = function(){
      if($rootScope.showTableMenu)
      {
        $rootScope.showTableMenu = false;
      }
      else
      {
        $rootScope.showTableMenu = true;
      }
    };
  }]);
