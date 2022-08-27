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
    
    const Productos_Categoria = sequelize.define(alias, cols, config);

    return Productos_Categoria;
};