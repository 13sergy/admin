(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeLogo', acmeLogo);

  /** @ngInject */
  function acmeLogo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/logo/logo.html'
      // controller: LogoController,
      // controllerAs: 'vm',
      // bindToController: true
    };

    return directive;
    /*
     /!** @ngInject *!/
     function LogoController() {
     var vm = this;

     vm.saludo="bienvenido";
     }
     */
  }

})();
