const fastify = require('fastify')();
require('dotenv').config();

const schema  = {
    headers: {
        type: 'object',
        properties: {
            'x-api-key': {
                type: 'string',
                enum: [process.env.API_KEY]
            }
        },
        required: ['x-api-key']
    }
}

fastify.register(require('fastify-cors'), {
    origin: true,
    allowedHeaders: ['Origin', 'Content-Type', 'Authorization', 'Accept', 'x-api-key'],
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    optionsSuccessStatus: 200,
    preflightContinue: true
});

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