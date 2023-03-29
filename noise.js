"use strict";
// export {}
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
// 定义顶点着色器
const vertexShaderSource = `
  attribute vec4 a_position;

  void main() {
    gl_Position = a_position;
  }
`;
// 定义片段着色器
const fragmentShaderSource = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform float u_size;
// uniform vec2 u_resolution;

float random2d(vec2 co) {
  float a = 12.9898;
  float b = 78.233;
  float c = 43758.5453;
  float dt= dot(co.xy ,vec2(a,b));
  float sn= mod(dt,3.14);
  return fract(sin(sn) * c);
}

// web 上还不支持那么新的特性
float mymod(float a, float b) {
  return a - (b * floor(a/b));
}

float ff(float x) {
  // return x - mymod(x, 4.0);
  // return x - mymod(x, 2.0);
  return x - mymod(x, u_size);
}

void main(){
  vec2 coord = vec2(ff(gl_FragCoord.x), ff(gl_FragCoord.y));
  vec3 color = vec3(0.0);

  float grain = 0.0;
  grain = random2d(vec2(sin(coord)) * u_time);

  float vv = (grain > 0.5) ? 1.0 : 0.0;

  color += vec3(vv);

  gl_FragColor = vec4(color, 1.0);
}

`;
// 创建顶点着色器
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vertexShader));
}
// 创建片段着色器
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fragmentShader));
}
// 创建着色器程序
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
}
gl.useProgram(program);
// 获取顶点着色器的位置属性
const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
// 定义顶点数据
const vertices = [
    -1, 1,
    -1, -1,
    1, -1,
    1, -1,
    1, 1,
    -1, 1,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
gl.enableVertexAttribArray(positionAttributeLocation);
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
// 获取 uniform 变量的位置
// const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
const sizeUniformLocation = gl.getUniformLocation(program, 'u_size');
function drawgl() {
    // 设置 canvas 的分辨率
    const start = Date.now();
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
    gl.viewport(0, 0, canvas.width, canvas.height);
    // 创造一个随机数并传递到着色器程序中
    gl.uniform1f(timeUniformLocation, Math.random());
    gl.uniform1f(sizeUniformLocation, 8.0);
    // 清空画布并绘制白噪音
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(drawgl);
}
drawgl();
