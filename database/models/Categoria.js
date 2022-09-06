const Producto = require("./Producto");

module.exports = function (sequelize,DataType) { 
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            notNull:true
        },
        id_producto: {
            type: DataType.INTEGER,
            notNull: true,
        },
        name: {
            type: DataType.STRING,
            notNull:true
        },
    };
    let config = {
        tableName: "categories",
        timestamps:false
    };
    
    const Categoria = sequelize.define(alias,cols,config)

    Producto.associate = (models) => {
        Producto.hasMany(models.Producto, {
            as: "productos",
            through: "Producto",
            foreignKey: "id_product",
            timestamps: false
        })
    }

    return Categoria;
};