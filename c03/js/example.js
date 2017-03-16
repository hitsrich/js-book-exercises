/* The script is placed inside an immediately invoked function expression 
which helps to protect the scope of variables */

(function() {
	//PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

	//Create a hotel object using the object literal syntax
	var hotel = {
		name : 'Park',
		roomRate : 240, //Amount in dollars
		discount : 15, //percentage to discount
		offerPrice : function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	};

	//Write out the hotel name, Standard rate, and special rate 
	var hotelName, roomRate, specialRate;		//Declare Variables

	//get elements
	hotelName = document.getElementById('hotelName');
	roomRate = document.getElementById('roomRate');
	specialRate = document.getElementById('specialRate');

	//write 
	hotelName.textContent = hotel.name;
	roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
	specialRate.textContent = '$' + hotel.offerPrice();


	//PART TWO: CALCULATE AND WRITE OUT EXPIRY DETAILS FOR THE OFFER
	var expiryMsg; 	// Message displayed to users
	var today; 		//Todays date
	var elEnds;   	//The element that shows the message about the offer ending

	function offerExpires(today){
		// Declare variables within the function for local scope
		var weekFromToday, day, date, month, year, dayNames, monthNames;

		//add 7 days time (added in milliseconds)
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

		 // Create arrays to hold the names of days / months
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		// Collect the parts of the date to show on the page
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();

		//create the message
		expiryMsg = "Offers Expires next ";
		expiryMsg += day + '<br />('+ date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}

	today = new Date();								// Put today's date in variable
	elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
	elEnds.innerHTML = offerExpires(today);         // Add the expiry message

// Finish the immediately invoked function expression
} () );