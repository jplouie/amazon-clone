app.controller('ItemController', ['$scope', '$location', 'Item', 'Cart',
  function($scope, $location, Item, Cart){

  $scope.items = Item.query();

  $scope.add = function(item){
    if(item.quantity > 0)
      Cart.updateCart(item);
  };

  $scope.checkout = function(){
    $location.path('/checkout');
  };

  $scope.pastOrders = function(){
    $location.path('/viewOrders');
  };
}]);