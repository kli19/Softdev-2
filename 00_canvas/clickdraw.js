var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.fillRect(50,50,100,200);

var clear_button = document.getElementById("clear");
clear_button.addEventListener('click', function(){
    ctx.clearRect(0,0,c.width,c.height);
});
//fillStyle()
//strokeStyle()
//clearRect()
//fillText()
