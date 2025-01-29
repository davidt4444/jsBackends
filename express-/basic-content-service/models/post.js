const Sequelize = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 200]
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            len: [0, 10000]
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    category: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    likesCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    isPublished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    views: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: true, // This will automatically manage createdAt and updatedAt fields
    tableName: 'posts'
});

module.exports = Post;
