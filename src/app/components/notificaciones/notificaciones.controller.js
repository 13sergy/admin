(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .controller('NotificacionesController', NotificacionesController);

  /** @ngInject */
  function NotificacionesController(Notificaciones) {

    var vm = this;
    vm.notificaciones = Notificaciones.notificaciones; // Mensajes del usuario logueado

  }
})();
