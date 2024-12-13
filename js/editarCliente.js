import { editarCliente, obtenerCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function() {
    //campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput =  document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");
    
    document.addEventListener('DOMContentLoaded', async () => {
        //Obtener el id del cliente a editar -> Get customer id to edit
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        
        //Bloqueo del codigo hasta que se cumpla la consulta.
        const cliente =  await obtenerCliente(idCliente);
        // console.log(cliente);

        mostrarCliente(cliente);

        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    function mostrarCliente(cliente) {
        const {nombre, empresa, email, telefono, id} = cliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Reescribe el objeto
        editarCliente(cliente);
    }
})();