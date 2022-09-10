const Producto_Categoria = require("./Producto_Categoria");

module.exports = (sequelize, dataType) => {
    const alias = "Productos";
    const cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user: {
            type: dataType.INTEGER,
            allowNull: false
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        price: {
            type: dataType.INTEGER,
            allowNull: false
        },
        description: {
            type: dataType.STRING,
            allowNull: false
        },
        discount: {
            type: dataType.STRING,
            allowNull: true
        },
        image: {
            type: dataType.BLOB,
            allowNull: false
        },
    };
    const config = {
        tableName: "products",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto_Categoria.associate = (models) => {
        Producto_Categoria.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey: "id_product"
        });

        Producto.belongsTo(models.Producto_Categoria, {
            as: "productos-categoria",
            through: "Producto_Categoria",
            foreignKey: "id_product",
            otherKey: "id_category",
            timestamps: false
        });
    }

    return Producto;
}