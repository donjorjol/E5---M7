const sequelize = require('./config/database');
const productoService = require('./services/productoService');

async function iniciarApp() {
    try {
        // Sincroniza los modelos con la base de datos
        await sequelize.sync();
        
        // 1. Obtenemos la lista de instancias desde el servicio
        const lista = await productoService.listarProductos();

        // 2. Convertimos cada instancia de Sequelize a un objeto JS plano
        const listaLimpia = lista.map(producto => producto.toJSON());

        // 3. Imprimimos el resultado formateado
        console.log("Productos disponibles:", listaLimpia);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

iniciarApp();