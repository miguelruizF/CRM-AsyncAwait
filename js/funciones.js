export function mostrarAlerta(mensaje) {
    const alerta =  document.querySelector('.bg-red-100');

    //Si NO existe la clase de la alerta, se crea la alerta -> If the alert doesn't exist, the alert is created
    if(!alerta){
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        //La alerta se añade al formulario -> The alert is added to the form
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        //Despues de 3 segundos, se elimina la alerta -> After 3 seconds, the alert is removed.
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

//Funcion que valida si el objeto que se pasa contiene valores -> Function that validates if the object contains any value
export function validar(obj) {
    return !Object.values(obj).every(input => input !== '');
}