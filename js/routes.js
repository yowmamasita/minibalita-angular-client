(function(angular) {

  'use strict';

  angular
    .module('mbApp')
    .config(routes);

  routes.$inject = [
    '$routeProvider',
    '$locationProvider',
  ];

  function routes($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/partials/main.partial.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm',
      })
      .when('/source/:sourceName', {
        templateUrl: '/partials/source.partial.html',
        controller: 'SourceCtrl',
        controllerAs: 'vm',
      })
      .when('/category/:categoryName', {
        templateUrl: '/partials/category.partial.html',
        controller: 'CategoryCtrl',
        controllerAs: 'vm',
      })
      .when('/article/:articleId/:articleName', {
        templateUrl: '/partials/single.partial.html',
        controller: 'SingleCtrl',
        controllerAs: 'vm',
      })
      .otherwise({
        redirectTo: '/',
      });

    $locationProvider.html5Mode(true);
  }
})(window.angular);
