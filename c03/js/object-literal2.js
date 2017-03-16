//object using literal notation

var hotel = {
	name : 'Park',
	rooms : 120,
	booked : 77,
	checkAbavailability: function(){
		return this.rooms - this.booked;
	}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;   //accessing the property of an object using dot notation

var elAvailability = document.getElementById('availability');
elAvailability.textContent = hotel.checkAbavailability(); //method name to be called using dot notation