(function() {
  'use strict';

  angular
    .module('adminDroneApp')
    .service('Mensajes', Mensajes);

  /** @ngInject */
  function Mensajes() {
    var self = {
      mensajes:[{
        img:'theme/img/user6-128x128.jpg',
        nombre: 'Juan Carlos',
        mensaje: 'Bienvenido a la web',
        fecha:'5-Marzo'
      },{
        img:'theme/img/user4-128x128.jpg',
        nombre: 'Maria Soto',
        mensaje: 'Te envio los resultados de la prueba que hicimos en la web',
        fecha:'6-Marzo'
      },{
        img:'theme/img/user3-128x128.jpg',
        nombre: 'Marisa Torres',
        mensaje: 'Presupuestos Marzo',
        fecha:'7-Marzo'
      }]
    };

    return self;
  }

})();
