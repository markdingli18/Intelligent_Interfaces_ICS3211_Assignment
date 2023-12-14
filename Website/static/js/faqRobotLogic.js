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
const elderCard1 = document.getElementById('elderCard1');
const elderCard2 = document.getElementById('elderCard2');
const elderCard3 = document.getElementById('elderCard3');
const elderCard4 = document.getElementById('elderCard4');
const elderCard5 = document.getElementById('elderCard5');
const elderCard6 = document.getElementById('elderCard6');
const elderCard7 = document.getElementById('elderCard7');
const elderCard8 = document.getElementById('elderCard8');
const elderCard9 = document.getElementById('elderCard9');

const youngText1 = 'It\'s essential to consult a pediatrician for a proper evaluation and prescription tailored to your child\'s health. Giving them antibiotics without professional guidance can have adverse effects on their health and contribute to antibiotic resistance. Do not give your child your antibiotics. Antibiotics are prescribed based on specific conditions and individual needs. Misuse can contribute to antibiotic resistance in your child, making future treatments more challenging.';
const youngText2 = 'Antibiotics are not effective against viral infections like the common cold. Misuse contributes to antibiotic resistance. Consult your healthcare provider for appropriate treatment options and to ensure responsible use of medications. Antibiotics should not be used to treat colds as they are caused by viruses. Manage cold symptoms by staying hydrated, resting, and seeking medical advice if necessary.';
const youngText3 = 'Antibiotics may not be necessary for every ear infection, and their overuse can contribute to antibiotic resistance. A healthcare provider can assess the specific case and recommend the most suitable treatment plan, which may include observation without antibiotics. Not all ear infections require antibiotics. About half resolve on their own, and many are caused by viruses. Consult a healthcare professional to determine the appropriate course of action.';
const youngText4 = 'It\'s important to be aware of potential side effects and promptly report any unusual symptoms to a healthcare provider. Adhering to the prescribed dosage and seeking medical advice can help manage and minimize side effects during antibiotic treatment. Antibiotics can cause side effects, with up to 1 in 5 children experiencing them. Common side effects include rashes, allergic reactions, nausea, diarrhea, and stomach pain.';
const youngText5 = 'Monitoring your child\'s response to antibiotics is crucial. If there\'s no improvement or a worsening of symptoms, prompt communication with the healthcare provider helps ensure appropriate adjustments to the treatment plan. Bacterial infections usually show improvement within 48 to 72 hours of starting an antibiotic. If your child\'s symptoms worsen or do not improve within this timeframe, contact their doctor.';
const youngText6 = 'Antibiotics for acne are typically used to control bacterial infections and inflammation. It\'s important to follow the prescribed regimen and consult with a healthcare provider to determine the most suitable treatment approach for your specific case. Antibiotics can be effective for treating acne, but they should be prescribed by a healthcare professional as part of a comprehensive treatment plan.';
const youngText7 = 'Antibiotic resistance is a significant concern. Using the correct antibiotic for the specific infection, as prescribed by a healthcare professional, helps minimize the risk of resistance and ensures effective treatment. Repeated use and misuse of antibiotics can lead to the development of resistant bacteria. Ensure that your child uses the antibiotic prescribed for the specific infection rather than a broad-spectrum antibiotic.';
const youngText8 = 'Always consult with your pediatrician before giving any medication to ensure appropriate dosages and suitability for your child\'s age and health condition. Paracetamol can be given to children aged 2 months or older for pain or fever. Follow the recommended dosage guidelines. Ibuprofen is generally suitable for children aged 6 months or older, following specific dosing instructions provided by a healthcare professional.';
const youngText9 = 'Even if your child feels better, it\'s essential for them to complete the full prescribed course of antibiotics to ensure the complete eradication of bacteria. Stopping antibiotics prematurely can contribute to the development of antibiotic resistance and may not fully eliminate the infection. Following the prescribed duration is crucial for effective treatment and to prevent the recurrence of the infection.';

