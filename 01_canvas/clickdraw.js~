var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//ctx.fillStyle = "#ff0000";
//ctx.fillRect(50,50,100,200);

var clear_button = document.getElementById("clear");
clear_button.addEventListener('click', function(){
    ctx.clearRect(0,0,c.width,c.height);
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

var canvas_origin = c.getBoundingClientRect();
var canvas_x = canvas_origin.x;
var canvas_y = canvas_origin.y;

c.addEventListener('click', function(e){
    var x = e.pageX - canvas_x;
    var y = e.pageY - canvas_y;
    if(rectangle_mode){
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x,y,50,50);
    }
    else{
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.arc(x,y,3,0,Math.PI*2);
	ctx.fill()
    }
});

//fillStyle()
//strokeStyle()
//clearRect()
//fillText()
