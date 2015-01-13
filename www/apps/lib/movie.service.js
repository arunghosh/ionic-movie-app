(function(){
  angular.module('movie')
    .factory('MovieSrv', MovieSrv);

  MovieSrv.$inject = ['$http', 'RottenSrv'];

  function MovieSrv($http, RottenSrv){
    var selectedMovie;

    return {
      search: search,
      setSelected: setSelected,
      getSelected: getSelected,
      reviews: reviews,
    };

    function setSelected(movie){
      selectedMovie = movie;
    }

    function getSelected(){
      return selectedMovie;
    }

    function search(title){
      return RottenSrv.search(title);
    }

    function reviews(movie){
      return RottenSrv.reviews(movie);
    }
  }
})();
