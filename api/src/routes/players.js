const {
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer,
    getTeamPaginated,
    getPlayersPaginated
} = require('../controller/players');

module.exports = function (fastify, schema) {
    // Find players
    fastify.get('/api/v1/players', {
        schema
    }, async (request, reply) => {
        try {
            console.log(request.query)
            const response = await getPlayersPaginated(request.query.search, request.query.page, request.query.order);
            if (!response) {
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
                reply.header('Access-Control-Allow-Origin', '*').send({
                    data: response,
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
        if (!("Name" in request.body)) {
            reply.statusCode = 400
            console.log("Field name is required.")
            reply.send({
                data: null,
                success: false,
                message: "Field name is required."
            })
        } else {
            console.log('enter teampaginated', request.body)
            const response = await getTeamPaginated(request.body.Name, request.body.Page);
            reply.statusCode = 200
            reply.header('Access-Control-Allow-Origin', '*').send({
                data: response,
                success: true,
                message: "Players found."
            })
        }
    });
}