const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
const width = 1000;
const lineThickness = 20;
let functionString = "";

document.querySelector("#function").addEventListener("keyup", function() {
    functionString = document.querySelector("#function").value;
})

document.querySelector("#draw").addEventListener("click", function(event) {
    event.preventDefault();
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawCartesianCoordinteSystem();
    drawGraph();
})

document.querySelector("#linear").addEventListener("click", function(event) {
    event.preventDefault();
    let a = document.querySelector("#x-ex").value;
    let b = document.querySelector("#y-ex").value;
    let c = document.querySelector("#x-ey").value;
    let d = document.querySelector("#y-ey").value;

    console.log(a, b, c, d)

    for(let i = 0.25; i < width; i+= 0.25) {
        let x = i-500;
        let y = 500 - (eval(functionString));
        applyLinearTransformation(x, y, a, b, c, d);
    }
})


function drawCartesianCoordinteSystem() {
    ctx.moveTo(width, 0);
    ctx.lineTo(width, width);
    ctx.stroke();
    ctx.moveTo(0, width/2);
    ctx.lineTo(width*2, width/2);
    ctx.stroke();

}

function drawGraph() {
    for(let i = 0.25; i < width; i+= 0.5) {
        let x = i-500;
        let y = 500 - (eval(functionString));
        console.log(x, y);
        ctx.moveTo((x+500)*2    , y);
        
        x = (i+0.25)-500;
        y = 500 - (eval(functionString));
        console.log(x, y);
        ctx.lineTo((x+500)*2, y);

        ctx.stroke();
    }
}

function applyLinearTransformation(startX, startY, a, b, c, d) {

    let transformedX = startX*a + startY*c;
    let transformedY = startX*b + startY*d;

    ctx.moveTo((transformedX+500)*2, transformedY);
    ctx.lineTo((transformedX+500)*2, transformedY-1.5);
    ctx.stroke();

    
}


drawCartesianCoordinteSystem();