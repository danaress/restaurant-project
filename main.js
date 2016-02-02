var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope){


$scope.greeting = "bbbbb";
console.log(greeting);

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

var Drink = function(name, description, number, ingredients){

	this.name = name;
	this.description = description;
	this.number = number;
	this.ingredients = ingredients;
}

$scope.bloodyMary = new Drink (

	"Bloody Mary",
	" Big jug of bloody mary. ",
	10,
	[$scope.orange.name, $scope.horseradish.name, $scope.tomatoes.name]

	);

var Plate = function(name, description, number, ingredients, isVegan){

	this.name = name;
	this.description = description;
	this.number = number;
	this.ingredients = ingredients;
	}


$scope.Burrito = new Plate(

	'Burrito',
	'Big jug of Burrito Plate',
	9,
	[$scope.tomatoes, $scope.horseradish]
	)

$scope.Taco = new Plate(
	'Tacos',
	'Two Tacos',
	8,
	[$scope.tomatoes]
	)

var Order = function(plates){
	this.plates = plates;
}

var Menu = function(plates){
	this.plates = plates;
}

var newMenu = new Menu (
	[$scope.Burrito, $scope.bloodyMary]
	)

var Restaurant = function(name, description, menu){

	this.name = name;
	this.description = description;
	this.menu = menu;
}

var newRestaurant = new Restaurant(

	"Marcus's Taco Shop",
	"We don't have tacos, but we have burritos.",
	newMenu

	)

var Customer = function(dietaryPreference){

	this.dietaryPreference = dietaryPreference;
}


	foodItem.prototype.stringify = function(){

		console.log(this.name + ' ' + this.calories + ' calories,' + (this.vegan ? " this is vegan. " : "poop") + (this.glutenFree ? "this is gluten free. " : '') + (this.citrusFree ? "this is citrus free. " : ''));
	}

	Drink.prototype.stringify = function(){

		console.log(this.name + this.description + '$' + this.number + ' ' + this.ingredients.join(', '));
	}

	Plate.prototype.stringify = function(){

		console.log(this.name + this.description + '$' + this.number + ' ' + this.ingredients.join(', '));
	}

	Plate.prototype.isVegan = function(){
		for (var i=0; i<this.ingredients.length; i++){
			if (this.ingredients[i].vegan === false){
				console.log("This is not vegan");
			}
		}
	}

	Plate.prototype.isGlutenFree = function(){
		for (var i=0; i<this.ingredients.length; i++){
			if (this.ingredients[i].glutenFree === false){
				console.log("This is not gluten free");
			}
		}
	}

	Plate.prototype.isCitrusFree = function(){
		for (var i=0; i<this.ingredients.length; i++){
			if (this.ingredients[i].citrusFree === false){
				console.log("This is not Citrus Free");
			}
		}
	}


	Order.prototype.stringify = function(){

		console.log(this.plates.join(', '));
	}

	Menu.prototype.stringify = function(){

		console.log(this.plates.join(', '));
	}

	Restaurant.prototype.stringify = function(){

		console.log(this.name + this.description + this.menu.join());
	}

	Customer.prototype.stringify = function(){

		console.log(this.dietaryPreference);
	}



}])