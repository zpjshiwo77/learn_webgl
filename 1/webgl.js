//开始学习webgl，在画布上涂一些简单的颜色

var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("experimental-webgl");
var iCompile = new Compile(canvas,gl);

var vs = iCompile.create_shader("2d-vertex-shader");
var fs = iCompile.create_shader("2d-fragment-shader");
var program = iCompile.create_program(vs,fs);

// var buffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// gl.bufferData(
// gl.ARRAY_BUFFER,
// new Float32Array([
// -1.0, -1.0,
//  1.0, -1.0,
// -1.0,  1.0,
// -1.0,  1.0,
//  1.0, -1.0,
//  1.0,  1.0]),
// gl.STATIC_DRAW);
// gl.enableVertexAttribArray(positionLocation);
// gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
 
// draw
gl.drawArrays(gl.POINTS, 0, 6);   