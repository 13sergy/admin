(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeAdminSidebar', acmeAdminSidebar);

  /** @ngInject */
  function acmeAdminSidebar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/adminSidebar/adminSidebar.html'
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
