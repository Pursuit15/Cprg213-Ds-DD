/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const dailyRateFull = 35;
const dailyRateHalf = 20;
let selectedDays = new Set();
let currentRate = dailyRateFull;

const dayButtons = document.querySelectorAll('.day-button');
const clearButton = document.getElementById('clear-button');
const halfDayButton = document.getElementById('half-day');
const fullDayButton = document.getElementById('full-day');
const calculatedCostElement = document.getElementById('calculated-cost');
// Highlight the selected days of the week by adding the "clicked" class to the corresponding buttons
dayButtons.forEach(button => {
    if (selectedDays.has(button.dataset.day)) {
        button.classList.add('clicked');
    } else {
        button.classList.remove('clicked');
    }
});


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clicked')) {
            button.classList.remove('clicked');
            selectedDays.delete(button.dataset.day);
        } else {
            button.classList.add('clicked');
            selectedDays.add(button.dataset.day);
        }
        calculateTotalCost();
    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', () => {
    dayButtons.forEach(button => button.classList.remove('clicked'));
    selectedDays.clear();
    calculatedCostElement.innerHTML = '0';
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener('click', () => {
    currentRate = dailyRateHalf;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener('click', () => {
    currentRate = dailyRateFull;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost() {
    const totalCost = selectedDays.size * currentRate;
    calculatedCostElement.innerHTML = totalCost.toFixed(2);
}

