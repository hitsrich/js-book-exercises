//querySelector() only returns the first match 

var el = document.querySelector('li.hot');
el.className = 'cool';


//querySelectorAll returns a NodeList
//The second matching element (the third list itm is selected and changed)

var elQueryAll = document.querySelectorAll('li.hot');
elQueryAll[1].className = 'cool';