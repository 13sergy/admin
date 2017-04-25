(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .directive('acmeMensajes', acmeMensajes);

  /** @ngInject */
  function acmeMensajes() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/mensajes/mensajes.html',
      controller: 'MensajesController',
      controllerAs: 'MensajesCtrl',
      bindToController: true
    };

    return directive;
  }

})();
