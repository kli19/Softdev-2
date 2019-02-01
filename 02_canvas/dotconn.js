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

c.addEventListener('click', function(e){
    if(clear){
	//clears subpaths that would accumulate path operations and begins a new path
	ctx.beginPath();
    }
    //sets xcor relative to the canvas
    var x = e.offsetX;
    //sets ycor relative to the canvas
    var y = e.offsetY;

    
    
    ctx.fillStyle = "#000000";

        ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    
    ctx.arc(x,y,3,0,Math.PI*2);
    ctx.fill()
    

    clear = false;
    
});

//fillStyle()
//strokeStyle()
//clearRect()
//fillText()
