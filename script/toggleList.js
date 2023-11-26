document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('integrantesDropdown');
    var integrantes = document.querySelectorAll('.integrante');

    function mostrarIntegranteSeleccionado() {
        var selectedIntegrante = dropdown.value;

        integrantes.forEach(function (integrante) {
            var integranteId = integrante.id;

            if (integranteId === selectedIntegrante) {
                integrante.classList.add('active');
            } else {
                integrante.classList.remove('active');
            }
        });
    }

    dropdown.addEventListener('change', mostrarIntegranteSeleccionado);

    // Mostrar el integrante seleccionado al cargar la página
    mostrarIntegranteSeleccionado();

    // Verificar el tamaño de la pantalla en cambios
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 625) {
            mostrarIntegranteSeleccionado();
        } else {
            integrantes.forEach(function (integrante) {
                integrante.classList.remove('active');
            });
        }
    });
});
