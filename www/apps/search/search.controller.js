(function(){
  angular.module('movie')
    .controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = ['$scope', '$ionicLoading', '$location', '$timeout', 'MovieSrv'];

  function SearchCtrl($scope, $ionicLoading, $location, $timeout, MovieSrv){

    activate();

    $scope.showDetails = function(movie){
      MovieSrv.setSelected(movie);
      $location.url('details');
    };

    function activate(){
      $scope.query = {title: ''};
      $scope.$watch('query.title', onQueryChange);
      var searchTimer = null;

      function onQueryChange(value){
        if(!value) return;
        resetSearchTimer();
      }

      function resetSearchTimer(){
        if($timeout) $timeout.cancel(searchTimer);
        searchTimer = $timeout(triggerSearch, 1000);
      }
    }

    function triggerSearch(){
      showBusy();
      MovieSrv
        .search($scope.query.title)
        .then(onSearchSuccess, onSearchFailure)
        .finally(hideBusy);
    
      function onSearchSuccess(response){
        if(response.data.movies){
          $scope.movies = response.data.movies.slice(0, 10);
        } else {
          $scope.movies = [];
        }
      }

      function onSearchFailure(response){
        //TODO
        //alert('Failed to connect to server');
      }
    }
    
    function showBusy(){
      $ionicLoading.show({
        template: 'Loading...'
      });
    }

    function hideBusy(){
      $ionicLoading.hide();
    }

  }

})();
