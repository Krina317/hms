 // Room container and button reference
 const roomsContainer = document.getElementById('rooms-container');
 const addRoomBtn = document.getElementById('add-room-btn');
 let roomCount = 0; // Counter for room IDs
 // Function to add a new room
 function addRoom() {
     roomCount++;
     const roomDiv = document.createElement('div');
     roomDiv.className = 'room';
     roomDiv.id = `room-${roomCount}`;
     roomDiv.innerHTML = `
         <h3>Room ${roomCount}</h3>
         <div class="controls">
             <label for="adults-room-${roomCount}"><b>Adults: </b></label>
             <button type="button" onclick="decrease('adults-room-${roomCount}',1)"><b> - </b></button>
             <input type="number" id="adults-room-${roomCount}" name="adults-room-${roomCount}" value="1" min="1" readonly class="inputbox">
             <button type="button" onclick="increase('adults-room-${roomCount}',3)"><b>+</b></button>
         </div>
         <div class="controls">
             <label for="kids-room-${roomCount}"><b>Kids: </b></label>
             <button type="button" onclick="decrease('kids-room-${roomCount}')" style="margin-left:20px" ><b>-</b></button>
             <input type="number" id="kids-room-${roomCount}" name="kids-room-${roomCount}" value="0" min="0" readonly class="inputbox">
             <button type="button" onclick="increase('kids-room-${roomCount}')"><b>+</b></button>
         </div>
     `;
     roomsContainer.appendChild(roomDiv);
 }
 // Function to increase the number of guests
 function increase(id) {
     const input = document.getElementById(id);
     input.value = parseInt(input.value) + 1;
 }
 // Function to decrease the number of guests
 function decrease(id) {
     const input = document.getElementById(id);
     const min = parseInt(input.min);
     if (parseInt(input.value) > min) {
         input.value = parseInt(input.value) - 1;
     }
 }
 // Add the first room by default
 addRoom();
 // Add another room when the button is clicked
 addRoomBtn.addEventListener('click', addRoom);
 function calculateTotalCost() {
    const startDate = new Date($("#start-date").val());
    const endDate = new Date($("#end-date").val());
    const deluxe = 59; // Cost per room per night
    const premium = 89;
    const suite = 109;
    const numberOfRooms = $("#rooms-container").children().length || 1;
    // Calculate number of nights
    const timeDiff = endDate - startDate;
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // Calculate total cost
    let Costdeluxe = 0;
    if (!isNaN(numberOfNights) && numberOfNights > 0) {
        Costdeluxe = numberOfRooms * deluxe * numberOfNights;
    }
    // Display the total cost
    $("#costdeluxe").text(`$${Costdeluxe}`);
    let Costpremium = 0;
    if (!isNaN(numberOfNights) && numberOfNights > 0) {
        Costpremium = numberOfRooms * premium * numberOfNights;
    }
    $("#costpremium").text(`$${Costpremium}`);
    let Costsuite = 0;
    if (!isNaN(numberOfNights) && numberOfNights > 0) {
        Costsuite = numberOfRooms * suite * numberOfNights;
    }
    $("#costsuite").text(`$${Costsuite}`);

}
function ordersummary(x){
    const startDate = new Date($("#start-date").val());
    const startdate = new Date(startDate);
    const startday = String(startdate.getDate()).padStart(2, '0');
    const startmonth = String(startdate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const startyear = startdate.getFullYear();
    const formatedstart = `${startday}/${startmonth}/${startyear}`;
    $("#Checkin").text(formatedstart);
    const endDate = new Date($("#end-date").val());
    const enddate = new Date(endDate);
    const endday = String(enddate.getDate()).padStart(2, '0');
    const endmonth = String(enddate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const endyear = enddate.getFullYear();
    const formatedend = `${endday}/${endmonth}/${endyear}`;
    $("#Checkout").text(formatedend);
    const deluxe = 59; // Cost per room per night
    const premium = 89;
    const suite = 109;
    const numberOfRooms = $("#rooms-container").children().length || 1;
    // Calculate number of nights
    const timeDiff = endDate - startDate;
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    $("#noofnight").text(numberOfNights);
    if (x == 'deluxe'){
        let Costdeluxe = 0;
        if (!isNaN(numberOfNights) && numberOfNights > 0) {
            Costdeluxe = numberOfRooms * deluxe * numberOfNights;
        }
        $("#roomtype").text(`Standard Seashells`);
        $("#cost").text(`$${Costdeluxe}`);
        $("#rate").text(`$${deluxe}`);
    }
    else if (x == 'premium') {
        let Costpremium = 0;
        if (!isNaN(numberOfNights) && numberOfNights > 0) {
            Costpremium = numberOfRooms * premium * numberOfNights;
        }
        $("#roomtype").text(`Coastal Calmness`);
        $("#cost").text(`$${Costpremium}`);
        $("#rate").text(`$${premium}`);
    }
    else if (x == 'suite') {
        let Costsuite = 0;
        if (!isNaN(numberOfNights) && numberOfNights > 0) {
            Costsuite = numberOfRooms * suite * numberOfNights;
        }
        $("#roomtype").text(`Sea Suites`);
        $("#cost").text(`$${Costsuite}`);
        $("#rate").text(`$${suite}`);
    }
}


document.getElementById('registrationForm').onsubmit = function() {
    let errors = document.querySelectorAll('#registrationForm .error');
    errors.forEach(error => error.innerText = '');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    if (name === '') {
    errors[0].innerText = 'Name is required.';
    }
    if (email === '') {
    errors[1].innerText = 'Email is required.';
    }
    if (number === '' ) {
        errors[2].innerText = 'Phone number is required.';
        }

    if (name && email && number) {
    alert('Sign in successful!');
    window.location.href = "pay.html";
    }
    return false; 
    };
    function validateInput() {
        const cardNumber = document.getElementById("cardNumber").value;
        const errorMessage = document.getElementById("error-message");
        // Ensure only digits are entered
        if (!/^\d*$/.test(cardNumber)) {
            errorMessage.textContent = "Only digits are allowed.";
            return;
        } else {
            errorMessage.textContent = ""; // Clear error if valid input
        }
    }
    function validateCardNumber() {
        const cardNumber = document.getElementById("cardNumber").value;
        const errorMessage = document.getElementById("error-message");
        if (cardNumber.length !== 12) {
            errorMessage.textContent = "Enter entire number";
            return false; // Prevent form submission
        }
        errorMessage.textContent = ""; // Clear error if valid
        alert("Confirm purchase");
        window.location.href = "thankyou.html";
        return true; // Allow form submission
        
    }