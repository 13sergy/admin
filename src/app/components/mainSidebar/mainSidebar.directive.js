(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeMainSidebar', acmeMainSidebar);

  /** @ngInject */
  function acmeMainSidebar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/mainSidebar/mainSidebar.html'
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
