'use strict';

/**
 * @ngdoc overview
 * @name ergoCardGameApp
 * @description
 * # ergoCardGameApp
 *
 * Main module of the application.
 */
angular
    .module('ergoCardGameApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {      
                url: '/',
                templateUrl:   'views/main.html' ,
                controller: 'MainCtrl'
            })
            .state('about', {      
                url: '/about',
                templateUrl:   'views/about.html' ,
                controller: 'AboutCtrl'
            })
    });
