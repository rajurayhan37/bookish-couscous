const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    const Role = sequelize.define("role", {
        title: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        },
        slug: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        }
    })

    return Role
}