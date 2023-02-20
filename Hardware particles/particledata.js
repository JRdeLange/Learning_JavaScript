export default class Particledata {

    constructor() {
        this.positions = []
        this.colors = []
        this.sizes = []
    }

    add_particle(position, color, size)
    

    move() {
        if (this.size > this.max_size) {
            this.growing = false;
        } else if (this.size < this.min_size) {
            this.growing = true;
        }

        if (this.growing) {
            this.size += .2;
        } else {
            this.size -= .2;
        }
    }

    dodge(mouse){

        
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 50;
        if (distance < maxDistance && this.size < this.max_size) {
            this.size += 5;
        }
        else if (this.size > this.min_size) {
            this.size -= 5;
        }
    }
    
}