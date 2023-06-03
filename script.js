window.onload = function() {
  var originalTitle = document.querySelector('h1').innerText; // Obtener el texto original del elemento h1
  var currentIndex = 0; 




function mostrarModal() {
    var modal = document.getElementById('modal');
    var imagen = document.querySelector('#modal img');

    // Mostrar la ventana modal
    modal.style.display = 'block';

    // Cerrar la ventana modal después de 5 segundos
    setTimeout(function() {
      modal.style.display = 'none';
      imagen.style.display = 'none';
    }, 5000);
  }
mostrarModal();
}
