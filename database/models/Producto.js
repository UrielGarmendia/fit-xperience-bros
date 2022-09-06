const Producto_Categoria = require("./Producto_Categoria");

module.exports = (sequelize, dataType) => {
    const alias = "Productos";
    const cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_user: {
            type: dataType.INTEGER,
            notNull: true
        },
        name: {
            type: dataType.STRING,
            notNull: true
        },
        price: {
            type: dataType.INTEGER,
            notNull: true
        },
        description: {
            type: dataType.STRING,
            notNull: true
        },
        image: {
            type: dataType.BLOB,
            notNull: true
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