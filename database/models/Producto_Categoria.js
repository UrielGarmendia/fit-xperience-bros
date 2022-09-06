const Usuario = require("./Usuario");

module.exports = function (sequelize,DataType) { 
    let alias = "Productos-Categorias";
    let cols = {
        id_product: {
            type: DataType.INTEGER,
            notNull:true
        },
        id_category: {
            type: DataType.INTEGER,
            notNull:true
        },
    };
    let config = {
        tableName: "products_categories",
        timestamps:false
    };
    
    const Producto_Categoria = sequelize.define(alias,cols,config)

    Usuario.associate = (models) => {
        Usuario.belongsToMany(models.Producto, models.Categoria, {
            as: "productos",
            foreignKey: "id_product",
            otherKey: "id_category",
            timestamps: false
        })
    }

    return Producto_Categoria;
};