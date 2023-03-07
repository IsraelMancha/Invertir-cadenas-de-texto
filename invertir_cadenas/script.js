function inverso(palabra) {
    let palabraInversa = "";
  
    for (let i = palabra.length - 1; i >= 0; i--) {
      palabraInversa += palabra[i];
    }
    return palabraInversa;
  }
  
function mostrarInverso() {
      const inputPalabra = document.getElementById("txt_palabra");
      const palabra = inputPalabra.value;
      const palabraInversa = inverso(palabra);
      document.getElementById("demo").innerHTML = palabraInversa;
  }
