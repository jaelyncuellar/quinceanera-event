/*** Light Mode ***/

let themeButton = document.getElementById("theme-button");
// callback function
const toggleLightMode = () => {
    document.documentElement.classList.toggle("light-mode");
    document.body.classList.toggle("light-mode");
    console.log('class changed');
}
// 'click' event listener for the theme button,
// use toggleLightMode as its callback function
themeButton.addEventListener("click", toggleLightMode);

/*** Form Handling ***
user submits RSVP form - name & state added to list of parts
***/
let rsvpButton = document.getElementById("rsvp-button")
let count = 3; 
const addParticipant = (event, person) => {
    // manipulate DOM
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    const p = document.createElement('p'); // use DOM method to create new <p>
    p.textContent=`🎟️ ${firstName} ${lastName} has RSVP'd.`; // set <p> to user's input  
    const participantsDiv = document.querySelector('.rsvp-participants'); // use DOM to find the rsvp-participants div and add new <p> ele to it 
    participantsDiv.appendChild(p);  //append the new <p> to the div
    // use DOM method to find the rsvp-count ele. then remove it and update it 
    const rsvpCount = document.getElementById('rsvp-count'); 
    rsvpCount.remove(); 
    count = count + 1; 
    const increaseCount = document.createElement('p');
    increaseCount.id = 'rsvp-count'; 
    increaseCount.textContent="⭐" + count + " people have RSVP'd to this event!"; 
    participantsDiv.appendChild(increaseCount); 
}

/*** Form Validation ***/
const validateForm = (event) => { 
    event.preventDefault();
    let containsErrors = false; 
    var rsvpElements = document.getElementById('rsvp-form').elements; 
    // person object
    let person = { 
        name: rsvpElements[0].value,
        hometown: rsvpElements[1].value,
        email: rsvpElements[2].value 
    };
    // loop thru all inputs - fname, lname, email
    for (let i = 0; i < rsvpElements.length; i++){ 
        // validate the val of each input 
        let element = rsvpElements[i]; // input#id, .value = user input 
        if (element.value.length < 2){ // add an error class attribute to curr input 
            containsErrors=true;
            element.classList.add('error');
        } else { 
            element.classList.remove('error'); 
        }
    }
    const email=person.email.trim();
    if (!email.includes(".com")){ 
        console.log("email not valid!"); 
        containsErrors=true;
        document.getElementById('email').classList.add('error');
    }
    // if no errors - call addParticipant() and clear fields 
    if (!containsErrors){ // true 
        addParticipant(person);
        toggleModal(person);
        for (let i = 0; i < rsvpElements.length; i++){ 
            rsvpElements[i].value = "";
        }
    }
}
// replace the form button's event listener with a new one that calls validateForm() 
rsvpButton.addEventListener("click", validateForm);


/*** Success Modal ***
  Purpose: pop-up modal ***/
const toggleModal = (person) => {
    let modal = document.getElementById('success-modal');
    let modalContent = document.getElementById('modal-item');

    modal.style.display='flex';
    modalContent.innerText = `Thanks for RSVPing, ${person.name}! We are looking forward to seeing you at the event!`;

    let intervalId = setInterval(animateImage, 500); 

    setTimeout(()=>{
        modal.style.display='none';
        clearInterval(intervalId); 
    }, 3000); 

}
// TODO: animation variables and animateImage() function
let rotateFactor = 0; 
let modalImage = document.getElementById('modal-image');
const animateImage = () => {
    rotateFactor = rotateFactor===0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`; 
}