(function() {
  'use strict';

  angular
    .module('adminDroneApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .when('/galeria', {
        templateUrl: 'app/components/galeria/galeria.html',
        controller: 'GaleriaController',
        controllerAs: 'galeria'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
