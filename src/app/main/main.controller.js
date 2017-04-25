(function () {
  'use strict';

  angular
    .module('adminDroneApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log,$scope, Configuracion, LoginService) {
    $log.debug("MainController");

    var vm = this;
    // vm.scope=$scope;
    // vm.tituloMain = "Main";
    vm.config = {};

    Configuracion.cargar().then(function () {
      vm.config = Configuracion.config.data;
    });

    /**
     * Funcion que activa el elemento del menu seleccionado.
     * @param menu
     * @param submenu
     */
    $scope.activarMenu = function (menu, submenu) {
      $scope.mDashboard = "";
      $scope.mGaleria = "";
      $scope[menu] = 'active';
    }

    //  LOGIN
    $scope.invalido = false;
    $scope.cargando = false;
    $scope.mensaje = 'error';

    $scope.checkLogin=function (datos) {
      // $log.debug(datos);

      LoginService.login(datos).then(function (data) {
        $log.debug(data);

        /*if(data.err){
          $scope.invalido=true;
          $scope.cargando=false;
          $scope.mensaje=data.mensaje;
        }else{
          $log.debug("LOGIN VALIDO");
          // alert("LOGIN VALIDO");
        }*/
      });
    }

  }
})();
