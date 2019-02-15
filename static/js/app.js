(function () {

  'use strict';

  angular
    .module('app', ['auth0.lock', 'angular-jwt', 'ui.router'])
    .config(config);

  function config($stateProvider, lockProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'static/home/home.html',
        controllerAs: 'vm'
      });

    lockProvider.init({
      clientID: 'dHCeAvImpUyvxssQpYZCG86OyZSJlXhH',
      domain: 'jiepang.auth0.com'
    });

    $urlRouterProvider.otherwise('/home');
  }

})();