const adultText1 = 'Alcohol can impact how some antibiotics work and may exacerbate certain side effects. To ensure the optimal outcome of the prescribed treatment, it\'s recommended to avoid alcohol during the course of antibiotic therapy. It\'s advisable to abstain from alcohol while taking antibiotics, as it may interfere with the medication\'s effectiveness and potentially lead to side effects.';
const adultText2 = 'Interactions between antibiotics and birth control pills can vary. Seeking advice from a healthcare provider helps in choosing appropriate contraceptive methods to maintain effective birth control while on antibiotics. Certain antibiotics can diminish the effectiveness of birth control pills. Consult with a healthcare professional to explore additional contraceptive measures and ensure proper protection.';
const adultText3 = 'The flu is a viral infection, and antibiotics are designed to treat bacterial infections. Taking antibiotics for the flu is ineffective and can contribute to antibiotic resistance. Consult your healthcare provider for appropriate flu management. Antibiotics are not effective against the flu, as it is caused by a virus. Rest, stay hydrated, and consider over-the-counter remedies to alleviate flu symptoms.';
const adultText4 = 'Inform your healthcare provider about all medications you\'re taking before starting antibiotics to prevent potential harmful interactions. Antibiotics may interact with other medications, affecting their efficacy or causing adverse effects. Open communication with your healthcare provider ensures a comprehensive understanding of potential interactions and helps in managing your overall health effectively.';
const adultText5 = 'Antibiotics can trigger allergic reactions. If you notice symptoms of an allergy, such as rash, swelling, or difficulty breathing, seek immediate medical attention. Allergic reactions to antibiotics can be serious. It\'s crucial to be aware of potential symptoms and report them promptly to your healthcare provider to determine the appropriate course of action.';
const adultText6 = 'Safely dispose of unused medications by taking them to your nearest pharmacy. Avoid flushing them down the sink or toilet, and never use expired medications. Proper disposal helps prevent environmental contamination and accidental ingestion. Pharmacies often have programs to collect and dispose of unused medications safely. Always follow recommended guidelines for medication disposal to ensure environmental and public safety.';
const adultText7 = 'Antibiotics can be effective for treating acne, but they should be prescribed by a healthcare professional as part of a comprehensive treatment plan. Antibiotics for acne are typically used to control bacterial infections and inflammation. It\'s important to follow the prescribed regimen and consult with a healthcare provider to determine the most suitable treatment approach for your specific case.';
const adultText8 = 'Long-term or inappropriate use of antibiotics can harm your liver. It\'s crucial to use them correctly and only as prescribed by a healthcare professional. Misuse of antibiotics, such as self-prescribing or not completing the prescribed course, can contribute to liver damage and antibiotic resistance. Always follow the guidance of your healthcare provider to ensure safe and effective use.';
const adultText9 = 'Taking antibiotics unnecessarily can lead to antibiotic resistance, making bacterial infections more challenging to treat. Only use antibiotics as prescribed by a healthcare professional. Antibiotic resistance is a global health concern. Misuse or overuse of antibiotics contributes to the development of resistant bacteria, reducing the effectiveness of these medications and posing a significant risk to public health.';

const elderText1 = 'Misusing antibiotics for viral infections can contribute to antibiotic resistance, making it harder to treat bacterial infections in the future. Always follow healthcare professional advice on medication use. If you have a viral infection like the flu or common cold, rest, stay hydrated, and consider over-the-counter remedies to alleviate symptoms. Antibiotics are not suitable for viral infections.';
const elderText2 = 'It\'s crucial to complete the entire antibiotic prescription as directed by your doctor, even if symptoms improve. This helps prevent the development of antibiotic-resistant bacteria. Stopping antibiotics prematurely may not fully eradicate the infection and can contribute to the development of antibiotic resistance, making future infections more challenging to treat.';
const elderText3 = 'Consult your doctor or pharmacist about potential food interactions with your specific antibiotic. In general, it\'s advisable to inquire about dairy products, as they can affect the absorption of certain antibiotics. Understanding food interactions with antibiotics is crucial for optimal medication effectiveness. Follow the advice provided by healthcare professionals to ensure the safe and effective use of antibiotics.';
const elderText4 = 'Always inform your doctor about all medications and supplements you are taking before starting antibiotics to prevent potential interactions that could affect antibiotic efficacy. Certain drugs and supplements can interfere with the absorption or effectiveness of antibiotics. Open communication with your healthcare provider ensures a comprehensive understanding of potential interactions and helps in managing your overall health effectively.';
const elderText5 = 'If you miss a dose of antibiotics, take it as soon as you remember. If it\'s close to the next scheduled dose, skip the missed one, and do not double up to avoid potential side effects.  Consistent and timely antibiotic intake is essential for effective treatment. However, doubling doses can lead to adverse effects and does not improve the medication\'s effectiveness. Follow the prescribed schedule closely.';
const elderText6 = 'The effectiveness of antibiotics varies, but improvement is typically noticeable within a few days. If there\'s no improvement, contact your doctor for further evaluation. Antibiotics may act quickly, but completing the full course is crucial to prevent the development of antibiotic-resistant bacteria. If symptoms persist or worsen, professional medical advice is essential.';
const elderText7 = 'It\'s recommended to avoid alcohol while taking antibiotics, as it can interfere with the medication and heighten the risk of side effects. Alcohol can reduce the effectiveness of some antibiotics and exacerbate certain side effects such as dizziness or stomach upset. To ensure the safe and optimal use of antibiotics, it\'s best to abstain from alcohol during the course of treatment.';
const elderText8 = 'Do not share antibiotics with others, as they are prescribed based on individual health conditions. Inappropriate use can contribute to antibiotic resistance. Encourage others to consult a doctor for their own evaluation and prescription. Antibiotics are tailored to specific infections, and sharing them can lead to ineffective treatment and the development of antibiotic-resistant bacteria. Responsible use and consultation with healthcare professionals are essential to address health concerns appropriately.';
const elderText9 = 'Taking probiotics can help prevent digestive issues during and after antibiotics. Consult your doctor before starting any supplements for personalized advice. Probiotics can support gut health, but individual needs vary. It\'s essential to seek professional guidance to ensure the compatibility of probiotics with your specific antibiotic and health situation.';


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

