const images = [
    './img/fechas01DiciembreTeatroFlores2.jpg',
    './img/fechas02DiciembreStreaming.png',
    './img/fechas03-00DivididosCosquinRock2024.jpg',
    './img/fechas04MarzoSanJuan.png'
];
const texts = [
    'Divididos despide el año con todo en el Teatro Flores. 09/12 - Sabado; 10/12 - Domingo; 16/12 Sabado; 17/12 Domingo',
    'Divididos presenta “Cuerpito Limpio a Brillar, ¡Pogo de Calandrias!”, su primer show streaming. El sábado 19 de diciembre, desde las 21 horas La Aplanadora en un concierto especial al aire libre que podrá verse en Ticketek Live.',
    'Divididos vuelve a Cosquin en donde la grilla tambinen contiene propuestas rockeras, bluseras, de reggae y de otros géneros como cumbia y tango en donde se destacan La Mississippi, Mimi Maura, La Vela Puerca, Los Auténticos Decadentes, Conociendo Rusia, El Bordo, Anita B. Queen, Los Caligaris, Milo J, Sueño de Pescado, Alika, Sara Hebe, Alborosie, Paz Carrara, Caras Extrañas, Dancing Mood, Cruzando el Charco, La Delio Valdez, La Chancha Muda, Julieta Laso.',
    'Divididos visita nuevamente San Juan'
];

const image = document.querySelector('.grid-item-image img');
const text = document.querySelector('.grid-item-text');

let currentIndex = 0;

function nextSlide() {
    image.classList.remove('active');
    text.classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;

    // Determina si estamos en la última imagen para ajustar el índice
    const isLastImage = currentIndex === images.length - 1;
    const nextIndex = isLastImage ? 0 : currentIndex + 1;

    image.classList.add('next');
    text.classList.add('next');

    setTimeout(() => {
        image.src = images[nextIndex];
        text.innerHTML = texts[nextIndex];

        image.classList.remove('next');
        text.classList.remove('next');

        image.classList.add('active');
        text.classList.add('active');
    }, 500);
}

setInterval(nextSlide, 5000);
