import { vertex_source, fragment_source } from "http://localhost:5500/Hardware particles/shaders.js"

export default class WebGLRenderer{

    constructor(canvas) {
        this.gl = canvas.getContext("experimental-webgl");
        this.shader_program = this.gl.createProgram();
        this.make_shaders();

        this.vertex_buffer = this.gl.createBuffer();

        this.pos_attribute = null
        this.size_attribute = null
        this.get_attribute_locations();

    }

    clear() {
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    draw(data) {
        this.fill_vertex_buffer(data)

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertex_buffer);
        this.gl.drawArrays(this.gl.POINTS, 0, data.length / 3);
    }

    fill_vertex_buffer(data) {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertex_buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }

    get_attribute_locations() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertex_buffer);
        
        this.pos_attribute = this.gl.getAttribLocation(this.shader_program, "a_position");
        this.gl.vertexAttribPointer(this.pos_attribute, 2, this.gl.FLOAT, false, 12 , 0);
        this.gl.enableVertexAttribArray(this.pos_attribute);
    
        this.size_attribute = this.gl.getAttribLocation(this.shader_program, "size");
        this.gl.vertexAttribPointer(this.size_attribute, 1, this.gl.FLOAT, false, 12 , 8);
        this.gl.enableVertexAttribArray(this.size_attribute);
    }

    make_shaders() {
        let fragment = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        let vertex = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(fragment, fragment_source);
        this.gl.compileShader(fragment);
        this.gl.shaderSource(vertex, vertex_source);
        this.gl.compileShader(vertex);
        this.gl.attachShader(this.shader_program, vertex);
        this.gl.attachShader(this.shader_program, fragment);
        this.gl.linkProgram(this.shader_program);
        this.gl.useProgram(this.shader_program);
    }
}