function signoZodiacal() {
  var mes = prompt("Ingrese un mes");
  var dia = prompt("Ingrese un dia");

  // var dia = document.getElementById("dia");
  // var mes = document.getElementById("mes");

  switch (mes) {
    case "1":
      if (dia <= 20) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Capricornio</span>`;
        // alert("Capricornio");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Acuario</span>`;
        // alert("Acuario");
      }
      break;
    case "2":
      if (dia <= 19) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Acuario</span>`;
        // alert("Acuario");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Piscis</span>`;
        // alert("Piscis");
      }
      break;
    case "3":
      if (dia <= 20) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Piscis</span>`;
        // alert("Piscis");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Aries</span>`;
        // alert("Aries");
      }
      break;
    case "4":
      if (dia <= 20) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Aries</span>`;
        // alert("Aries");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Tauro</span>`;
        // alert("Tauro");
      }
      break;
    case "5":
      if (dia <= 21) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Tauro</span>`;
        // alert("Tauro");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Géminis</span>`;
        // alert("Géminis");
      }
      break;
    case "6":
      if (dia <= 21) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Géminis</span>`;
        // alert("Géminis");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Cáncer</span>`;
        // alert("Cáncer");
      }
      break;
    case "7":
      if (dia <= 22) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Cáncer</span>`;
        // alert("Cáncer");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Leo</span>`;
        // alert("Leo");
      }
      break;
    case "8":
      if (dia <= 22) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Leo</span>`;
        // alert("Leo");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Virgo</span>`;

        // alert("Virgo");
      }
      break;
    case "9":
      if (dia <= 22) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Virgo</span>`;
        // alert("Virgo");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Libra</span>`;
        alert("Libra");
      }
      break;
    case "10":
      if (dia <= 22) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Libra</span>`;
        // alert("Libra");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Escorpio</span>`;
        // alert("Escorpio");
      }
      break;
    case "11":
      if (dia <= 21) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Escorpio</span>`;
        // alert("Escorpio");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Sagitario</span>`;
        // alert("Sagitario");
      }
      break;
    case "12":
      if (dia <= 21) {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Sagitario</span>`;
        // alert("Sagitario");
      } else {
        document.getElementById("#Label1").innerHTML =
          "Tu signo zodiacal es:  " +
          `<span class='text-success font-weight-bold'>Capricornio</span>`;
        // alert("Capricornio");
      }
      break;
  }
}

signoZodiacal();
