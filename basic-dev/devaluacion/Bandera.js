var e = document.getElementById("Colombia");
var lienzo = e.getContext ("2d");
var am = "RGB("254", "197", "9") ";
var az = '#011a75';
var ro = '#bb001f';
var amarillo;
var azul;
var rojo;


while(l < lineas)
{
    xi = 0;
    yi = 0;
    xf = 0;
    yf = 300;
    dibujarLinea(ro , xi, yi, xf, yf);
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
lienzo.beginPath();
lienzo.strokeStyle();
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.lineWidth();
lienzo.closePath();

}