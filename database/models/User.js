module.exports = (sequelize, dataTypes) => {

    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(45),
        },
        password: {
            type: dataTypes.STRING(45),
        },
        balance: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function(models) {
        User.hasMany(models.Operation, {
            as: "operations",
            foreignKey: "users_fk"
        })
    }

    return User
}