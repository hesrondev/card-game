app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    template: '<ui-view></ui-view>',
    controller: 'mainController'
  })

  .state('app.game', {
    url: '/game',
    templateUrl: 'public/views/game.html',
    controller: 'gameController',
    params: {
        obj: {}
    }
  })

  $urlRouterProvider.otherwise('/app/game');
});