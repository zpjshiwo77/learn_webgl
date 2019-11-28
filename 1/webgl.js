//开始学习webgl，在画布上涂一些简单的颜色

//获取canvas对象
var canvas = document.getElementById("myCanvas");
//获取WebGL对象
var gl = canvas.getContext("experimental-webgl");
//new一个编译对象
var iCompile = new Compile(canvas,gl);

//编译顶点着色器和片元着色器
var vs = iCompile.create_shader("2d-vertex-shader");
var fs = iCompile.create_shader("2d-fragment-shader");
//创建程序对象
var program = iCompile.create_program(vs,fs);

//在画布上画出我们想要的内容
gl.drawArrays(gl.POINTS, 0, 6);   