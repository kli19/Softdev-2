/*
  Karen Li
  SoftDev2 pd6
  K11 -- Ask Circles [Change || Die]
  2019-03-13
*/

//get the pic
var pic = document.getElementById("vimage")

//get the clear button
var clear_button = document.getElementById("clear");

//get the move button
var move_button = document.getElementById("move");

//request ID for animation
var requestID = 0;

//draw a dot and add event listener
var draw_dot = function(x,y){
    //make a red circle
    var d = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"
    );
    d.setAttribute("cx", x);
    d.setAttribute("cy", y);
    d.setAttribute("r", 20);
    d.setAttribute("fill", "red");
    d.setAttribute("stroke", "black");
    d.setAttribute("xVel", 1);
    d.setAttribute("yVel", 1);
    pic.appendChild(d);

    //event listener to change color or move dot
    d.addEventListener('click', function(e){
	//e.preventDefault();
	if (d.getAttribute("fill")=="red"){
	    d.setAttribute("fill", "green");
	}
	else{

	    pic.removeChild(e.target);
	    var x = Math.floor(Math.random() * pic.getAttribute("width"));
	    var y = Math.floor(Math.random() * pic.getAttribute("height"));
	    draw_dot(x,y)
	}
	e.stopPropagation();
    })
}

var clear = function(){
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    window.cancelAnimationFrame(requestID);
}


//draw dot when pic (not dot) is clicked
pic.addEventListener('click', function(e){
    draw_dot(e.offsetX, e.offsetY);
})	

//clear the pic
clear_button.addEventListener('click', clear);


//move the dots when the button is clicked
move_button.addEventListener('click', function(e){
    var animate = function(){
	var dots = pic.children;
	//console.log(dots);
	var i;	
	for (i=0; i < dots.length; i++){
	    var dot = dots[i];
	    var x = parseInt(dot.getAttribute("cx"));
	    var y = parseInt(dot.getAttribute("cy"));
	    var xVel = parseInt(dot.getAttribute("xVel"));
	    var yVel = parseInt(dot.getAttribute("yVel"));
	    if (x - 20 <= 0 || x + 20 >= pic.getAttribute("width")){
		xVel = -xVel;
		dot.setAttribute("xVel", xVel);
	    }
	    if (y - 20 <= 0 || y + 20 >= pic.getAttribute("height")){
		yVel = -yVel;
		dot.setAttribute("yVel", yVel);
	    }
	    dot.setAttribute("cx", x + xVel);
	    dot.setAttribute("cy", y + yVel);
	};
	window.cancelAnimationFrame(requestID);
	requestID = window.requestAnimationFrame(animate);
    }
    animate();
})

