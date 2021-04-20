canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_pos_x,last_pos_y;
var mouse_event="empty";
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouse_event="mouseDown";
console.log(mouse_event);
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouse_event="mouseUp";
console.log(mouse_event);
div.style.background="red";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouse_event="mouseLeave";
console.log(mouse_event);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
mouse_event="mouseMove";
console.log(mouse_event);
cur_pos_mouse_x= e.clientX-canvas.offsetLeft;
cur_pos_mouse_y= e.clientY-canvas.offsetTop;
if(mouse_event=="mouseDown")
{ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of x and y coordinates=");
console.log("x="+last_pos_x+"y="+last_pos_y);
ctx.moveTo(last_pos_x,last_pos_y);
console.log("current position of x and y coordinates=");
console.log("x="+cur_pos_mouse_x+"y="+cur_pos_mouse_y);
ctx.lineTo(cur_pos_mouse_x,cur_pos_mouse_y);
ctx.stroke();
}
last_pos_x=cur_pos_mouse_x;
last_pos_y=cur_pos_mouse_y;
}