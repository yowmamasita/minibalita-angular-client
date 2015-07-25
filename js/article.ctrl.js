(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .controller('ArticleCtrl', articleCtrl);

  articleCtrl.$inject = [
    'ArticleREST',
  ];

  function articleCtrl(ArticleREST) {
    var vm = this;
  }

})(window.angular);


