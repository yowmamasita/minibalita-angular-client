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
      // category
      // id
      // image_path
      // sona_name_processed
      // source
      // summary
      // timestamp
      // title
      // url
      angular.extend(this, data);
      this.ngClass = {};
      this.ngClass['dt-' + this.category] = true;
    }

    return Article;
  }

})(window.angular);
