var e = document.getElementById("escher");
var lienzo = e.getContext ("2d");

dibujarLinea("Purple", 61.7748, 243.8015, 45.4597, 214.8666);
dibujarLinea("Purple", 45.4597, 214.8666, 133.1024, 55.167);
dibujarLinea("Purple", 133.1024, 55.167, 206.853, 186.8737);
dibujarLinea("Purple", 134.4485, 112.0467, 174.6882, 186.47);

dibujarLinea("Blue", 254.5403, 214.7177,240.2268,244.833);
dibujarLinea("Blue", 240.2268, 244.833, 61.7748, 243.8015);
dibujarLinea("Blue", 61.7748, 243.8015, 134.4485, 112.0467);
dibujarLinea("Blue", 110.7634, 214.7177, 150.801, 142.2907);

dibujarLinea("Red", 133.1024, 55.167, 166.3428, 55.167);
dibujarLinea("Red", 166.3428, 55.167, 254.5403, 214.7177);
dibujarLinea("Red", 254.5403, 214.7177, 110.7634, 214.7177);
dibujarLinea("Red", 206.853, 186.7616, 126.1563, 186.7616);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath;

}