(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .controller('MensajesController', MensajesController);

  /** @ngInject */
  function MensajesController(Mensajes) {
    // $log.debug("MensajesController");

    var vm = this;

    vm.mensajes = Mensajes.mensajes; // Mensajes del usuario logueado
    // $log.debug(vm.mensajes);

  }
})();
