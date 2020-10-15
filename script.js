const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY =0;

//* function called whenever mouse is moved on canvas
function draw(e) {
    if(!isDrawing) return; //stop the function from running when user is not moused down
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
