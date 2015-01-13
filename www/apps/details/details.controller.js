(function(){
  angular.module('movie')
    .controller('DetailsCtrl', DetailsCtrl);

  DetailsCtrl.$inject = ['$scope', '$ionicLoading', 'MovieSrv'];

  function DetailsCtrl($scope, $ionicLoading, MovieSrv){
    activate();

    function activate() {
      $scope.movie = MovieSrv.getSelected();
      getReviews();
    }

    function showBusy(){
      $ionicLoading.show({
        template: 'Loading...'
      });
    }

    function hideBusy(){
      $ionicLoading.hide();
    }

    function getReviews(){
      showBusy();
      MovieSrv
        .reviews($scope.movie)
        .then(onReviewsSuccess, onReviewsFailure)
        .finally(hideBusy);
      
      function onReviewsSuccess(response){
        $scope.reviews = response.data.reviews.slice(0, 10);
      }

      function onReviewsFailure(reponse){
        //TODO
        //alert('Failed to connect to server.');
      }
    }
  }
})();
