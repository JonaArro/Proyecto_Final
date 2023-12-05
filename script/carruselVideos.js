const videoContainer = document.querySelector('.videoContainer');
const videoSlides = document.querySelectorAll('.videoSlide');
let currentIndex = 0;
let currentIframe;

function showVideo(index) {
    videoSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            currentIframe = slide.querySelector('iframe');
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextVideo() {
    if (currentIframe) {
        // Detener la reproducción del video actual antes de pasar al siguiente
        currentIframe.src = currentIframe.src; // Reemplazar el iframe para detener la reproducción
    }

    currentIndex = (currentIndex + 1) % videoSlides.length;
    showVideo(currentIndex);
}

function prevVideo() {
    if (currentIframe) {
        // Detener la reproducción del video actual antes de retroceder al anterior
        currentIframe.src = currentIframe.src; // Reemplazar el iframe para detener la reproducción
    }

    currentIndex = (currentIndex - 1 + videoSlides.length) % videoSlides.length;
    showVideo(currentIndex);
}

// Mostrar el primer video al cargar la página
showVideo(currentIndex);

// Agregar botones para navegar por el carrusel
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
