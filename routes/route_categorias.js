const categoriasController = require ('../controller/controller_categorias');
module.exports = (app) => {
    app.get('/api/categorias', categoriasController.list);
    app.get('/api/categorias/..nombre', categoriasController.find);
    app.post('/api/categorias/', categoriasController. create);
    app.delate('/api/categorias/id', categoriasController. delate);
    app.put('/api/categorias/id,categoriasController.put');
}
