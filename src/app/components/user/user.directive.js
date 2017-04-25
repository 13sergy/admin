(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeUser', acmeUser);

  /** @ngInject */
  function acmeUser() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/user/user.html'
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
