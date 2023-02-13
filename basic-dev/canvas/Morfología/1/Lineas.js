var e = document.getElementById("M1");
var lienzo = e.getContext ("2d");
var q = new Date();
var w = q.getSeconds();
var e = q.getMilliseconds();
var l = 0;
var k = 0;
var j = 0;
var h = 0;
var g = 0;
var f = 0;
var x = w * 10;
var lineas = 800;
var yi, xi, xf, yf;
var color;
var c1 = 3 * w;
var c2 = 13 + e;
var c3 = e;


while(j < lineas)
{
    xi = x;
    yi = x * e;
    xf = j;
    yf = 800;
    dibujarLinea(c2, xi, yi, xf, yf);
    console.log("lineas" + 1);
    j = j + (j + 1);

}

while(h < lineas)
{
    xi = x;
    yi = x ;
    xf = 800;
    yf = h;
    dibujarLinea(c2, xi, yi, xf, yf);
    console.log("lineas" + 1);
    h = h + (h + 1);
}
while(g < lineas)
{
    xi = x;
    yi = x;
    xf = 0;
    yf = g;
    dibujarLinea(c2, xi, yi, xf, yf);
    console.log("lineas" + 1);
    g = g + (g + w);
}
while(f < lineas)
{
    xi = x;
    yi = x;
    xf = f;
    yf = 0;
    dibujarLinea(c2, xi, yi, xf, yf);
    console.log("lineas" + 1);
    f = f + (f + 1);
}

// while(l < lineas)
// {
//     xi = l;
//     yi = 0;
//     xf = l;
//     yf = 300;
//     dibujarLinea(c1 + l, xi, yi, xf, yf);
//     console.log("lineas" + 1);
//     l = l + (l + 1);
// }

// while(k < lineas)
// {
//     xi = 0;
//     yi = k;
//     xf = 300;
//     yf = k;
//     dibujarLinea(c1 + l, xi, yi, xf, yf);
//     console.log("lineas" + 1);
//     k = k + (k + 1);
// }

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
lienzo.beginPath();
lienzo.strokeStyle = "RGB("+c1+", "+c2+", "+c3+") ";
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.lineWidth=3
lienzo.closePath;

}