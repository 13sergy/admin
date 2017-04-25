(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    /**
     * Filtro que elimina la primera letra de la palabra que se le pasa como parametro y la devuelve.
     */
    .filter('QuitarLetra', function () {
      return function (palabra) {
        if (palabra) {
          if (palabra.length > 1) {
            return palabra.substr(1);

          } else return palabra;
        }
      }
    })
    /**
     * Filtro que muestra los primeros caracteres del mensaje. La parte que no entra en el bloque la sustituye por ...
     */
    .filter('MensajeCorto', function () {
      var maxLength = 35;
      return function (mensaje) {
        if (mensaje) {
          if (mensaje.length > maxLength) {
            return mensaje.substr(0, maxLength) + "...";

          } else return mensaje;
        }
      }
    })
    .filter('NotificacionCorta', function () {
      var maxLength = 35;
      return function (notificacion) {
        if (notificacion) {
          if (notificacion.length > maxLength) {
            return notificacion.substr(0, maxLength) + "...";

          } else return notificacion;
        }
      }
    })
})();





