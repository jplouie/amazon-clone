app.controller('ItemController', ['$scope', '$location', 'Item', 'Cart',
  function($scope, $location, Item, Cart){

  $scope.items = Item.query();

  $scope.add = function(item){
    Cart.updateCart(item);
  };

  $scope.checkout = function(){
    $location.path('/checkout');
  };

  $scope.pastOrders = function(){
    $location.path('/viewOrders');
  };
}]);