'use strict';

angular.module('modularblog', [
    'ngRoute',
]).config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
    '$compileProvider'
]).function (
    $routeProvider,
    $locationProvider,
    $httpProvider,
    $compileProvider
) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/setup', {
        templateUrl: 'views/setup.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
}]).run(function (
    $rootScope
){
    // Add logic to load on initialization
});
