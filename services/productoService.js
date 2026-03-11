const Producto = require('../models/Producto');

const productoService = {
    // Función para obtener todo
    listarProductos: async () => {
        return await Producto.findAll();
    },

    // Función para crear uno nuevo con validación simple
    crearNuevoProducto: async (datos) => {
        if (datos.precio < 0) throw new Error("El precio no puede ser negativo");
        return await Producto.create(datos);
    },

    // Función para actualizar por ID
    actualizarPrecio: async (id, nuevoPrecio) => {
        return await Producto.update(
            { precio: nuevoPrecio }, 
            { where: { id } }
        );
    },

    // Función para borrar
    eliminarProducto: async (id) => {
        return await Producto.destroy({ where: { id } });
    }
};

module.exports = productoService;