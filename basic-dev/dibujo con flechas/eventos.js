//En este código estámos capturando los valores de las teclas por medio de 
// document.addEventListener("keydown", dibujarTeclado);

// Capturamos el evento con console.log(evento);
// Encribimos "Tecla oprimida" con cualquier tecla por medio de console.log("tecla oprimida");


var flechas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39 

}

console.log(flechas); 
// "keyup" activa la función en el momento que la tecla se suelta
document.addEventListener("keyup", dibujarTeclado);
var cuadrodedibujo = document.getElementById("1");
var pantalla = cuadrodedibujo.getContext("2d");
var x = 150;
var y = 150;


dibujarLinea("red",149, 149, 151, 151, pantalla);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath;

}

function dibujarTeclado(evento){
//   if(evento.keyCode == flechas.DOWN){
  
//   console.log("Abajo");
//   }
//   if(evento.keyCode == flechas.RIGHT){
  
//     console.log("derecha");
//     }

//     if(evento.keyCode){
  
//       console.log("otra");
//       }
  var colorcito = "blue";
  var movimiento = 10;  
  switch(evento.keyCode){
    case flechas.UP:
        dibujarLinea(colorcito,x, y, x, y - movimiento, pantalla);
        y = y - movimiento;
        break; 
    case flechas.DOWN:
        dibujarLinea(colorcito,x, y, x, y + movimiento, pantalla);
        y = y + movimiento;
        break;
    case flechas.LEFT:
        dibujarLinea(colorcito,x, y, x  - movimiento, y, pantalla);
        x = x - movimiento;
        break;
    case flechas.RIGHT:
        dibujarLinea(colorcito,x, y, x  + movimiento, y, pantalla);
        x = x + movimiento;
        break;
    default:
        console.log("Inexistente");
        break;
}
}
