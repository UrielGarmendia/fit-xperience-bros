module.exports = (sequelize, dataTypes) => {
    const alias = "Productos";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_user: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
        price: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        description: {
            type: dataTypes.STRING,
            notNull: true
        },
        image: {
            type: dataTypes.BLOB,
            notNull: true
        },
    };
    const config = {
        tableName: "products",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = (models) => {
        Producto.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey: "id_product"
        });

        Producto.belongsToMany(models.Producto, {
            as: "productos-categoria",
            through: "Producto_Categoria",
            foreignKey: "id_product",
            otherKey: "id_category",
            timestam: false
        });
    }

    return Producto;
}