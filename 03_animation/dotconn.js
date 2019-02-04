/*
  FireRed -- Karen Li, Kendrick Liang
  SoftDev2 pd7
  K03 -- 
  2019-02-041-31
*/

var requestID;
var radius = 0;
var growing = true;
var clear = function(e){
    if (clear){
	//if the canvas is already clear, this function will not be executed
	e.preventDefault();
	console.log("already clear");
    }
    ctx.clearRect(0,0,c.width,c.height);
    clear = true;
};

var drawDot = function(){
    //..
    //draw the dot
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill
    //..

    }
}

var stopIt = function(){
    console.log(requestID);
    //..
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);


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


