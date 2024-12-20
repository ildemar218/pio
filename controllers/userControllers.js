const User = require('../models/user');



// Mostrar todos los usuarios o buscar por nombre
exports.index = async (req, res) => {
    const search = req.query.search || ''; // Obtener el término de búsqueda desde la URL
    try {
        // Buscar usuarios por nombre si se proporciona un término de búsqueda
        const users = await User.find({
            name: new RegExp(search, 'i') // 'i' para hacer la búsqueda sin importar mayúsculas/minúsculas
        });
        res.render('index', { users, search });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los usuarios');
    }
};


// Mostrar formulario de creación
exports.create = async (req, res) => {
    const user = null;
    res.render('create', { user });
};


exports.store = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

exports.edit = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('create', { user });
    } catch (error) {
        res.status(500).send('Error al editar el usuario');
    }
};

exports.update = async (req, res) => {
    const { name, email, age } = req.body;
    try{
        await User.findByIdAndUpdate(req.params.id, { name, email, age });
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }
};

exports.destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario');
    }
};
