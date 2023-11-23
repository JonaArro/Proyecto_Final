const videoContainer = document.querySelector('.videoContainer');
const videoSlides = document.querySelectorAll('.videoSlide');
let currentIndex = 0;

function showVideo(index) {
    videoSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextVideo() {
    currentIndex = (currentIndex + 1) % videoSlides.length;
    showVideo(currentIndex);
}

function prevVideo() {
    currentIndex = (currentIndex - 1 + videoSlides.length) % videoSlides.length;
    showVideo(currentIndex);
}

// muestro el primer video al cargar la página
showVideo(currentIndex);

// agrego botones para navegar por el carrusel
const prevButton = document.createElement('button');
prevButton.textContent = 'Anterior';
prevButton.classList.add('botonCarruselAnterior');
prevButton.addEventListener('click', prevVideo);

const nextButton = document.createElement('button');
nextButton.textContent = 'Siguiente';
nextButton.classList.add('botonCarruselSiguiente');
nextButton.addEventListener('click', nextVideo);

videoContainer.appendChild(prevButton);
videoContainer.appendChild(nextButton);