/*
  Karen Li
  SoftDev2 pd6
  K10 -- Ask Circles [Change || Die]
  2019-03-13
*/

//get the pic
var pic = document.getElementById("vimage")

//get the clear button
var clear_button = document.getElementById("clear");

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
    })
}


//draw dot when pic (not dot) is clicked
pic.addEventListener('click', function(e){
    //e.preventDefault();
    if (e.target.getAttribute("id") == "vimage"){
        draw_dot(e.offsetX, e.offsetY);
    }
})	

//clear the pic
clear_button.addEventListener('click', function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
})

