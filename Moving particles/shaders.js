export const vertex_source = `
  attribute vec2 a_position;
  attribute float size;
  varying vec4 color;

  void main() {
    gl_Position = vec4(a_position.x + 0.5 + sin(a_position.y * 10.0 + size)/30.0, a_position.y, 0, 1.0);
    gl_PointSize = size;
    color = vec4(-a_position.x*2.0, a_position.y, -a_position.x + a_position.y, 1.0);
  }
`;

export const fragment_source = `
  precision highp float;
  varying vec4 color;
 
  void main() {
    gl_FragColor = color;
  }
`;

export const old_fragment_source = `
precision highp float;
in vec4 color

void main() {
  vec2 color;
  color.x = mod(gl_FragCoord.x, 40.0) / 40.0;
  color.y = mod(gl_FragCoord.y, 40.0) / 40.0;
  gl_FragColor = vec4(1.0, color, 1.0);
}
`;