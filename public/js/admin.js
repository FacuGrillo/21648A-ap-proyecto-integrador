

const formNew = document.querySelector('#new-post');

formNew.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        title: document.querySelector('#title').value,
        detail: document.querySelector('#detail').value,
        url_image: document.querySelector('#url_image').value || 'https://www3.minijuegosgratis.com/v3/games/thumbnails/223278_1.jpg',
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