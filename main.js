canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Pink";
width_of_line = 5;
    var last_position_of_touch_x,last_position_of_touch_y;
    var width = screen.width;
    var new_width = screen.width - 70;
    var new_height = screen.height - 300;
    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        console.log("My_Touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("Width_of_line").value;

        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("My Touchmove");
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_touch_x + "y = " + last_position_of_touch_y);
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    }