(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .controller('CategoryCtrl', categoryCtrl);

  categoryCtrl.$inject = [
    'ArticleSvc',
  ];

  function categoryCtrl(Articles) {
    var vm = this;

    vm.list = Articles.list;

    Articles.initialize();
  }

})(window.angular);
