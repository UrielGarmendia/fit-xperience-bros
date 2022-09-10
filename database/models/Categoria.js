const Producto = require("./Producto");

module.exports = function (sequelize,DataType) { 
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false        
        },
        id_producto: {
            type: DataType.INTEGER,
            allowNull:false
        },
        name: {
            type: DataType.STRING,
            allowNull:false        
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