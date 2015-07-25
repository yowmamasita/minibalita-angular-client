(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .controller('SingleCtrl', singleCtrl);

  singleCtrl.$inject = [
    'ArticleSvc',
  ];

  function singleCtrl(Articles) {
    var vm = this;

    vm.list = Articles.list;

    Articles.initialize();
  }

})(window.angular);
