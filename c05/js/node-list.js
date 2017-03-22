var hotItems = document.querySelectorAll('li.hot'); //Store Nodelist in an Array

if(hotItems.length > 1) {     //if it contains an items
	for(var i=0; i<hotItems.length; i++){   //loop through each item
		hotItems[i].className = 'cool';  //change the value of class attribute
	}
}