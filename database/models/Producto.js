module.exports = (sequelize, dataTypes) => {
    const alias = "Productos";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        // id_user: {},
        // name: {
        //     type: dataTypes.STRING,
        //     notNull: true
        // },
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

    return Producto;
}