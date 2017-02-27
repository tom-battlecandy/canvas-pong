var ctxWidth = 900;
var ctxHeight = 500;
var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");

var player = function()
{
    this.x = 25;
    this.y = 25;
    this.vx = 5;
    this.vy = 5;
    this.width = 40;
    this.speed = 15;

    this.update = function()
    {
        this.x += this.vx;
        this.y += this.vy;

        var off = this.width / 2;

        if (this.x - off < 0 || this.x > ctxWidth - off)
        {
            this.vx = -this.vx;
        }
        if (this.y - off < 0 || this.y > ctxHeight - off)
        {
            this.vy = -this.vy;
        }
    }

    this.draw = function()
    {
        drawCircle(this.x, this.y, this.width / 2);
    }
}

var p1 = new player();

setInterval(update, 1000 / 60);

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    
    switch (charStr)
    {
        case "w": p1.y -= p1.speed; break;
        case "s": p1.y += p1.speed; break;
        case "a": p1.x -= p1.speed; break;
        case "d": p1.x += p1.speed; break;
    }
};

function update()
{
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, ctxWidth, ctxHeight);

    p1.update();

    p1.draw();
}

function drawCircle(x, y, radius)
{
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}