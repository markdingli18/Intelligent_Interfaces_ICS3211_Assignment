
// Get the button element by its id
const youngButton = document.getElementById('youngButton');
const adultButton = document.getElementById('adultButton');
const elderButton = document.getElementById('elderButton');

// Get the element you want to add a class to by its id
const youngSection = document.getElementById('youngSection');
const adultSection = document.getElementById('adultSection');
const elderSection = document.getElementById('elderSection');

var tutorialText = "Click on the 'Learn More' button to learn more about a specific question.";
var currentSelected = null;
var currentButton = null;


// Add an event listener to the button
youngButton.addEventListener('click', () => {
    tutorialText = "Click on the Robot icons button to learn more about a specific question.";
    // Add the class to the element
    youngSection.classList.remove('vanish');
    youngButton.classList.add('flickerBorder');
    if (currentSelected == null) {
        slideInImageAndDisplayText(tutorialText);
    }

    if (currentSelected != null && currentSelected != youngSection) {
        currentSelected.classList.add('vanish');
        currentButton.classList.remove('flickerBorder')
    }
    currentSelected = youngSection;
    currentButton = youngButton;

    //Add Scroll to current selected Element
    currentSelected.scrollIntoView();
});

adultButton.addEventListener('click', () => {
    // Add the class to the element
    adultSection.classList.remove('vanish');
    adultButton.classList.add('flickerBorder');
    if (currentSelected == null) {
        slideInImageAndDisplayText(tutorialText);
    }
    if (currentSelected != null && currentSelected != adultSection) {
        currentSelected.classList.add('vanish');
        currentButton.classList.remove('flickerBorder')
    }
    currentSelected = adultSection;
    currentButton = adultButton;
    currentSelected.scrollIntoView();
});

elderButton.addEventListener('click', () => {
    // Add the class to the element
    elderSection.classList.remove('vanish');
    elderButton.classList.add('flickerBorder');
    if (currentSelected == null) {
        slideInImageAndDisplayText(tutorialText);
    }
    if (currentSelected != null && currentSelected != elderSection) {
        currentSelected.classList.add('vanish');
        currentButton.classList.remove('flickerBorder')
    }
    currentSelected = elderSection;
    currentButton = elderButton;
    currentSelected.scrollIntoView();
});