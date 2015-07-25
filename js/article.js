(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .factory('ArticleModel', articleModel);

  articleModel.$inject = [
    //
  ];

  function articleModel() {
    function Article(data) {
      angular.extend(this, data);
    }

    return Article;
  }

})(window.angular);
