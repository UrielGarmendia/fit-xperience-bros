module.exports = function (sequelize,DataTypes) { 
    let alias = "Productos-Categorias";
    let cols = {
        id_product: {
            type: DataTypes.INTEGER,
            notNull:true
        },
        id_category: {
            type: DataTypes.INTEGER,
            notNull:true
        },
    };
    let config = {
        tableName: "products_categories",
        timestamps:false
    };
    
    const Producto_Categoria = sequelize.define(alias,cols,config)

    Producto_Categoria.associate = (models) => {
        Producto_Categoria.belongsToMany(models.Producto, {
            as: "productos",
            foreignKey: "id_product",
            otherKey: "id_category",
            timestam: false
        })
    }

    return Producto_Categoria;
};