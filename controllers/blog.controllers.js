const ctrl = {};
const Post = require('../models/Post');

// Controlador para crear nueva publicación
ctrl.newPost = async (req, res) => {

    // const { title, detail, url_image, date } = req.body

    try {
        const post = await Post.create(req.body)
        await post.save()

        return res.json({
            msg: 'Publicación guardada con éxito!',
            post
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al crear nueva Publicación!"
        })
    }

};

// Controlador para obtener todas las publicaciones
ctrl.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        return res.json(posts)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al obtener publicaciones!"
        })
    }
};

// Controlador para obtener una publicación
ctrl.getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        return res.json(post)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al obtener Publicación!"
        })
    }

};

// Controlador para actualizar una publicación
ctrl.modPost = async (req, res) => {
    const { id } = req.params;
    
    try {
        const post = await Post.findByPk(id);
        post.set(req.body)
        await post.save();
        return res.json({
            msg: 'Publicación actualizada con éxito!'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al actualizar Publicación!"
        })
    }
};

// Controlador para eliminar una publicación
ctrl.delPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id);
        await post.destroy();
        return res.json({
            msg: 'Publicación eliminada con éxito!'
        }) 
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al eliminar Publicación!"
        })
    }

};


module.exports = ctrl;