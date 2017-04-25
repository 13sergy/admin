(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope) {

    var vm = this;
    $scope.activarMenu('mDashboard');
  }
})();
