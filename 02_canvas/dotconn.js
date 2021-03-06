/*
  LeafGreen -- Karen Li, Thomas Lee
  SoftDev2 pd6
  K02 -- ...Connecting the Dots
  2019-01-31
*/

//get canvas
var c = document.getElementById("playground");

//instantiate conext of canvas
var ctx = c.getContext("2d");

//instantiate state variable for whether canvas is clear
var clear = true;

//get clear button
var clear_button = document.getElementById("clear");

//clear the canvas when the clear button is clicked
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

//instantiate x and y cor
var prev_x = 0;
var prev_y = 0;

//draws lines between dots on canvas
c.addEventListener('click', function(e){
    //color of drawing
    ctx.fillStyle = "#000000";
    //begin a new path
    ctx.beginPath();
    //draw dot
    ctx.arc(e.offsetX,e.offsetY,3,0,Math.PI*2);
    ctx.fill();

    if(clear){
	//set prev x cor and y cor
	prev_x = e.offsetX;	
	prev_y = e.offsetY;
    }
    
    else{
	//begin a new path
	ctx.beginPath();
	//start line at previous point
	ctx.moveTo(prev_x,prev_y);
	//set new x cor and y cor
	prev_x = e.offsetX;	
	prev_y = e.offsetY;
	//draw a line to the new point from the old point
	ctx.lineTo(prev_x, prev_y);
	ctx.stroke();
    }

    //canvas is not clear 
    clear = false; 
});

//some functions to keep in mind
//fillStyle()
//strokeStyle()
//clearRect()
//fillText()
