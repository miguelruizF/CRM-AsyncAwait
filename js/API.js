const url = 'http://localhost:4000/clientes';

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