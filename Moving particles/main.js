import Particle from "http://localhost:5500/Moving particles/particle.js"
import Renderer from "http://localhost:5500/Moving particles/renderer.js"
import WebGLRenderer from "http://localhost:5500/Moving particles/webgl_renderer.js"
import Mover from "http://localhost:5500/Moving particles/mover.js"
import Pixels from "http://localhost:5500/Moving particles/pixels.js"


// get HTML5 canvas
let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Define mouse object to store cursor postition
const mouse = {
    x: 0,
    y: 0,
};

// Update mouse position
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});


// load sampling image
let image = new Pixels("http://localhost:5500/Moving particles/test.png", image_is_loaded)

// Image is now loaded
function image_is_loaded(){

    // Make n particles
    let particle_array = [];
    let color_array = ["#db222a","#098d9b","#053c5e","#bc1055","#fa600c"];

    for (let index = 0; index < 100000; index++) {
        // generate position based on image
        let x = Math.floor(Math.random() * 350)
        let y = Math.floor(Math.random() * 350)

        while (Math.random() < image.pixels[x][y]) {
            x = Math.floor(Math.random() * 350)
            y = Math.floor(Math.random() * 350)
        }
            
        //generating random values for particle properties
        // let x = Math.floor(Math.random() * canvas.width) + 1;
        // let y = Math.floor(Math.random() * canvas.height) + 1;
        let size = Math.floor(Math.random() * 6) + 1;
        let random_color = Math.floor(Math.random() * color_array.length);

        //generating new particle in particle array
        particle_array.push(new Particle(y*3, x*3, color_array[random_color], size));
            
    }

    // Draw particles
    // let renderer = new Renderer(canvas, particle_array);
    let renderer = new WebGLRenderer(canvas)
    let mover = new Mover(particle_array);

    setInterval(draw, 1/60);

    function draw() {
        let data = []
        particle_array.forEach(particle => {
            particle.dodge(mouse)
            data.push(particle.x/175 - 1, particle.y/175 - 1, particle.size)
            
        });
        renderer.clear()
        renderer.draw(data)
    }




    function draw_old() {
        renderer.clear();
        particle_array.forEach(particle => {
            //particle.move()
            particle.dodge(mouse)
        });
        renderer.draw_particle_array();


    }
}