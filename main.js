// var myVar = setInterval(myTimer, 1000);
var counter = 0;
var myVar = setInterval(myTimer, 1000);
let storlek = 20;
let stor;

function myTimer() {
    if (count > 0) {
        t = ++counter
        document.getElementById("klocka").innerHTML = t;
    }

}


// define variable for ball count paragraph
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function easy() {
    counter = 0;
    stor = 20;
    document.querySelector("h2").style.visibility = "hidden";
    document.querySelector("p").style.color = "transparent";
    document.querySelector("h1").style.color = "transparent";
    document.querySelector(".dropdown").style.visibility = "hidden";
    document.querySelector("#klocka").style.visibility = "unset";
    for (let i = 0; i < 5; i++) {
        const size = random(stor, 30);
        let ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            true,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
        count++;

        para.textContent = 'Bollar kvar: ' + count;


    }
}

function medium() {
    counter = 0;
    stor = 10;
    document.querySelector("h2").style.visibility = "hidden";
    document.querySelector("p").style.color = "transparent";
    document.querySelector("h1").style.color = "transparent";
    document.querySelector(".dropdown").style.visibility = "hidden";
    document.querySelector("#klocka").style.visibility = "unset";
    for (let i = 0; i < 10; i++) {
        const size = random(stor, 20);
        let ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            true,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
        count++;

        para.textContent = 'Bollar kvar: ' + count;
    }
}

function hard() {
    counter = 0;
    stor = 5;
    document.querySelector("h2").style.visibility = "hidden";
    document.querySelector("p").style.color = "transparent";
    document.querySelector("h1").style.color = "transparent";
    document.querySelector(".dropdown").style.visibility = "hidden";
    document.querySelector("#klocka").style.visibility = "unset";
    for (let i = 0; i < 15; i++) {
        const size = random(stor, 20);
        let ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            true,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
        count++;

        para.textContent = 'Bollar kvar: ' + count;
    }
}
//ange hur många bollar det ska vara med.
let bollar = document.getElementById("bollar").value;
let antal = parseInt(bollar);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    //efter

const para = document.querySelector('p');
let count = 0;


function restart() {
    location.reload();
}

// setup canvas

const canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;



function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

// define shape constructor

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

// define Ball constructor, inheriting from Shape

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// define ball draw method

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

};

// define ball update method

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size && balls[j].exists) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
};

// define EvilCircle constructor, inheriting from Shape

function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, 20, 20, exists);

    this.color = 'green';
    this.size = 20;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;


// define EvilCircle draw method


EvilCircle.prototype.draw = function() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 4;
    ctx.rect(this.x, this.y, this.size, 20);
    // ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
};


// define EvilCircle checkBounds method

EvilCircle.prototype.checkBounds = function() {
    if ((this.x + this.size) >= width) {
        this.x -= this.size;
    }

    if ((this.x - this.size) <= 0) {
        this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
        this.y -= this.size;
    }

    if ((this.y - this.size) <= 0) {
        this.y += this.size;
    }
};

// define EvilCircle setControls method
// this.update = function(){
//     var vel = createVector(mouseX,mouseY);
//     vel.sub(this.pos);
//     vel.setMag(3);
//     this.pos.add(mouse);

// }
document.body.addEventListener('keydown', e => {
    keydown = e.key;
});
EvilCircle.prototype.setControls = function() {
    var _this = this;


    window.onkeydown = function(e) {
        if (e.key === "ArrowLeft") { //vänster
            _this.x -= _this.velX * 1.5;
        } else if (e.key === 'ArrowRight') { //höger
            _this.x += _this.velX * 1.5;
        } else if (e.key === 'ArrowUp') { //uppåt
            _this.y -= _this.velY * 1.5;
        } else if (e.key === 'ArrowDown') { //nedåt
            _this.y += _this.velY * 1.5;
        } else if (e.key === "r") { //restart
            location.reload();
        } else if (e.key === "1") {
            for (let i = 0; i < 5; i++) {
                const size = random(10, 20);
                let ball = new Ball(
                    // ball position always drawn at least one ball width
                    // away from the edge of the canvas, to avoid drawing errors
                    random(0 + size, width - size),
                    random(0 + size, height - size),
                    random(-7, 7),
                    random(-7, 7),
                    true,
                    'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                    size
                );
                balls.push(ball);
                count++;

                para.textContent = 'Bollar kvar: ' + count;
            }
        }
    };
};

// define EvilCircle collision detection

EvilCircle.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
                count--;
                this.size -= 1; //gör evil större/mindre
                para.textContent = 'Bollar kvar: ' + count;
            }

            if (count == 0) {
                // document.querySelector("button").style.color = "green";
                document.querySelector("h2").style.visibility = "visible";
                document.querySelector("p").style.color = "green";
                document.querySelector("h1").style.color = "green";
                document.querySelector(".dropdown").style.visibility = "unset";
                // clearInterval(myVar);
                evil.size = 20; //crashar om man inte har det här för att cirkeln blir för liten!



            }

        }
    }
};
// define array to store balls and populate it
const balls = [];
// define loop that keeps drawing the scene constantly

let evil = new EvilCircle(random(0, width), random(0, height), true);
evil.setControls();

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }

    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();

    requestAnimationFrame(loop);
}


loop();