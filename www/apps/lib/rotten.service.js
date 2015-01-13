(function(){
  angular.module('movie')
    .factory('RottenSrv', MovieSrv);

  MovieSrv.$inject = ['$http', 'rotten'];

  function MovieSrv($http, rottan){
    var selectedMovie;

    return {
      search: search,
      reviews: reviews,
    };

    function search(title){
      return $http.get(rottan.url + '.json?q=' + title + '&apikey=' + rottan.key);
    }

    function reviews(movie){
      return $http.get(movie.links.reviews + '?apikey=' + rottan.key);
    }
  }
})();
