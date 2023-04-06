'use strict';
export default (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        sdt: DataTypes.STRING,
        role: DataTypes.STRING,
    }, {});
    User.associate = function(models) {
        models.User.belongsTo(models.Role, { foreignKey: 'role' });

    };

    return User;
};