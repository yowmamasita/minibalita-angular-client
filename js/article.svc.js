(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .service('ArticleSvc', articleSvc);

  articleSvc.$inject = [
    'ArticleREST',
    'ArticleModel',
  ];

  function articleSvc(ArticleREST, Article) {
    this.list = [];
  }

})(window.angular);
