const showPosts = (posts, elementHtml) => {

    let sections = "";
    posts.forEach( (pub) => {
        sections += `
            <section class="d-flex gap-2">
                <img src="${pub.url_image}" class="rounded" height="200" width="200" alt="${pub.title}" >
                <div class="d-flex flex-column justify-content-between">
                    <h4>${pub.title}</h4>
                    <p>${pub.detail}</p>
                    <p>${pub.date}</p>
                </div>
            </section>

        `
    })

    elementHtml.innerHTML = sections;
    
}

const getPosts = async () => {
    const response = await fetch('/posts')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const posts = await getPosts()
    const main = document.querySelector('#posts-list')
    showPosts(posts, main)
})