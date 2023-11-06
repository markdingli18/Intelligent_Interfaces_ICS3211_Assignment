// Get the button element by its id
const youngButton = document.getElementById('youngButton');
const adultButton = document.getElementById('adultButton');
const elderButton = document.getElementById('elderButton');

// Get the element you want to add a class to by its id
const youngSection = document.getElementById('youngSection');
const adultSection = document.getElementById('adultSection');
const elderSection = document.getElementById('elderSection');

var currentSelected = null;

// Add an event listener to the button
youngButton.addEventListener('click', () => {
    console.log('Button clicked');
    // Add the class to the element
    youngSection.classList.remove('vanish');
    if (currentSelected != null && currentSelected != youngSection) {
        currentSelected.classList.add('vanish');
    }
    currentSelected = youngSection;

    //Add Scroll to current selected Element
    currentSelected.scrollIntoView();
});

adultButton.addEventListener('click', () => {
    // Add the class to the element
    adultSection.classList.remove('vanish');
    if (currentSelected != null && currentSelected != adultSection) {
        currentSelected.classList.add('vanish');
    }
    currentSelected = youngSection;
    currentSelected.scrollIntoView();
});

elderButton.addEventListener('click', () => {
    // Add the class to the element
    elderSection.classList.remove('vanish');
    if (currentSelected != null && currentSelected != elderSection) {
        currentSelected.classList.add('vanish');
    }
    currentSelected = youngSection;
    currentSelected.scrollIntoView();
});
