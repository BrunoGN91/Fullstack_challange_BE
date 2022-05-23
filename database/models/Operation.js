module.exports = (sequelize, dataTypes) => {
    let alias = "Operation"
    let cols = { 
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: dataTypes.STRING(45)
            },
            description: {
                type: dataTypes.STRING(200)
            },
            total: {
                type: dataTypes.INTEGER
            },
            users_fk: {
                type: dataTypes.INTEGER
            }
    }
    let config = {
        tableName: "operations",
        timestamps: false
    }

    const Operation = sequelize.define(alias,cols,config);
    Operation.associate = function(models) {
        Operation.belongsTo(models.User, {
            as: "users",
            foreignKey: "users_fk"
        })
    }
    return Operation
}