let img = null;
let textBox = null;
let closeIcon = null;

//Function to type out the text in the text box
function typeWriter(textToDisplay, textElement, speed, i) {
    if (i < textToDisplay.length) {
        textElement.innerHTML += textToDisplay.charAt(i);
        i++;
        setTimeout(typeWriter, speed, textToDisplay, textElement, speed, i);
    }
}

function clearBotElements() {
    if (img != null) {
        img.remove();
    }
    if (textBox != null) {
        textBox.remove();
    }
    if (closeIcon != null) {
        closeIcon.remove();
    }
}

const timeoutDictionary = {
    "removingImage": null,
    "timeoutSlideImage": null,
    "popTextBox": null,
    "removeTextBox": null
};

function RemoveImage() {
    img.remove();
    timeoutDictionary["removingImage"] = null;
}

function slideImage() {
    img.style.left = '-100px';
    timeoutDictionary["timeoutSlideImage"] = null;
}

function popTextBox(textToDisplay) {
    img.src = 'static/img/robot_normal.png';
    textBox.style.position = 'fixed';
    textBox.style.left = '420px';
    textBox.style.bottom = '320px';
    textBox.style.width = '400px';
    textBox.style.height = '100px';
    textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    textBox.style.border = '1px solid black';
    textBox.style.zIndex = '1000';
    textBox.style.padding = '10px';
    //Change the border of the text box to aappear like a text message
    textBox.style.borderRadius = '10px';
    //Add a shadow to the text box
    textBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    //Add a piece sticking out of the text box like a text message
    textBox.style.borderBottomLeftRadius = '0px';
    document.body.appendChild(textBox);

    //Add the text to the text box using typewriter effect
    typeWriter(textToDisplay, textBox, 20, 0)

    //Add a X icon to the text box to clsoe the text box
    closeIcon.src = 'static/img//CloseIcon.png';
    closeIcon.style.position = 'fixed';
    closeIcon.style.left = '793px';
    closeIcon.style.bottom = '395px';
    closeIcon.style.width = '20px';
    closeIcon.style.height = '20px';
    closeIcon.style.cursor = 'pointer';
    closeIcon.style.transition = 'all 1s ease-in-out';
    closeIcon.style.zIndex = '1001';
    document.body.appendChild(closeIcon);
    timeoutDictionary["popTextBox"] = null;
}

function removeTextBox() {
    //Slide the image out to the left
    img.style.left = '-1000px';
    textBox.remove();
    closeIcon.remove();
    const timeoutRemoveImage = setTimeout(RemoveImage, 1000);
    timeoutDictionary["removingImage"] = timeoutRemoveImage;
    timeoutDictionary["removeTextBox"] = null;
}

function clearTimeouts() {
    console.log("Clearing timeout");
    console.log(timeoutDictionary);
    if (timeoutDictionary["removingImage"] != null) {
        clearTimeout(timeoutDictionary["removingImage"]);
    }
    if (timeoutDictionary["timeoutSlideImage"] != null) {
        clearTimeout(timeoutDictionary["timeoutSlideImage"]);
    }
    if (timeoutDictionary["popTextBox"] != null) {
        clearTimeout(timeoutDictionary["popTextBox"]);
    }
    if (timeoutDictionary["removeTextBox"] != null) {
        clearTimeout(timeoutDictionary["removeTextBox"]);
    }
}
//LIST OF TIMOUTS 

//Breaking Down One Huge Function into smaller functions that can be called
function slideInImageAndDisplayText(textToDisplay) {

    clearTimeouts();
    clearBotElements();

    img = document.createElement('img');
    textBox = document.createElement('div');
    closeIcon = document.createElement('img');

    closeIcon.addEventListener('click', () => {
        //Slide the image out to the left
        img.style.left = '-1000px';
        textBox.remove();
        closeIcon.remove();
        timeoutDictionary["removingImage"] = true;
        const timeoutRemoveImage = setTimeout(RemoveImage, 1000);
        timeoutDictionary["removingImage"] = timeoutRemoveImage;
    });

    img.src = 'static/img/robot_thinking.png';
    img.style.position = 'fixed';
    img.style.bottom = '0';
    img.style.left = '-400px';
    img.style.width = ' 573px';
    img.style.zIndex = '1000';
    img.style.height = '400px';
    img.style.transition = 'all 1s ease-in-out';

    //Make image slide in from the left
    document.body.appendChild(img);
    const timeoutSlideImage = setTimeout(slideImage, 1);
    timeoutDictionary["timeoutSlideImage"] = timeoutSlideImage;

    const timeoutPopTextBox = setTimeout(() => popTextBox(textToDisplay), 2000);
    timeoutDictionary["popTextBox"] = timeoutPopTextBox;

    const timeoutRemoveEverything = setTimeout(removeTextBox, 15000);
    timeoutDictionary["removeTextBox"] = timeoutRemoveEverything;
}