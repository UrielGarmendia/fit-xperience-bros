module.exports = (sequelize, dataTypes) => {
    const alias = "Categorias";
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
    };
    const config = {
        tableName: "categories",
        timestamps: false
    }; 
    
    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
};