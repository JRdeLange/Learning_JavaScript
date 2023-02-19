import Particle from "http://localhost:5500/Moving particles/particle.js"
import Renderer from "http://localhost:5500/Moving particles/renderer.js"
import Mover from "http://localhost:5500/Moving particles/mover.js"
import Pixels from "http://localhost:5500/Moving particles/pixels.js"


// get HTML5 canvas
let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// load sampling image
let image = new Pixels("http://localhost:5500/Moving particles/test.png", image_is_loaded)

// Image is now loaded
function image_is_loaded(){

  // Make n particles
  let particle_array = [];
  let color_array = ["#db222a","#098d9b","#053c5e","#bc1055","#fa600c"];

  for (let index = 0; index < 100; index++) {
    // generate position based on image

      
    //generating random values for particle properties
    let x = Math.floor(Math.random() * canvas.width) + 1;
    let y = Math.floor(Math.random() * canvas.height) + 1;
    let size = Math.floor(Math.random() * 100) + 1;
    let random_color = Math.floor(Math.random() * color_array.length);

    //generating new particle in particle array
    particle_array.push (new Particle(x, y, color_array[random_color], size));
      
  }

  // Draw particles
  let renderer = new Renderer(canvas, particle_array);
  let mover = new Mover(particle_array);

  setInterval(draw, 1/60);


  function draw() {
    renderer.clear();
    particle_array.forEach(particle => {
      particle.move()
    });
    renderer.draw_particle_array();


  }
}