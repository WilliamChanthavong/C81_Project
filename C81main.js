canvas = document.getElementById("myCanvas");
//color = "Red";

ctx = canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(200, 200, 38.5, 0, 2 * Math.PI);
ctx.stroke();

//---------------------------//

ctx = canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "Orange";
ctx.lineWidth = 5;
ctx.arc(250, 250, 38.5, 0, 2 * Math.PI);
ctx.stroke();

//---------------------------//

ctx = canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(300, 200, 38.5, 0, 2 * Math.PI);
ctx.stroke();

//---------------------------//

ctx = canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(350, 250, 38.5, 0, 2 * Math.PI);
ctx.stroke();

//---------------------------//

ctx = canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "Red";
ctx.lineWidth = 5;
ctx.arc(400, 200, 38.5, 0, 2 * Math.PI);
ctx.stroke();

//---------------------------//


canvas.addEventListener("mousedown", my_mousedown);

mouse_x = e.clientX;
mouse_y = e.clientY;

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " , Y = " + mouse_y)
    circle(mouse_x , mouse_y)
}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clears()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}