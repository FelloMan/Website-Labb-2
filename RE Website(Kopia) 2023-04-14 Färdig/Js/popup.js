// get all the buttons that open the modals
const openButtons = document.querySelectorAll("[data-opens]");

// loop over the buttons
openButtons.forEach(function(btn) {
  // get the selector
  var modalSelector = btn.dataset.opens;

  btn.addEventListener("click", function() {
    document.querySelector(modalSelector).showModal();
  });
});

//get all the close buttons and attach events
// get all the buttons that open the modals
const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // find the parent that is a modal element and close it
    btn.closest('.modal').close();
  });
});


////////////////////////////////////////////////////////////


const label = document.querySelector("h1 > span");

const handleKey = (evt) => {
  if (evt.target.matches(".did-you-know")) {
    document.body.style.backgroundColor = "pink";

    if (evt.keyCode === 38) {
      label.style.color = "white";
    } else {
      label.style.color = "green";
    }
  }
};

const handleClick = (evt) => {
  console.log("Du klickade på knappen"); 
  console.log(evt)
  document.body.style.backgroundColor = "blue";
}

label.addEventListener("mouseenter", handleClick)


document.querySelector("body").addEventListener("keydown", handleKey)
 
////////////////////////////////////////////////////////////////////////


const handleClick2 = (evt) => {
  console.log("Du klickade på knappen"); 
  console.log(evt)

}

label.addEventListener("mouseenter", handleClick)


document.querySelector("body").addEventListener("keydown", handleKey)

















////////////////////////////////////////////////////////////////////////

// Get the "Download repository" link element
const downloadLink = document.querySelector('a[href*="https://github.com/FelloMan?tab=repositories"][href*="https://github.com/FelloMan/Candy_SUT21/archive/master.zip"]');

// Add a click event listener to the link
downloadLink.addEventListener('downloadclick', function(event) {
  // Prevent the default link behavior (i.e. downloading the file)
  event.preventDefault();

  // Log a message to the console indicating that the link was clicked
  alert('Thanks for downloading our repository!');

  // Add any additional code you want to execute when the link is clicked here
  // For example, you could track the event using an analytics tool like Google Analytics
});

