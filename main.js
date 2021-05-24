var mouseEvent="empty";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var lastx,lasty;
var colour="red"
width_of_line = 2;
//*code of touch start
var Last_position_touch_x,Last_position_touch_y;

var width=screen.width;
if(width<992){
    c.width=width-70;
    c.height=screen.height-300;
}
c.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    Last_position_touch_x=e.touches[0].clientX-c.offsetLeft;
    Last_position_touch_y=e.touches[0].clientY-c.offsetTop
} 
c.addEventListener("touchmove" , My_touchmove);
function My_touchmove(e){
var current_position_x = e.touches[0].clientX-c.offsetLeft;
var current_position_y = e.touches[0].clientY-c.offsetTop;
colour=document.getElementById("myTextInput").value;
width_of_line=document.getElementById("my_width_TextInput").value;
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width_of_line;
ctx.moveTo(Last_position_touch_x,Last_position_touch_y);
ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();

Last_position_touch_x=current_position_x;
Last_position_touch_y=current_position_y;
}
//*code of touch end*//



c.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
c.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
c.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var currentX=e.clientX-c.offsetLeft;
    var currentY=e.clientY-c.offsetTop;
    colour=document.getElementById("myTextInput").value;
    width_of_line=document.getElementById("my_width_TextInput").value;
    if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width_of_line;
ctx.moveTo(lastx,lasty);
ctx.lineTo(currentX,currentY);
ctx.stroke();


    }
    lastx=currentX;
lasty=currentY;

}
c.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clear_Canvas(){
    console.log("sghdjhfd");
    ctx.clearRect(0,0,c.width,c.height);
}