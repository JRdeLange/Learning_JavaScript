import Particle from "http://localhost:5500/Moving particles/particle.js"
import Renderer from "http://localhost:5500/Moving particles/renderer.js"

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

renderer.draw_particle_array(particle_array);



