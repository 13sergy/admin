(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeTasks', acmeTasks);

  /** @ngInject */
  function acmeTasks() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/tasks/tasks.html'
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
