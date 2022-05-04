var figura = prompt(
  "Seleccione una figura para calcular su area y perimetro" +
    "\n" +
    "  1. Cuadrado" +
    "\n" +
    "  2. Circulo" +
    "\n" +
    "  3. Rectangulo" +
    "\n" +
    "  4. Triangulo"
);

switch (figura) {
  case "1":
    var lado = prompt("Ingrese el lado del cuadrado");
    var area = lado * lado;
    var perimetro = lado * 4;

    document.getElementById("#Label1").innerHTML =
      "El area del cuadrado es: " +
      area +
      "\n" +
      "El perimetro del cuadrado es: " +
      perimetro;

    // alert(
    //   "El area del cuadrado es: " +
    //     area +
    //     "\n" +
    //     "El perimetro del cuadrado es: " +
    //     perimetro
    // );
    break;
  case "2":
    var radio = parseInt(prompt("Ingrese el radio del circulo"));
    var area = Math.PI * radio * radio;
    var perimetro = 2 * Math.PI * radio;
    document.getElementById("#Label1").innerHTML =
      "El area del circulo es: " +
      area +
      "\n" +
      "El perimetro del circulo es: " +
      perimetro;

    // alert(
    //   "El area del circulo es: " +
    //     area +
    //     "\n" +
    //     "El perimetro del circulo es: " +
    //     perimetro
    // );
    break;
  case "3":
    var base = parseInt(prompt("Ingrese la base del rectangulo"));
    var altura = parseInt(prompt("Ingrese la altura del rectangulo"));
    var area = base * altura;
    var perimetro = 2 * (base + altura);
    document.getElementById("#Label1").innerHTML =
      "El area del rectangulo es: " +
      area +
      "\n" +
      "El perimetro del rectangulo es: " +
      perimetro;

    // alert(
    //   "El area del rectangulo es: " +
    //     area +
    //     "\n" +
    //     "El perimetro del rectangulo es: " +
    //     perimetro
    // );
    break;
  case "4":
    var base = parseInt(prompt("Ingrese la base del triangulo"));
    var altura = parseInt(prompt("Ingrese la altura del triangulo"));
    var area = (base * altura) / 2;
    var lados = base * 2;
    // var perimetro = base + altura + Math.sqrt(base * base + altura * altura);
    var perimetro = lados + altura;
    document.getElementById("#Label1").innerHTML =
      "El area del triangulo es: " +
      area +
      "\n" +
      "El perimetro del triangulo es: " +
      perimetro;

    // alert(
    //   "El area del triangulo es: " +
    //     area +
    //     "\n" +
    //     "El perimetro del triangulo es: " +
    //     perimetro
    // );
    break;
  default:
    alert("Opcion invalida");
    break;
}
