/*
  FireRed -- Karen Li, Kendrick Liang
  SoftDev2 pd6
  K03 -- They lock us in the tower whenever we get caught
  2019-02-04
*/

//get context for canvas
c = document.getElementById("playground");
ctx = c.getContext("2d");

//get buttons
var circle_button = document.getElementById("circle");
var stop_button = document.getElementById("stop");

//requestID for animation
var requestID = 0;

//radius of circle
var radius = 0;

//true if the circle is growing; false if shrinking
var growing = true;

//clear the canvas
var clear = function(e){
    ctx.clearRect(0,0,c.width,c.height);
};

//animate growing and shrinking circle
var draw_dot = function(){
    if (radius == c.width/2){
	growing = false;
    }
    if (radius == 0){
	growing = true;
    }
    //clear the canvas
    clear();
    //draw the dot
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    //increment radius depending on if the circle is growing or shrinking
    if(growing){
	radius++;
    }
    else{
	radius--;
    }

    //cancel before animating in case button is clicked multiple times
    window.cancelAnimationFrame(requestID)
    requestID = window.requestAnimationFrame(draw_dot);
}

//stop drawing the dot
var stop_it = function(){
    //console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

//animation begins when button is clicked
circle_button.addEventListener("click", draw_dot);

//animation stops when button is clicked
stop_button.addEventListener("click", stop_it);


/*
  DO NOT USE setTimeout() setInterval()

  DO USE window.requestAnimationFrame() -- only need one call in this project
  -executes on NEXT AVAILABLE screen repaint (ensures browser and hardware are ready)
  -pauses for background tabs, hidden frames etc
  -is automatically passed a timestamp to mark call time
  -returns a non-zero integer (can be used as an ID)
  -60 fps (target)
  -can be optimaized by browser (smoother animation)
  -more resource efficient (battery friendly)

  window.cancelAnimationFrame(id)
  -stops animation
*/


