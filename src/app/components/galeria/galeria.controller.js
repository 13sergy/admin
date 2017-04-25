(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .controller('GaleriaController', GaleriaController);

  /** @ngInject */
  function GaleriaController($scope) {
    var vm = this;
    $scope.activarMenu("mGaleria");
  }
})();
