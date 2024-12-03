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
            console.log('Todos los campos son obligatorios');
            return;
        }
        console.log('Si se paso la validacion');
    }

    //Funcion que valida si el objeto que se pasa contiene valores -> Function that validates if the object contains any value
    function validar(obj) {
        return !Object.values(obj).every(input => input !== '');
    }
})();