module.exports = function (sequelize,DataTypes) { 
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            notNull:true
        },
        name: {
            type: DataTypes.STRING,
            notNull:true
        },
    };
    let config = {
        tableName: "categories",
        timestamps:false
    };
    
    const Categoria = sequelize.define(alias,cols,config)

    Categoria.associate = (models) => {
        Categoria.belongsToMany(models.Categoria, {
            as: "productos-categoria",
            through: "Producto_Categoria",
            foreignKey: "id_product",
            otherKey: "id_category",
            timestam: false
        })
    }

    return Categoria;
};