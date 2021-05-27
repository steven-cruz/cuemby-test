const fastify = require('fastify');
const schema  = {
    headers: {
        type: 'object',
        properties: {
            'x-api-key': {
                type: 'string',
                enum: process.env.API_KEY
            }
        },
        required: ['x-api-key']
    }
}

require('./src/routes/players')(fastify, schema);

const start = async () => {
    try {
        await fastify.listen(process.env.HTTP_PORT, '0.0.0.0')
        console.log("Server listening on ", process.env.HTTP_PORT)
    } catch (error) {
        fastify.log.error(error)
        console.log(error);
        process.exit(1)
    }
}

start();