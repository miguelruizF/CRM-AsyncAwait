import { mostrarAlerta, validar } from "./funciones.js";
import { nuevoCliente } from "./API.js";

/* Funcion IIFE: Funciones que se ejecutan inmediatamente(Funcion autoejecutable)
Se compone por dos partes: 
1.- Una funcion anonima que impide accesar variables fuera del scope asi como contaminar el alcance global
2.- Crea la expresion de funcion () cuya ejecucion es inmediata.
*/
(function(){
    const formulario = document.querySelector('#formulario'); 

    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();
        //Leer los inputs
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono =  document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        // console.log('Si se paso la validacion');
        nuevoCliente(cliente);
    }
})();