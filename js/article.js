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
      // category class
      this.ngClass = {};
      this.ngClass['dt-' + this.category] = true;
      // reader url
      this.reader_url = 'http://www.minibalita.com/reader/' + this.id + '/1/' + encodeURIComponent(this.title);
    }

    return Article;
  }

})(window.angular);
