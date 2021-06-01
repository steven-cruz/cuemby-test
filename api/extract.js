require('dotenv').config();
const fetch = require('node-fetch');

const {
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
} = require('./src/controller/players');


async function getEaItems(page) {
    const rq = await fetch(`https://www.easports.com/fifa/ultimate-team/api/fut/item/?page=${page}`);
    return await rq.json()
}

async function extractPlayers() {
    console.log("Initializing players extraction");
    const totalPages = (await getEaItems(1)).totalPages;

    console.log("Total pages:", totalPages);
    for (index = 1; index <= totalPages; index++) {
        const items = (await getEaItems(index)).items;

        console.log("Fetching page: ", index, "/", totalPages)

        for (item of items) {
            console.log("Extracting: ", `${item.firstName} ${item.lastName}`)
            await createPlayer(
                {
                    name: `${item.firstName} ${item.lastName}`,
                    position: item.position,
                    nation: item.nation.name,
                    team: item.club.name
                }
            )
        }
    }
}

extractPlayers();
