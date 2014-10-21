app.controller('CheckoutController', ['$scope', '$timeout', '$location', 'Cart', 'Item', 'Order',
  function($scope, $timeout, $location, Cart, Item, Order){

  $scope.status = true;
  (function(){
    $scope.cart = Cart.getCart();
    $scope.subtotal = 0;
    for(var i = 0; i < $scope.cart.length; i++){
      $scope.subtotal += $scope.cart[i].quantity * $scope.cart[i].item.price;
    }
  })();

  $scope.purchase = function(){
    if($scope.cart.name){
      for(var i = 0; i < $scope.cart.length; i++){
        $scope.cart[i].item.$update();
      }
      $scope.message = 'Thank you for your purchase!';
      $scope.status = false;
      Cart.resetCart();
      var order = new Order({person: $scope.cart.name, cost: $scope.subtotal});
      order.$save();
      $timeout(function(){
        $location.path('/viewOrders');
      }, 1500);
    }
    else{
      $scope.message = 'You must enter your name to make this purchase!';
      $scope.status = false;
      $timeout(function(){
        $scope.status = true;
      }, 1500);
    }
  };
}]);