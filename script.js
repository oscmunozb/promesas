const obtenerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        datos.forEach((element) => {
            if (element.id < 21) {
                console.log(element);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

obtenerDatos();

const mensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}

const getMensaje = async () => {
    const resultado = await mensaje();
    console.log(resultado);
}

getMensaje();