const boton = document.getElementById("openInvitation");

const portada = document.querySelector(".hero");

const invitacion = document.querySelector(".invitation");

boton.addEventListener("click", function () {

    portada.classList.add("fade-out");

    setTimeout(function () {

        portada.style.display = "none";

        invitacion.classList.add("show");

    }, 1000);

});