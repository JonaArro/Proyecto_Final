const images = [
  "./img/fechas01DiciembreTeatroFlores2.jpg",
  "./img/fechas02DiciembreStreaming.png",
  "./img/fechas03-00DivididosCosquinRock2024.jpg",
  "./img/fechas04MarzoSanJuan.png",
];
const texts = [
  "Divididos despide el año con todo en el Teatro Flores.<br> 09/12 - Sabado<br> 10/12 - Domingo<br> 16/12 - Sabado<br> 17/12 - Domingo<br><br>Av. Rivadavia 7806, C1407 CABA<br>Puerta: 19:30Hs<br>Show: 21:00hs",
  "Divididos presenta “Cuerpito Limpio a Brillar, ¡Pogo de Calandrias!”, su primer show streaming. El sábado 19 de diciembre, desde las 21 horas La Aplanadora en un concierto especial al aire libre que podrá verse en Ticketek Live.",
  "Divididos vuelve a Cosquin en donde la grilla tambinen contiene propuestas rockeras, bluseras, de reggae y de otros géneros como cumbia y tango en donde se destacan La Mississippi, Mimi Maura, La Vela Puerca y Los Auténticos Decadentes.",
  "Divididos visita nuevamente San Juan esta vez en el Estadio Aldo Cantoni<br>23/03 - Sabado<br><br>C. San Luis Oeste 1300, J5400 San Juan<br>Puerta: 18:30Hs<br>Show: 21:00hs",
];

const image = document.querySelector(".grid-item-image img");
const text = document.querySelector(".grid-item-text");

let currentIndex = 0;

function nextSlide() {
  image.classList.remove("active");
  text.classList.remove("active");

  currentIndex = (currentIndex + 1) % images.length;

  // Determina si estamos en la última imagen para ajustar el índice
  const isLastImage = currentIndex === images.length - 1;
  const nextIndex = isLastImage ? 0 : currentIndex + 1;

  image.classList.add("next");
  text.classList.add("next");

  setTimeout(() => {
    image.src = images[nextIndex];
    text.innerHTML = texts[nextIndex];

    image.classList.remove("next");
    text.classList.remove("next");

    image.classList.add("active");
    text.classList.add("active");
  }, 500);
}

setInterval(nextSlide, 5000);
