var body = document.getElementsByTagName('body')[0];
var createButton = document.getElementById("create");
var totalButton = document.getElementById("total");
var ingredientsTextField = document.getElementById("text1");
var priceTextField = document.getElementById("text2");
var igv = (1.18)

var pizzas = [];

createButton.addEventListener("click", create);
totalButton.addEventListener("click", total);

function create() {
  var pizza = new Pizza(ingredientsTextField.value, priceTextField.value);
  pizzas.push(pizza);

  }

  function total(){
    for (i = 0; i < pizzas.length; i++) {
      var pizza = pizzas[i];
      console.log("pizza: "+ (i + 1));
      console.log("ingredients: "+ pizza.ingredients)
      console.log("price: "+ pizza.price)
      console.log("price + igv: "+ pizza.price * igv)
    }

  }
