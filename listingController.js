angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.newlist={'code':'','name':'','address':'',"coordinates": {
        "latitude": '',
        "longitude": ''
    }};
    $scope.show={'code':'','name':'','address':'',"coordinates": {
        "latitude": '',
        "longitude": ''
    }};
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newlist);
      $scope.newlist={'code':'','name':'','address':''};
    };
    $scope.deleteListing = function(list) {
      var index = $scope.listings.indexOf(list);
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(list) {
      $scope.show=list
    };
  }
]);
