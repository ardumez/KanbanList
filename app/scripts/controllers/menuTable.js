'use strict';

/**
 * @ngdoc function
 * @name kanbanListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanbanListApp
 */
angular.module('kanbanListApp')
  .controller('MenuTaleCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.tableList = [];
  });
