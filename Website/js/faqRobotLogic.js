
// Get the button elements by its id for young
const youngCard1 = document.getElementById('youngCard1');
const youngCard2 = document.getElementById('youngCard2');
const youngCard3 = document.getElementById('youngCard3');
const youngCard4 = document.getElementById('youngCard4');
const youngCard5 = document.getElementById('youngCard5');
const youngCard6 = document.getElementById('youngCard6');
const youngCard7 = document.getElementById('youngCard7');
const youngCard8 = document.getElementById('youngCard8');
const youngCard9 = document.getElementById('youngCard9');

// Get the button elements by its id for adults
const adultCard1 = document.getElementById('adultCard1');
const adultCard2 = document.getElementById('adultCard2');
const adultCard3 = document.getElementById('adultCard3');
const adultCard4 = document.getElementById('adultCard4');
const adultCard5 = document.getElementById('adultCard5');
const adultCard6 = document.getElementById('adultCard6');
const adultCard7 = document.getElementById('adultCard7');
const adultCard8 = document.getElementById('adultCard8');
const adultCard9 = document.getElementById('adultCard9');

// Get the button elements for elderly
const elderCard1 = document.getElementById('elderlyCard1');
const elderCard2 = document.getElementById('elderlyCard2');
const elderCard3 = document.getElementById('elderlyCard3');
const elderCard4 = document.getElementById('elderlyCard4');
const elderCard5 = document.getElementById('elderlyCard5');
const elderCard6 = document.getElementById('elderlyCard6');
const elderCard7 = document.getElementById('elderlyCard7');
const elderCard8 = document.getElementById('elderlyCard8');
const elderCard9 = document.getElementById('elderlyCard9');

const youngText1 = 'I am button 1';
const youngText2 = 'I am button 2';
const youngText3 = 'I am button 3';
const youngText4 = 'I am button 4';
const youngText5 = 'I am button 5';
const youngText6 = 'I am button 6';
const youngText7 = 'I am button 7';
const youngText8 = 'I am button 8';
const youngText9 = 'I am button 9';

const adultText1 = 'I am button 1';
const adultText2 = 'I am button 2';
const adultText3 = 'I am button 3';
const adultText4 = 'I am button 4';
const adultText5 = 'I am button 5';
const adultText6 = 'I am button 6';
const adultText7 = 'I am button 7';
const adultText8 = 'I am button 8';
const adultText9 = 'I am button 9';

const elderText1 = 'I am button 1';
const elderText2 = 'I am button 2';
const elderText3 = 'I am button 3';
const elderText4 = 'I am button 4';
const elderText5 = 'I am button 5';
const elderText6 = 'I am button 6';
const elderText7 = 'I am button 7';
const elderText8 = 'I am button 8';
const elderText9 = 'I am button 9';


//When any button is clicked, display the text depending on the button clicked for young
youngCard1.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText1);
});
youngCard2.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText2);
});
youngCard3.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText3);
});
youngCard4.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText4);
});
youngCard5.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText5);
});
youngCard6.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText6);
});
youngCard7.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText7);
});
youngCard8.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText8);
});
youngCard9.addEventListener('click', () => {
    slideInImageAndDisplayText(youngText9);
});

//When any button is clicked, display the text depending on the button clicked for adults
adultCard1.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText1);
});
adultCard2.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText2);
});
adultCard3.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText3);
});
adultCard4.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText4);
});
adultCard5.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText5);
});
adultCard6.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText6);
});
adultCard7.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText7);
});
adultCard8.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText8);
});
adultCard9.addEventListener('click', () => {
    slideInImageAndDisplayText(adultText9);
});

//When any button is clicked, display the text depending on the button clicked for elderly
elderCard1.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText1);
});
elderCard2.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText2);
});
elderCard3.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText3);
});
elderCard4.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText4);
});
elderCard5.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText5);
});
elderCard6.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText6);
});
elderCard7.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText7);
});
elderCard8.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText8);
});
elderCard9.addEventListener('click', () => {
    slideInImageAndDisplayText(elderText9);
});



//Function to type out the text in the text box
function typeWriter(textToDisplay, textElement, speed, i) {
    if (i < textToDisplay.length) {
        textElement.innerHTML += textToDisplay.charAt(i);
        i++;
        setTimeout(typeWriter, speed, textToDisplay, textElement, speed, i);
    }
}

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
    }, 2000);

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