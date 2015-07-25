(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .controller('ArticleCtrl', articleCtrl);

  articleCtrl.$inject = [
    'ArticleSvc',
  ];

  function articleCtrl(Articles) {
    var vm = this;

    vm.list = Articles.list;
  }

})(window.angular);
