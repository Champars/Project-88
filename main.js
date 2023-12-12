var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;
golf = "";
ball = "";


block_image_width = 50;
block_image_height = 50;

function load_img() {
    // write code to Upload golf image on the canvas
    fabric.Image.fromURL("golf-h.png", function(a) {
        golf = a;
        golf.scaleToWidth(50);
        golf.scaleToHeight(50);
        golf.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(golf);
    })
    new_image();
}

function new_image() {
    fabric.Image.fromURL("ball.png", function(a) {
            ball = a;
            ball.scaleToWidth(block_image_width);
            ball.scaleToHeight(block_image_height);
            ball.set({
                top: ball_y,
                left: ball_x
            });
            canvas.add(ball);
        })
        // write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    /* Check the coordinates of the ball and hole images to finish the game. 
    And id coordinates matches them remove ball image, 
    display "GAME OVER!!!" 
    and make canvas border 'red'. */
    if (ball_x == hole_x && ball_y == hole_y) {
        canvas.remove(ball);
        document.getElementById("myCanvas").style.borderColor = "red";
        document.getElementById("hd3").innerHTML = "You Won";
    } else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }
}

function up() {
    // Write a code to move ball upward.
    if (ball_y >= 10) {
        ball_y = ball_y - 5;
        canvas.remove(ball);
        new_image();
    }
}

function down() {
    // Write a code to move ball downward.
    if (ball_y <= 495) {
        ball_y = ball_y + 5;
        canvas.remove(ball);
        new_image();
    }
}

function left() {
    if (ball_x >= 5) {
        // Write a code to move ball left side.
        ball_x = ball_x - 5;
        canvas.remove(ball);
        new_image();
    }
}

function right() {
    if (ball_x <= 1050) {
        // Write a code to move ball right side.
        ball_x = ball_x + 5;
        canvas.remove(ball);
        new_image();
    }
}