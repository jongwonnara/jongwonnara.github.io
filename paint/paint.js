var canvas;
var ctx;
var flag = false;

var ready = function(){
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 canvas.onmousedown = drawStart;
 canvas.onmousemove = drawing;
 window.onmouseup = drawEnd;
}

var w1 = function(){
 ctx.lineWidth = 10;
}
var w5 = function(){
 ctx.lineWidth = 15;
}
var w15 = function(){
 ctx.lineWidth = 20;
}
var w20 = function(){
    ctx.lineWidth = 25;
   }
var w30 = function(){
    ctx.lineWidth = 30;
   }


var red = function(){
 ctx.strokeStyle = '#ff0000';
}
var orange = function(){
    ctx.strokeStyle = '#ff7f00';
   }
var yellow = function(){
    ctx.strokeStyle = '#ffff00';
   }
var green = function(){
    ctx.strokeStyle = '#008000';
   }
var gold = function(){
    ctx.strokeStyle = '#ffd700';
   }
var navajowhite = function(){
    ctx.strokeStyle = '#ffdead';
   }
var hotpink = function(){
    ctx.strokeStyle = '#ff69b4';
   }
var brown = function(){
    ctx.strokeStyle = '#835c3b';
   }
var skyblue = function(){
    ctx.strokeStyle = '#add8e6';
   }
var gray = function(){
    ctx.strokeStyle = '#808080';
   }
var black = function(){
    ctx.strokeStyle = '#000000';
   }
var white = function(){
    ctx.strokeStyle = '#ffffff';
   }

var drawStart = function(event){
 ctx.beginPath();
 var xpos = event.target.offsetLeft;
 var ypos = event.target.offsetTop;
 ctx.moveTo(event.clientX-xpos, event.clientY-ypos);
 flag = true;
}
var drawing = function(event){
 if(flag) {
 var xpos = event.target.offsetLeft;
 var ypos = event.target.offsetTop;
 ctx.lineCap = 'round'
 ctx.lineTo(event.clientX-xpos, event.clientY-ypos);
 ctx.stroke();
 }
}
var drawEnd = function(event){
 flag = false;
}
var save = function(){
 window.open(canvas.toDataURL());
}
var erase = function(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
}

