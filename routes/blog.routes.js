const router = require('express').Router();
const {
    modPost,
    newPost,
    delPost,
    getPost,
    getPosts,
} = require('../controllers/blog.controllers');

// ====================================================
//          Rutas para manejar Vistas (views)
// ====================================================
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})


// ====================================================
//              Rutas para manejar Datos
// ====================================================
// Ruta para obtener todas las publicaciones
router.get('/posts/', getPosts);

// Ruta para obtener una publicación
router.get('/post/:id', getPost);

// Ruta para crear nueva publicación
router.post('/post/', newPost);

// Ruta para actualizar publicación
router.put('/post/:id', modPost);

// Ruta para eliminar publicación
router.delete('/post/:id', delPost);



module.exports = router;