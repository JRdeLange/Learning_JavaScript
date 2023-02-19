const two_pi = Math.PI * 2

export default class Renderer{

    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d")
    }

    draw_particle_array(array) {
        array.forEach(particle => {
            this.draw_particle(particle)
        });
    }

    draw_particle(p) {
        this.context.beginPath();
        this.context.arc(p.x, p.y, p.size, 0, two_pi);
        this.context.fill();

    }

}