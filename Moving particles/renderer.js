const two_pi = Math.PI * 2

export default class Renderer{

    constructor(canvas, particle_array) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.particle_array = particle_array;
    }

    draw_particle_array() {
        this.particle_array.forEach(particle => {
            this.draw_particle(particle);
        });
    }

    draw_particle(p) {
        this.context.beginPath();
        this.context.arc(p.x, p.y, p.size, 0, two_pi);
        this.context.fillStyle = p.color;
        this.context.fill();
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}