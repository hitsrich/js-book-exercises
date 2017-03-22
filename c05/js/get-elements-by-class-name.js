
//Live Nodelist - changes with script updates
//Live Nodelist - Faster than static NodeList

var elements = document.getElementsByClassName("hot");  // Find hot items

if(elements.length > 2) { //if three or more are found
	var el = elements[2];   //select the third one from Nodelist using Array Syntax
	el.className = 'cool';
}