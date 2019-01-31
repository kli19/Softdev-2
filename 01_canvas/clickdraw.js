/*
LeafGreen -- Karen Li, Thomas Lee
SoftDev2 pd7
K01 -- ...and I want to Paint It Better
2019-01-31
*/

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//ctx.fillStyle = "#ff0000";
//ctx.fillRect(50,50,100,200);

var clear = true;
var clear_button = document.getElementById("clear");
clear_button.addEventListener('click', function(e){
    if (clear){
	//if the canvas is already clear, this function will not be executed
	e.preventDefault();
	console.log("already clear");
    }
    ctx.clearRect(0,0,c.width,c.height);
    clear = true;
});

var rectangle_mode = true;

var toggle_button = document.getElementById("toggle");
toggle_button.addEventListener('click', function(){
    rectangle_mode = !rectangle_mode;
    if(rectangle_mode){
	toggle_button.innerHTML = "drawing rectangles (click to draw dots instead)"
    }
    else{
	toggle_button.innerHTML = "drawing dots (click to draw rectangles instead)"
    }
});


c.addEventListener('click', function(e){
    clear = false;
    //sets xcor relative to the canvas
    var x = e.offsetX;
    //sets ycor relative to the canvas
    var y = e.offsetY;
    if(rectangle_mode){
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x,y,50,50);
    }
    else{
	ctx.fillStyle = "#000000";
	//clears subpaths that would accumulate path operations and begins a new path
	ctx.beginPath();
	ctx.arc(x,y,3,0,Math.PI*2);
	ctx.fill()
    }
});

//fillStyle()
//strokeStyle()
//clearRect()
//fillText()
