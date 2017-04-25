(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeNotificaciones', acmeNotificaciones);

  /** @ngInject */
  function acmeNotificaciones() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/notificaciones/notificaciones.html',
      controller: 'NotificacionesController',
      controllerAs: 'NotificacionesCtrl',
      bindToController: true
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
