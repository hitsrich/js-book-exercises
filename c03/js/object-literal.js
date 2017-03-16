//object using literal notation

var hotel = {
	name : 'Quay',
	rooms : 40,
	booked : 25,
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;   //accessing the property of an object using dot notation

var elAvailability = document.getElementById('availability');
elAvailability.textContent = hotel.checkAvailability(); //method name to be called using dot notation