const Producto = require("./Producto");

module.exports = (sequelize, dataType) => {
    const alias = "Usuarios";
    const cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_product: {
            type: dataType.INTEGER,
            allowNull: false
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        },
        password: {
            type: dataType.STRING,
            allowNull: false
        },
    };
    const config = {
        tableName: "users",
        timestamps: false
        // El config es opcional, pero si mezclamos ingles y español, si hay que usarlo
        // timestamps:false sirve para decirle a sequelize que no estamos usando las columnas create_at y update_at, que sirven para hacer un seguimiento de fecha de creacion y de actualizacion de los registros.
    }; 
    
    const Usuario = sequelize.define(alias, cols, config);

    Producto.associate = (models) => {
        Producto.belongTo(models.Producto, {
            as: "productos",
            foreignKey: "id_user"
        })
    }

    return Usuario;
}