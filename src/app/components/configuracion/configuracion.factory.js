(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .factory('Configuracion', Configuracion);

  /** @ngInject */
  function Configuracion($http, $q) {
    var self = {
      config: {},
      cargar: function () {
        var d = $q.defer();

        $http.get('configuracion.json')

          .then(function (data) {
            self.config = data;
            d.resolve();
          })

          .catch(function () {
            console.error("No se pudo cargar el archivo de configuración.");
            d.reject();
          });
        return d.promise;
      }
    };

    return self;
  }
})();
