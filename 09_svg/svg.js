/*
  Karen Li
  SoftDev2 pd6
  K09 -- Connect the Dots
  2019-03-13
*/

//get the pic
var pic = document.getElementById("vimage")

//get the clear button
var clear_button = document.getElementById("clear");

//set variable for whether the image is clear to true
var is_clear = true;

//instantiate x and y cor
var prev_x = 0;
var prev_y = 0;

//connect dots when pic is clicked
pic.addEventListener('click', function(e){
    var d = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"
    );
    //draw dot
    d.setAttribute("cx", e.offsetX);
    d.setAttribute("cy", e.offsetY);
    d.setAttribute("r", "10");
    d.setAttribute("fill", "red");
    d.setAttribute("stroke", "red");
    pic.appendChild(d);

    //draw line between dots
    if(!is_clear){
	var l = document.createElementNS(
	    "http://www.w3.org/2000/svg", "line"
	);
	l.setAttribute("x1", prev_x);
	l.setAttribute("y1", prev_y);
	l.setAttribute("x2", e.offsetX);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("stroke-width", 2);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);	
    }
    else{
	is_clear = false;
    }
    prev_x = e.offsetX;
    prev_y = e.offsetY
})


//clear the pic
clear_button.addEventListener('click', function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    is_clear = true;
})


/* //classwork to reference
var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx", 0);
c.setAttribute("cy", 0);
c.setAttribute("r", 100);
c.setAttribute("fill", "red")
c.setAttribute("stroke", "black")

pic.appendChild(c);
*/
