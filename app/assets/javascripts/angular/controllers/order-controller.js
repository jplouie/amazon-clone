app.controller('OrderController', ['$scope', '$location', 'Order',
  function($scope, $location, Order){

  $scope.orders = Order.query();

  $scope.home = function(){
    $location.path('/');
  };
}]);