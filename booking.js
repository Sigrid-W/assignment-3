/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = document.getElementById("calculated-cost").innerHTML;
let dayCounter = 0;
let rate = 35;

let monday_button = document.getElementById("monday");
monday_button.addEventListener("click", function(){booking_days (monday_button)});

let tuesday_button = document.getElementById("tuesday");
tuesday_button.addEventListener("click", function(){booking_days (tuesday_button)});

let wednesday_button = document.getElementById("wednesday");
wednesday_button.addEventListener("click", function(){booking_days (wednesday_button)});

let thursday_button = document.getElementById("thursday");
thursday_button.addEventListener("click", function(){booking_days (thursday_button)});

let friday_button = document.getElementById("friday");
friday_button.addEventListener("click", function(){booking_days (friday_button)});

let clear_button = document.getElementById("clear-button");
clear_button.addEventListener("click", clearDays);

let half_button = document.getElementById("half");
half_button.addEventListener("click", halfdayRate);

let full_button = document.getElementById("full");
full_button.addEventListener("click", fulldayRate);




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function booking_days(button) {
    if (button.classList.contains("clicked")){
        dayCounter = dayCounter;
    } else {
        dayCounter += 1;
    }
    button.classList.add("clicked");
    document.getElementById("calculated-cost").innerHTML = calculation(rate, dayCounter);   
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    dayCounter = 0;
    monday_button.classList.remove("clicked");
    tuesday_button.classList.remove("clicked");
    wednesday_button.classList.remove("clicked");
    thursday_button.classList.remove("clicked");
    friday_button.classList.remove("clicked");
    document.getElementById("calculated-cost").innerHTML = calculation(rate, dayCounter);
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfdayRate() {
    rate = 20;
    half_button.classList.add("clicked");
    full_button.classList.remove("clicked");
    document.getElementById("calculated-cost").innerHTML = calculation(rate, dayCounter);

}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fulldayRate() {
    rate = 35;
    half_button.classList.remove("clicked");
    full_button.classList.add("clicked");
    document.getElementById("calculated-cost").innerHTML = calculation(rate, dayCounter);
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation(rate, dayCounter){
    return rate * dayCounter; 
}

