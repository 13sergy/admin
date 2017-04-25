(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .factory('LoginService', LoginService);

  /** @ngInject */
  function LoginService($http, $q, $log) {
    var self = {

      login: function (datos) {

        var d = $q.defer();

        $log.debug("LoginService");
        $log.debug(datos);

        /*$http.post('php/login/post.verificar.php', datos, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })*/

        $http.post('php/login/post.verificar.php', datos)

         .then(function (data) {
            // $log.debug(data);
            d.resolve( data );
         })

         .catch(function () {
           $log.error("No se pudo cargar el archivo de configuración.");
         d.reject();
         });

        return d.promise;
      }
    };

    return self;
  }
})();
