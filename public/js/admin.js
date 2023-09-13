

const formNuevo = document.querySelector('#new-post');

formNuevo.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        title: document.querySelector('#title').value,
        detail: document.querySelector('#detail').value,
        url_image: document.querySelector('#url_image').value,
        date: document.querySelector('#date').value,
    }


    // Enviar los datos al servidor para crear la nueva publicación
    const respuesta = await fetch('/post', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const datos = await respuesta.json()
    console.log(datos);

    alert(datos.msg)

    location.href = "/"

})