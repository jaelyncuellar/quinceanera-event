/*** Light Mode ***/

// 1. Select the theme button
let themeButton = document.getElementById("theme-button");
// 2. Write the callback function
const toggleLightMode = () => {
    document.documentElement.classList.toggle("light-mode");
    document.body.classList.toggle("light-mode");
    console.log('class changed');
}
// 3. Register a 'click' event listener for the theme button,
// & tell it to use toggleLightMode as its callback function
themeButton.addEventListener("click", toggleLightMode);



/*** Form Handling ***
  - When user submits RSVP form, the name and state they 
    entered should be added to the list of participants.
***/

// 1. Add query for submit RSVP button
let rsvpButton = document.getElementById("rsvp-button")
let count = 3; 
const addParticipant = (event) => {
    // 2. write code to manipulate DOM
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;

    // use DOM method to create new <p> ele 
    const p = document.createElement('p'); 
    // set new <p> ele text to be the user's name & other details got 
    p.textContent=`🎟️ ${firstName} ${lastName} has RSVP'd.`;
    // use DOM to find the rsvp-participants div and add new <p> ele to it 
    const participantsDiv = document.querySelector('.rsvp-participants');
    //append the new <p> to the div 
    participantsDiv.appendChild(p);

    // use DOM method to find the rsvp-count ele 
    // then remove it and update it 
    const rsvpCount = document.getElementById('rsvp-count'); 
    rsvpCount.remove(); 
    count = count + 1; 
    const increaseCount = document.createElement('p');
    increaseCount.id = 'rsvp-count'; 
    increaseCount.textContent="⭐" + count + " people have RSVP'd to this event!"; 
    participantsDiv.appendChild(increaseCount); 



    





    event.preventDefault();
}

// 3. Add a click event listener to the submit RSVP button
rsvpButton.addEventListener("click", addParticipant);



/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/