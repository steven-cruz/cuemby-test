const {
    Sequelize
} = require('sequelize');

const db = require('./models');

async function createPlayer(data) {
    const [player, created] = await db.sequelize.models.players.findOrCreate({
        where: {
            name: data.name
        },
        defaults: {
            position: data.position,
            nation: data.nation,
            team: data.team
        }
    });
}

async function getPlayer(id) {
    // find player by id
    try {
        const player =  await db.sequelize.models.players.findOne({
            where: {
                id: id
            }
        })
        const py = {
            id: player.id,
            name: player.name,
            position: player.position,
            nation: player.nation,
            team: player.team,
            createdAt: player.createdAt,
            updatedAt: player.updatedAt
        }
        return py
    } catch (error) {
        console.log(error);
        return null
    }
}

async function updatePlayer(id, data) {
    // Update player
    const player = await getPlayer(id);
    await db.sequelize.models.players.update({
        name: data.name,
        position: data.position,
        nation: data.nation,
        team: data.team
    }, {
        where: {
            id: id
        }
    });
}

async function deletePlayer(id) {
    // Delete a player
    const player = await getPlayer(id);
    await db.sequelize.models.players.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
}
