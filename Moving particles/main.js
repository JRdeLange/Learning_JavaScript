import Particle from "http://localhost:5500/Moving particles/particle.js"

// get HTML5 canvas


// Make n particles

let particle_array = [];
let color_array = ["red","green","blue","yellow","magenta"];

for (let index = 0; index < 5; index++) {
    let x = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() * 100) + 1;
    particle_array.push (new Particle(x, y, color_array[index], 1))
    
}

console.log(particle_array)


// Draw particles

