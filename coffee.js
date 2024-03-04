const scrollButton = document.getElementById("scrollToImg");

// Add an event listener to the button click
scrollButton.addEventListener("click", function() {
  // Get the element with the class "imgsec"
  const imgSection = document.querySelector(".imgsec");

  // Scroll to the top of the imgSection element smoothly
  imgSection.scrollIntoView({ behavior: "smooth" });
});

const scrollButtonB = document.getElementById("scrollToMatrix");

// Add an event listener to the button click
scrollButtonB.addEventListener("click", function() {
  // Get the element with the class "aboutsec"
  const aboutSection = document.querySelector(".aboutsec");

  // Scroll to the top of the imgSection element smoothly
  aboutSection.scrollIntoView({ behavior: "smooth" });
});


const scrollButtonC = document.getElementById("cream");

// Add an event listener to the button click
scrollButtonC.addEventListener("click", function() {
  // Get the element with the class "imgsec"
  const cardiSection = document.querySelector(".container");

  // Scroll to the top of the imgSection element smoothly
  cardiSection.scrollIntoView({ behavior: "smooth" });
});

const scrollButtonD = document.getElementById("strength");

// Add an event listener to the button click
scrollButtonD.addEventListener("click", function() {
  // Get the element with the class "imgsec"
  const gokuSection = document.querySelector(".stayback");

  // Scroll to the top of the imgSection element smoothly
  gokuSection.scrollIntoView({ behavior: "smooth" });
});

const redirectButton = document.getElementById("redirect-button");
const redirectUrl = "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%89%E3%83%AB%E3%83%95%E3%83%BB%E3%83%92%E3%83%88%E3%83%A9%E3%83%BC"; // Replace with your desired external URL

redirectButton.addEventListener("click", function() {
  window.location.href = redirectUrl;
});


const movingButton = document.getElementById("moving-button");
let moveCount = 0;

movingButton.addEventListener("click", function() {
  moveCount++;

  // Generate random positions within the section's boundaries
  const randomTop = Math.floor(Math.random() * (500 - movingButton.offsetHeight - 10)) + 10;
  const randomLeft = Math.floor(Math.random() * (700 - movingButton.offsetWidth - 10)) + 10;

  movingButton.style.top = randomTop + "px";
  movingButton.style.left = randomLeft + "px";

  // Increase button size with each click
  movingButton.style.width = (movingButton.offsetWidth + 1) + "px";
  movingButton.style.height = (movingButton.offsetHeight + 1) + "px";
});

const imageLink = document.querySelector('.image-container a');

imageLink.addEventListener('mouseover', function(event) {
  event.preventDefault(); // Prevent default link behavior (opening in same window)
  window.location.href = "https://screenprank.com/countdown/"; // Replace with your desired URL
});

const audioElement = document.getElementById("myAudio");
const playButton = document.getElementById("cardi");

playButton.addEventListener("mouseover", () => {
  audioElement.play();
});