(function(angular) {

  'use strict';

  angular
    .module('mbApp', [])
    .run(function($log){
      $log.info("Hello from Firebase x AngularMaterial!");
    });

})(window.angular);
