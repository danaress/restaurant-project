var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope){


// $scope.burritoToOrder = function(){
// 	$scope.orderBox = !$scope.orderBox;
// 	$scope.newOrder.push($scope.Burrito);
// 	console.log($scope.newOrder);
// }

	$scope.orderBox = true;

	$scope.toggleAddToOrder = function(entree){
		// $scope.orderBox = !$scope.orderBox
		$scope.thisEntree = entree
	}

// Tring to push information from order form into a new array so I can display it as current order in another box I'm going to build on the right hand side of the page.

	$scope.basket = []
	$scope.orderItem = {}
	
	$scope.total = 0

	$scope.totalPrice = function(){
		$scope.total = 0
		for (var i=0; i < $scope.basket.length; i++) {
			$scope.total += $scope.basket[i].price;
		}
			console.log($scope.total);
			return $scope.total;
	}


	$scope.orderSubmit = function(){
		$scope.orderItem.description = $scope.thisEntree.description
		$scope.orderItem.price = $scope.thisEntree.number
		$scope.basket.push($scope.orderItem)
		console.log($scope.basket);
		$scope.orderItem = {}
		$scope.toggleAddToOrder();
		$scope.totalPrice();
		$scope.totalprice = true;
}

// foodItems = Ingredients used in all Plates

var foodItem = function(name, calories, vegan, glutenFree, citrusFree){

		this.name = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
	}

$scope.tomatoes = new foodItem (

		'Tomato',
		100,
		false,
		true,
		true
	);

$scope.horseradish = new foodItem (

		'Horseradish',
		20,
		true,
		true,
		true
	);

$scope.orange = new foodItem (

		'Orange',
		25,
		true,
		true,
		false
	);

$scope.chicken = new foodItem (

		'Chicken',
		25,
		false,
		true,
		true
	);

$scope.beef = new foodItem (

		'Beef',
		35,
		false,
		true,
		true
	);

$scope.pico = new foodItem (

		'Pico de Gallo',
		25,
		true,
		true,
		false
	);

$scope.cheese = new foodItem (

		'Cheese',
		25,
		false,
		true,
		false
	);

$scope.margarita = new foodItem (

		'Margarita',
		40,
		true,
		true,
		false
);

// Drink = Constructor function for drink items on Menu

var Drink = function(name, description, number, ingredients){

	this.name = name;
	this.description = description;
	this.number = number;
	this.ingredients = ingredients;
	$scope.drinks.push(this)
	console.log(this)
}

$scope.drinks = []

$scope.frozenMarg = new Drink (

	"Frozen Marg",
	"20oz Jar O' Frozen Marg",
	10,
	[$scope.margarita.name, $scope.orange.name]
	);

// Plate = Constructor function for food items on menu

var Plate = function(name, description, number, meat, toppingsArray, toppings){
	this.name = name;
	this.description = description;
	this.number = number;
	this.meat = meat;
	this.toppingsArray = toppingsArray;
	this.toppings = toppings;
	$scope.entrees.push(this)
	console.log(this)
	}

$scope.entrees = []

$scope.Burrito = new Plate(
	'Burrito',
	'Classic Burrito w/ Chips',
	9,
	[$scope.chicken.name, $scope.beef.name],
	[$scope.tomatoes.name, $scope.cheese.name, $scope.pico.name],
	[{'Tomatoes' : $scope.tomatoes.name, 'Cheese' : $scope.cheese.name, 'Pico De Gallo' : $scope.pico.name}]
	)

$scope.Taco = new Plate(
	'Tacos',
	'Two Tacos w/ Chips',
	8,
	[$scope.chicken.name, $scope.beef.name], 
	[$scope.tomatoes.name, $scope.cheese.name, $scope.pico.name],
	[{'Tomatoes' : $scope.tomatoes.name, 'Cheese' : $scope.cheese.name, 'Pico De Gallo' : $scope.pico.name}]
	)


// // Functions

// var Order = function(plates){
// 	this.plates = plates;
// }

// var Menu = function(plates){
// 	this.plates = plates;
// }

// var newMenu = new Menu (
// 	[$scope.Burrito, $scope.bloodyMary]
// 	)

// var Restaurant = function(name, description, menu){

// 	this.name = name;
// 	this.description = description;
// 	this.menu = menu;
// }

// var newRestaurant = new Restaurant(

// 	"Marcus's Taco Shop",
// 	"We don't have tacos, but we have burritos.",
// 	newMenu
// 	)

// var Customer = function(dietaryPreference){

// 	this.dietaryPreference = dietaryPreference;
// }


// 	foodItem.prototype.stringify = function(){

// 		console.log(this.name + ' ' + this.calories + ' calories,' + (this.vegan ? " this is vegan. " : "poop") + (this.glutenFree ? "this is gluten free. " : '') + (this.citrusFree ? "this is citrus free. " : ''));
// 	}

// 	Drink.prototype.stringify = function(){

// 		console.log(this.name + this.description + '$' + this.number + ' ' + this.ingredients.join(', '));
// 	}

// 	Plate.prototype.stringify = function(){

// 		console.log(this.name + this.description + '$' + this.number + ' ' + this.ingredients.join(', '));
// 	}

// 	Plate.prototype.isVegan = function(){
// 		for (var i=0; i<this.ingredients.length; i++){
// 			if (this.ingredients[i].vegan === false){
// 				console.log("This is not vegan");
// 			}
// 		}
// 	}

// 	Plate.prototype.isGlutenFree = function(){
// 		for (var i=0; i<this.ingredients.length; i++){
// 			if (this.ingredients[i].glutenFree === false){
// 				console.log("This is not gluten free");
// 			}
// 		}
// 	}

// 	Plate.prototype.isCitrusFree = function(){
// 		for (var i=0; i<this.ingredients.length; i++){
// 			if (this.ingredients[i].citrusFree === false){
// 				console.log("This is not Citrus Free");
// 			}
// 		}
// 	}

// 	Order.prototype.stringify = function(){

// 		console.log(this.plates.join(', '));
// 	}

// 	Menu.prototype.stringify = function(){

// 		console.log(this.plates.join(', '));
// 	}

// 	Restaurant.prototype.stringify = function(){

// 		console.log(this.name + this.description + this.menu.join());
// 	}

// 	Customer.prototype.stringify = function(){

// 		console.log(this.dietaryPreference);
// 	}

console.log($scope.entrees)

}])