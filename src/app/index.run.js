(function() {
  'use strict';

  angular
    .module('adminDroneApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
