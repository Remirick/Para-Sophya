// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No puedo evitarlo contigo", time: 16 },
  { text: "Pronunciartu nombre se siente tan bien", time: 18 },
  { text: "Caminar bajo un cielo estrellado", time: 21 },
  { text: "No es tan hermoso como sentir tu mirada", time: 24 },
  { text: "Como es que eres tan perfecta?", time: 29 },
  { text: "Si pudieras vivir mi vida", time: 32 },
  { text: "Entenderias el cambio que haces en mi", time: 35 },
  { text: "Holaaaaaa", time: 40 },
  { text: "Te extraño mucho :c", time: 43 },
  { text: "quieres ser mi I love you?", time: 46 },
  { text: "si dices que no tu telefono explotara", time: 49 },
  { text: "Muajajaja", time: 51 },
  { text: "Naaa es un chite, no se puede hacer eso", time: 54 },
  { text: "o si se puede?", time: 59 },
  { text: "bueno luego lo averiguo", time: 61 },
  { text: "ehm no se que mas decir", time: 64 },
  { text: "Vamos por una hamburguesa?", time: 67 },
  { text: "o bailamos ahora que valla?", time: 70 },
  { text: "etooooo", time: 74 },
  { text: "La santa muerte esta en mi espalda", time: 76 },
  { text: "cargando el muro entre comillas", time: 78 },
  { text: "viva tlalpan", time: 80 },
  { text: "Cabron esta es mi tierra y a mi nadie me respeta", time: 82 },
  { text: "asjss", time: 84 },
  { text: "perate", time: 86 },
  { text: "JAJAJA espero que te alla gustado", time: 89 },
  { text: "Te amo y te extraño mucho .", time: 94},
  { text: "Mi Hermosa Karen Sophya .", time: 97 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);