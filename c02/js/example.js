//Create Variables for Welcome Message
var greeting = "Howdy ";
var name = "Molly";
var message = ', please check your order:'

//concatenate the three variables above to create a welcome message
var welcome = greeting + name + message;

//create variables to hold details about the sign
var sign = "Montague House Vicarage Road";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//get element that has an id of greeting
var el = document.getElementById('greeting');
//replace the content of that element with the personalized welcome message
el.textContent = welcome;

//get the element that has an id of usersign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//get the elements that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//get the elements that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//get the elements that has an id of subTotal then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//get the elements that has an id of subTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;