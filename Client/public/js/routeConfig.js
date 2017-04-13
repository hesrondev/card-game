app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    template: '<ui-view></ui-view>',
    controller: 'mainController'
  })

  .state('app.user', {
    url: '/user',
    templateUrl: 'views/user.html',
    controller: 'userController',
    params: {
        obj: {}
    }
  })
  .state('app.login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'loginController'
  })

  $urlRouterProvider.otherwise('/app/user');
});