export const vertex_source = `
  attribute vec2 a_position;
  attribute float size;

  void main() {
    gl_Position = vec4(a_position.x, a_position.y, 0, 1.0);
    gl_PointSize = size;
  }
`;

export const fragment_source = `
  precision highp float;
 
  void main() {
    vec2 color;
    color.x = mod(gl_FragCoord.x, 40.0) / 40.0;
    color.y = mod(gl_FragCoord.y, 100.0) / 100.0;
    gl_FragColor = vec4(1.0, color, 1.0);
  }
`;