(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeSignin', acmeSignin);

  /** @ngInject */
  function acmeSignin() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/signin/signin.html'
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
