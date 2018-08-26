const canvas = document.querySelector('#draw');
// Defines what the dimensions of the canvas are.
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Defines stroke style and what happens when the line ends or joins another line.
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";