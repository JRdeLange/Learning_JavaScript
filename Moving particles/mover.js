export default class Mover{

    constructor(particles) {
        this.particles = particles;
    }

    move_particles() {
        this.particles.forEach(particle => {
            particle.x += 1
            particle.y += 1
        });
    }

}