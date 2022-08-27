module.exports = (sequelize, dataTypes) => {
    const alias = "Productos_Categorias";
    const cols = {
        id_product: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        id_category: {
            type: dataTypes.INTEGER,
            notNull: true
        },
    };
    const config = {
        tableName: "products_categories",
        timestamps: false
    }; 
    
    const Producto_Categoria = sequelize.define(alias, cols, config);

    return Producto_Categoria;
};