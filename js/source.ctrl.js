(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .controller('SourceCtrl', sourceCtrl);

  sourceCtrl.$inject = [
    'ArticleSvc',
  ];

  function sourceCtrl(Articles) {
    var vm = this;

    vm.list = Articles.list;

    Articles.initialize();
  }

})(window.angular);
