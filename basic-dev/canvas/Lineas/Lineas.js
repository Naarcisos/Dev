// Variables de captura de eventos

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("click_boton");
boton.addEventListener("click", dubujoporclick);

//Variables de lineas

var e = document.getElementById("Trianguo");
var ancho = e.width;
var lienzo = e.getContext ("2d");



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

function dubujoporclick()
{
    var t = parseInt(texto.value);
    var ll= ancho/t;
    var l = 0;
    var lineas = t;
    var yi, xf;
    var s = l;
    var c1 = "#000";
    var c2 = "#FF0";
    
    while(l < lineas)
    {
        yi = ll * l;
        xf = ll * (l +1);
        dibujarLinea(c1 + l, 0, yi, xf, 300);
        console.log("lineas" + 1);
        l = l + 1;
    }
    
    for (l = 0; l < lineas; l++)
    {
        yi = ll * l;
        xf = ll * (l +1);
        dibujarLinea(c2, 300, yi, xf, 0);
        console.log("lineas" + 1);
    }

}