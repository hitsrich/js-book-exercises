var hotel = new Object();

hotel.name = 'Park',
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
	return this.rooms - this.booked;
}

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;   //accessing the property of an object using dot notation

var elAvailability = document.getElementById('availability');
elAvailability.textContent = hotel.checkAvailability(); //method name to be called using dot notation