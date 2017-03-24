TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
square();

function triangle(x){
right(30);
forward(x);
right(120);
forward(x);
left(30);
forward(x);
right(120);
forward(x);
left(30);
forward(x);
right(120);
forward(x);
left(30);
forward(x);
right(120);
forward(x);
right(90);
}
var x = 50
triangle(x);

function rhombus(l){
left(120);
forward(l);
left(140);
forward(l);
left(45);
forward(l);
left(45);
forward(l);
left(45);
forward(l);
left(45);
forward(l);
left(45);
forward(l);
left(45);
forward(l);
left(45);
forward(l);
}
var l = 55
rhombus(l);

function triangle_2(c){
left(90);
}
var c = 50
triangle_2(c);
stamp()

