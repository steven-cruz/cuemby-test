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

async function getTeamPaginated(team, page) {
    console.log('Body params:', team, page)
    try {
        const totalPlayers = await db.sequelize.models.players.count({
            where: db.sequelize.where(
                db.sequelize.fn('lower', db.sequelize.col('team')),
                db.sequelize.fn('lower', team)
            )
        });
        const limit = 20;
        const offset = (page * limit) - limit;
        const totalPages = parseInt(totalPlayers / limit) + 1;
        const players =  await db.sequelize.models.players.findAll({
            where: db.sequelize.where(
                db.sequelize.fn('lower', db.sequelize.col('team')),
                db.sequelize.fn('lower', team)
            ),
            offset: offset,
            limit: limit
        });
        console.log(players);
        const response = {
            Page: page,
            TotalPages: totalPages,
            totalItems: totalPlayers,
            Items: players.length,
            Players: []
        }
        for (player of players) {
            response.Players.push({
                name: player.name,
                position: player.position,
                nation: player.nation,
                team:player.team
            })
        }
        return response
    } catch (error) {
        console.log(error);
        return null
    }
}

async function getPlayersPaginated(name, page, order) {
    try {
        const totalPlayers = await db.sequelize.models.players.count({
            where: db.sequelize.where(
                db.sequelize.fn('lower', db.sequelize.col('name')),
                "LIKE",
                `%${name.toLowerCase()}%`
                )
        });
        const limit = 20;
        const offset = (page * limit) - limit;
        const totalPages = parseInt(totalPlayers / limit) + 1;
        const players =  await db.sequelize.models.players.findAll({
            where: db.sequelize.where(
                db.sequelize.fn('lower', db.sequelize.col('name')),
                "LIKE",
                `%${name.toLowerCase()}%`
                ),
            order: [
                ['name', order ? order.toUpperCase() : "asc"]
            ],
            offset: offset,
            limit: limit
        });
        const response = {
            Page: page,
            TotalPages: totalPages,
            totalItems: totalPlayers,
            Items: players.length,
            Players: []
        }
        for (player of players) {
            response.Players.push({
                name: player.name,
                position: player.position,
                nation: player.nation,
                team: player.team
            })
        }
        return response
    } catch (error) {
        console.log(error);
        return null
    }
}

module.exports = {
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer,
    getTeamPaginated,
    getPlayersPaginated
}
