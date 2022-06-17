const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    })

    return User
}