app.factory('Order', ['$resource', function($resource){
  return $resource('/orders/:id');
}]);