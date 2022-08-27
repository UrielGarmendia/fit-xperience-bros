module.exports = (sequelize, dataTypes) => {
    const alias = "Usuarios";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
    };
    const config = {
        tableName: "users",
        timestamps: false
        // El config es opcional, pero si meszclamos ingles y español, si hay que usarlo
        // timestamps:false sirve para decirle a sequelize que no estamos usando las columnas create_at y update_at, que sirven para hacer un seguimiento de fecha de creacion y de actualizacion de los registros.
    }; 
    
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}