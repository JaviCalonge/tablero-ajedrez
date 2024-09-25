const btn = document.getElementById("btn")
    const tamaño = document.getElementById("tamaño")
    const board = document.getElementById("board")

    function ajedrez() {

      board.innerHTML = ""

      if (tamaño.value > 25) {
        board.innerHTML = "<h3>Elige como máximo 25 de tamaño</h3>"
        return
      }

      // Obtenemos el ancho disponible del contenedor
  const maxWidth = board.offsetWidth;
  
  // Calculamos el tamaño de las celdas en función del tamaño del tablero y el ancho disponible
  const cellSize = Math.floor(maxWidth / tamaño.value);

  // Definir las dimensiones del grid en base al tamaño ingresado
  board.style.gridTemplateColumns = `repeat(${tamaño.value}, ${cellSize}px)`;
  board.style.gridTemplateRows = `repeat(${tamaño.value}, ${cellSize}px)`;

  // Calcular el tamaño total del tablero
  const totalWidth = tamaño.value * cellSize;

  // Centrar el tablero ajustando los márgenes
  board.style.width = `${totalWidth}px`;
  board.style.height = `${totalWidth}px`;
  board.style.margin = "auto"; // Esto centrará el tablero

  for (let y = 0; y < tamaño.value; y++) {
    for (let x = 0; x < tamaño.value; x++) {
      if ((x + y) % 2 == 0) {
        board.innerHTML += `<div class="cuadro-blanco"></div>`;
      } else {
        board.innerHTML += `<div class="cuadro-negro"></div>`;
      }
    }
  }
}

    //   // Define las dimensiones del grid en base al tamaño ingresado
    //   board.style.gridTemplateColumns = `repeat(${tamaño.value}, 100px)`;
    //   board.style.gridTemplateRows = `repeat(${tamaño.value}, 100px)`;

    //   for (let y = 0; y < tamaño.value; y++) {
    //     for (let x = 0; x < tamaño.value; x++) {
    //       if ((x + y) % 2 == 0) {
    //         board.innerHTML += `<div class="cuadro-blanco"></div>`
    //       } else {
    //         board.innerHTML += `<div class="cuadro-negro"></div>`
    //       }
    //     }
    //   }
    // }

    btn.addEventListener("click", ajedrez)