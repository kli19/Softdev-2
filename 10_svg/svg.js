/*
  Karen Li
  SoftDev2 pd6
  K10 -- animate
  2019-03-13
*/

//get the pic
var pic = document.getElementById("vimage")

//get the clear button
var clear_button = document.getElementById("clear");

//instantiate x and y cor
var prev_x = 0;
var prev_y = 0;

//draw dot when pic is clicked
pic.addEventListener('click', function(e){
    var d = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"
    );
    //draw dot
    d.setAttribute("cx", e.offsetX);
    d.setAttribute("cy", e.offsetY);
    d.setAttribute("r", 20);
    d.setAttribute("fill", "red");
    d.setAttribute("stroke", "black");
    pic.appendChild(d);

    d.addEventListener('click', function(f){
	//e.preventDefault()
	if (d.getAttribute("fill")=="red"){
	    d.setAttribute("fill", "green")
	}
    })
})


//clear the pic
clear_button.addEventListener('click', function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
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
