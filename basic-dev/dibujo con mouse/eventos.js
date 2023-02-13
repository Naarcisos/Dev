var cuadrodedibujo = document.getElementById("pa'dibujar");
var pantalla = cuadrodedibujo.getContext("2d");
var pX;
var pY;

var movimiento = {
    PX: Event.pageX,
    PY: Event.pageY,
  
  }


function mousemove(event){
    console.log("pageX: ",event.pageX, 
    "pageY: ", event.pageY,
    "clientX: ", event.clientX, 
    "clientY: ", event.clientY)
}

window.addEventListener('mousemove', mousemove);

document.write("la posición en x es " + movimiento.PX + " y la Pocisión de Y es " + movimiento.PY);


//Las funciones se ejecutan de primero sin importar el lugar donde estén ubicadas 

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath;

}