document.getElementById('enviarMensaje').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').innerHTML;

    if (nombre.trim() !== '' && email.trim() !== '' && mensaje.trim() !== '') {
        document.getElementById('mensajeConfirmacion').style.display = 'block';
    } else {
        alert("Por favor, complete todos los campos antes de enviar el mensaje.");
    }
});