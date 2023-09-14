const { sequelize, DataTypes } =  require('../database');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaulValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'posts',
    timestamps: false
})


module.exports = Post;