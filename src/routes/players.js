const {
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
} = require('../controller/players');

module.exports = function (fastify, schema) {
    // Find players
    fastify.get('/api/v1/players', {
        schema
    }, async (request, reply) => {
        try {
            const player = await getPlayer(request.params.id);
            if (!player) {
                reply.statusCode = 404
                console.log("Player not found!")
                reply.send({
                    data: null,
                    success: false,
                    message: "Player not found!"
                })
            } else {
                reply.statusCode = 200
                console.log("Player found.")
                reply.send({
                    data: player,
                    success: true,
                    message: "Player found."
                })
            }
        } catch (error) {
            reply.statusCode = 400
            console.log("Authorization not defined in headers.", error)
            reply.send({
                data: null,
                success: false,
                message: "Authorization not defined in headers."
            })
        }
    });

    // Update players
    fastify.post('/api/v1/team', {
        schema
    }, async (request, reply) => {
        if (!("name" in request.body)) {
            reply.statusCode = 400
            console.log("Field name is required.")
            reply.send({
                data: null,
                success: false,
                message: "Field name is required."
            })
        } else {
            await createPlayer(request.body);
            reply.statusCode = 200
            console.log("Player updated.")
            reply.send({
                data: null,
                success: true,
                message: "Player updated."
            })
        }
    });
}
