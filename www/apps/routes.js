(function(){
  angular.module('movie')
    .config(routes);

  routes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function routes($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'apps/search/search.html',
        controller: 'SearchCtrl',
      })
      .state('details', {
        url: '/details',
        templateUrl: 'apps/details/details.html',
        controller: 'DetailsCtrl',
      });

    $urlRouterProvider.otherwise('/search');
  }

})();
