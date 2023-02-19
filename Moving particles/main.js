import Particle from "http://localhost:5500/Moving particles/particle.js"
import Renderer from "http://localhost:5500/Moving particles/renderer.js"
import Mover from "http://localhost:5500/Moving particles/mover.js"

// get HTML5 canvas
let canvas = document.getElementById("canvas");

// Make n particles

let particle_array = [];
let color_array = ["#db222a","#098d9b","#053c5e","#bc1055","#fa600c"];

for (let index = 0; index < 100; index++) {
    
    //generating random values for particle properties
    let x = Math.floor(Math.random() * canvas.width) + 1;
    let y = Math.floor(Math.random() * canvas.height) + 1;
    let size = Math.floor(Math.random() * 30) + 1;
    let random_color = Math.floor(Math.random() * color_array.length);

    //generating new particle in particle array
    particle_array.push (new Particle(x, y, color_array[random_color], size))
    
}

console.log(particle_array)


// Draw particles
let renderer = new Renderer(canvas);
let mover = new Mover(particle_array)

renderer.draw_particle_array(particle_array);

setInterval(draw, 1/60)

function draw() {
  renderer.clear()
  mover.move_particles()
  renderer.draw_particle_array(particle_array)
}


