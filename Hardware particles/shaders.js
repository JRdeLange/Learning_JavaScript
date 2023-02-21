export const vertex_source = `
  precision highp float;
  attribute float size;
  attribute vec2 position;
  attribute vec4 color;
  attribute vec3 random_nrs;
  varying vec4 fragcolor;
  uniform float time;
  uniform vec2 mouse;


  void main() {
    vec2 correct_mouse = vec2(mouse.x, -mouse.y);
    vec2 vector = correct_mouse - position;
    float dist = length(vector);
    vec2 posxy = position;

    float react_distance = 0.6;
    if (dist < react_distance) {
      float movement_factor = (react_distance - dist) * (1.0/react_distance); 

      float random_variance = random_nrs.x / 10.0 + 0.1;
      posxy = posxy - normalize(vector) * movement_factor *  movement_factor * random_variance;
    }

    gl_Position = vec4(posxy, 0.0, 1.0);
    gl_PointSize = (sin(time + (random_nrs.x * 2.0 * 3.1415)) * 5.0) + 1.0;
    fragcolor = color;
  }
`;

export const fragment_source = `
  precision highp float;
  varying vec4 fragcolor;
 
  void main() {
    vec2 color;
    color.x = mod(gl_FragCoord.x, 40.0) / 40.0;
    color.y = mod(gl_FragCoord.y, 40.0) / 40.0;
    gl_FragColor = fragcolor;
  }
`;