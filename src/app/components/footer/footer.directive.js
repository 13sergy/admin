(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/footer/footer.html'
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
