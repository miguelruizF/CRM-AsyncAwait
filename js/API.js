const url = 'http://localhost:4000/clientes';

//Funcion para agregar un nuevo cliente -> Function to add a new customer
export const nuevoCliente = async cliente => {
    // console.log(cliente);
    try {
        await fetch(url, {
            method: 'POST', //method: POST = Si se van a cargar datos al servidor, siempre se utilizara el metodo POST. -> If data is to be uploaded to the server, always use the POST method
            body: JSON.stringify(cliente), //body: JSON.stringify() = Se envia de dos formas, como string u objeto. -> Is sent to two forms as a string or object.
            headers: { //header:{} = Es el tipo de informacion que se esta enviando -> It is the type of information that is sent
                'Content-Type': 'application/json'
            }
        });
        window.location.href = '../../index.html';
    } catch (error) {
        console.error(error);
    }
}

//Funcion para obtener todos los clientes -> Function to obtain all customers
export const obtenerClientes = async() => {
    try {
        const resultado = await fetch(url);
        const clientes =  await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Funcion para eliminar cliente -> Function to delete a customer
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error)
    }
}

//Obtener un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Actualizar el registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', //Method: PUT -> Metodo que actualiza informacion
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = '../../index.html';
    } catch (error) {
        console.log(error);
    }
}