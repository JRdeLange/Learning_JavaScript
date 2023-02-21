export default class Particledata {

    constructor() {
        this.nr = 0
        this.positions = [];
        this.colors = [];
        //this.color_indices = [];
        this.sizes = [];
        this.sizes_growing = [];
        this.random_nrs = [];
        this.min_size = 0;
        this.max_size = 5;
    }

    add_particle(position, color, size) {
        this.nr += 1;
        this.positions.push(position[0], -position[1]);
        //this.color_indices.push(color);
        this.colors.push(color[0], color[1], color[2], color[3]);
        this.sizes.push(size);
        this.sizes_growing.push(Math.random() > 0.5);
        this.random_nrs.push(Math.random(), Math.random(), Math.random())
    }

    grow() {
        for (let idx = 0; idx < this.sizes.length; idx++) {
            if (this.sizes_growing[idx]) {
                this.sizes[idx] += 0.1;
                this.sizes_growing[idx] = (this.sizes[idx] < this.max_size);
            } else {
                this.sizes[idx] -= 0.1;
                this.sizes_growing[idx] = (this.sizes[idx] < this.min_size);
            
            }
            
        }
    }
}