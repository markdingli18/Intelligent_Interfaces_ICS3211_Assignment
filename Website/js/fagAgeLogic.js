
// Get the button element by its id
const youngButton = document.getElementById('youngButton');
const adultButton = document.getElementById('adultButton');
const elderButton = document.getElementById('elderButton');

// Get the element you want to add a class to by its id
const youngSection = document.getElementById('youngSection');
const adultSection = document.getElementById('adultSection');
const elderSection = document.getElementById('elderSection');

const tutorialText = "This is a tutorial";
var currentSelected = null;


// Add an event listener to the button
youngButton.addEventListener('click', () => {
    // Add the class to the element
    youngSection.classList.remove('vanish');
    if (currentSelected == null) {
        slideInImageAndDisplayText(tutorialText);
    }

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
    if (currentSelected == null) {
        slideInImageAndDisplayText(tutorialText);
    }
    if (currentSelected != null && currentSelected != adultSection) {
        currentSelected.classList.add('vanish');
    }
    currentSelected = adultSection;
    currentSelected.scrollIntoView();
});

elderButton.addEventListener('click', () => {
    // Add the class to the element
    elderSection.classList.remove('vanish');
    if (currentSelected == null) {
        slideInImageAndDisplayText(tutorialText);
    }
    if (currentSelected != null && currentSelected != elderSection) {
        currentSelected.classList.add('vanish');
    }
    currentSelected = elderSection;
    currentSelected.scrollIntoView();
});


function slideInImageAndDisplayText(textToDisplay) {
    const img = document.createElement('img');
    const textBox = document.createElement('div');
    const closeIcon = document.createElement('img');
    closeIcon.addEventListener('click', () => {
        //Slide the image out to the left
        img.style.left = '-1000px';
        textBox.remove();
        closeIcon.remove();
        //Remove after one second
        setTimeout(() => {
            img.remove();
        }, 1000);
    });

    img.src = 'img/robot_thinking.png';
    img.style.position = 'fixed';
    img.style.bottom = '0';
    img.style.left = '-400px';
    img.style.width = ' 573px';
    img.style.height = '400px';
    img.style.transition = 'all 1s ease-in-out';

    //Make image slide in from the left
    document.body.appendChild(img);
    setTimeout(() => {
        img.style.left = '-100px';
    }, 100);

    setTimeout(() => {
        img.src = 'img/robot_normal.png';
        textBox.style.position = 'fixed';
        textBox.style.left = '420px';
        textBox.style.bottom = '320px';
        textBox.style.width = '400px';
        textBox.style.height = '100px';
        textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        textBox.style.border = '1px solid black';
        textBox.style.padding = '10px';
        //Change the border of the text box to aappear like a text message
        textBox.style.borderRadius = '10px';
        //Add a shadow to the text box
        textBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        //Add a piece sticking out of the text box like a text message
        textBox.style.borderBottomLeftRadius = '0px';
        document.body.appendChild(textBox);

        //Add the text to the text box using typewriter effect
        console.log(textToDisplay);
        typeWriter(textToDisplay, textBox, 50, 0)

        //Add a X icon to the text box to clsoe the text box
        closeIcon.src = 'img/CloseIcon.png';
        closeIcon.style.position = 'fixed';
        closeIcon.style.left = '793px';
        closeIcon.style.bottom = '395px';
        closeIcon.style.width = '20px';
        closeIcon.style.height = '20px';
        closeIcon.style.cursor = 'pointer';
        closeIcon.style.transition = 'all 1s ease-in-out';
        document.body.appendChild(closeIcon);
    }, 1000);

    //Remove the image and text after 15 seconds
    setTimeout(() => {
        //Slide the image out to the left
        img.style.left = '-1000px';
        textBox.remove();
        closeIcon.remove();
        //Remove after one second
        setTimeout(() => {
            img.remove();
        }, 1000);
    }, 15000);
}
