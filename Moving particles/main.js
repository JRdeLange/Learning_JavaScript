import Particle from "http://localhost:5500/Moving particles/particle.js"
import Renderer from "http://localhost:5500/Moving particles/renderer.js"
import Mover from "http://localhost:5500/Moving particles/mover.js"

// get HTML5 canvas
let canvas = document.getElementById("canvas");

// Make n particles

let particle_array = [];
let color_array = ["red","green","blue","yellow","magenta"];

for (let index = 0; index < 100; index++) {
    let x = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() * 100) + 1;
    particle_array.push (new Particle(x, y, color_array[index], 1))
    
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


