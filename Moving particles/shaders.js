export const vertex_source = `
  attribute vec2 a_position;
  attribute float size;

  void main() {
    gl_Position = vec4(a_position.x, a_position.y, 0, 1.0);
    gl_PointSize = size;
  }
`;

export const fragment_source = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;