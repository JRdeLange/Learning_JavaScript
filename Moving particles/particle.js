export default class Particle {

    constructor(x, y, color, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.growing = true;
        this.min_size = 1
        this.max_size = 31
    }

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