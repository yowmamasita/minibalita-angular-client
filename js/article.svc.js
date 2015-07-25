(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .service('ArticleSvc', articleSvc);

  articleSvc.$inject = [
    'ArticleModel',
  ];

  function articleSvc(Article) {
    this.list = [];
  }

})(window.angular);
