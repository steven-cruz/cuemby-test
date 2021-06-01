require('dotenv').config();
const {
    Sequelize,
    DataTypes
} = require('sequelize');

let sequelize;
try { 
    sequelize = new Sequelize(process.env.POSTGRE_URI, {
        define: {
            freezeTableName: false
        }
    });
} catch (err) {
    console.log(err);
}

let players;

async function validateConnection() {
    try {
        await sequelize.authenticate();
        await initializeModels();
        await syncModels();
        console.log("Connection already!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

validateConnection();

async function initializeModels() {
    players = await sequelize.define('players', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deleted_at'
        }
    }, {
        sequelize,
        defaultScope: {
            where: {
                deletedAt: null
            }
        },
        timestamps: true,
        createdAt: true,
        updatedAt: true
    });
}

async function syncModels() {
    await sequelize.sync({
        alter: true
    });
    console.log("Sinchronized succesfully.");
}

module.exports = {
    players,
    sequelize
}