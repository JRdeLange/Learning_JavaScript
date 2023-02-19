import Particle from "http://localhost:5500/Moving particles/particle.js"


const square = document.getElementById("square");
square.style.borderWidth = "6px"






// Initialize the rotation angle to 0
let angle = 0;

// Define a function to update the square's rotation
function rotateSquare() {
  // Increment the angle by 5 degrees
  angle += 1;

  // Apply the rotation transform to the square
  // mover.move(square)
  square.style.transform = "rotate(" + angle + "deg)"
}

// Call rotateSquare every 50 milliseconds to animate the rotation
setInterval(rotateSquare, 1000/60);