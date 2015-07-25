(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .service('ArticleREST', articleREST);

  articleREST.$inject = [
    '$http',
  ];

  function articleREST(http) {
    this.getAll = function() {
      return http.get('http://www.minibalita.com/json/reader/1');
    };
  }

})(window.angular);
