app.factory('Cart', function(){
  var shoppingCart = [];
  return {
    updateCart: function(item){
      item.quantity--;
      for(var i = 0; i < shoppingCart.length; i++){
        if(item.name === shoppingCart[i].item.name){
          shoppingCart[i].quantity++;
          return;
        }
      }
      shoppingCart.push({item: item, quantity: 1});
    },
    getCart: function(){
      return shoppingCart;
    },
    resetCart: function(){
      shoppingCart = [];
    }
  };
});