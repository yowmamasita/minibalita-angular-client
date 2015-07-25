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
    var self = this;
    self.list = [];

    self.initialize = initialize;

    function initialize() {
      ArticleREST.getAll()
        .success(function(resp) {
          // clearList(self.list);
          resp.results.forEach(function(data) {
            self.list.push(new Article(data));
          })
        });
    }

    function clearList(arr) {
      arr.length = 0;
    }
  }

})(window.angular);
