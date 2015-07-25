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
      .when('/source/:sourceName', {
        templateUrl: '/source.partial.html',
        controller: 'SourceCtrl',
        controllerAs: 'vm',
      })
      .when('/category/:categoryName', {
        templateUrl: '/category.partial.html',
        controller: 'CategoryCtrl',
        controllerAs: 'vm',
      })
      .otherwise({
        redirectTo: '/',
      });

    $locationProvider.html5Mode(true);
  }
})(window.angular);
