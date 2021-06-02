let playersList;
function obtenerDatos(search, order, page, by) {
    console.log(by)
    if (by == 'team') {
        console.log('By team')
        fetch("http://localhost:3000/api/v1/team",
        {
            method: 'POST',
            // mode: 'cors',
            headers: {
               'x-api-key': 'cuembyTest',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: search,
                Page: page
            })
        }).then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json();
        }).then (function (respuesta) {
            console.log(respuesta)
            renderPlayers(respuesta.data);
        })
    } else {
        console.log('By name')
        fetch(`http://localhost:3000/api/v1/players?search=${search}&order=${order}&page=${page}`, {
            method: 'GET',
            headers:{
                'x-api-key': 'cuembyTest',
            },
            // mode: 'cors'
        })
        .then(function (respuesta) {
            return respuesta.json();
        }).then (function (respuesta) {
            renderPlayers(respuesta.data);
        })
    }
}

function renderPlayers(data) {
    let totalPages = data.TotalPages;
    let receivedPage = data.Page;
    playersList = data.Players;
    console.log(totalPages, receivedPage);
    console.log(data);
    let playersUl = $('#playersContainer');
    playersUl.empty();
    let i = 0;
    for (player of data.Players) {
        let card = $(`<div class="bg-card mx-2 my-3 player-card">
                        <img src="./img/jugadores.png" class="card-img-top" alt="player">
                        <div class="card-body text-center">
                            <h5 class="card-title">Name:</h5>
                            <p id="commonName">${player.name}</p>
                            <p class="card-text">Position:</p>
                            <p id="position">${player.position}</p>
                            <!-- window to see more -->
                            <div>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"  onclick=renderModal(${i}) data-bs-target="#staticBackdrop">
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>`);
        i++;
        playersUl.append(card);
    }
    renderPaginator(Number(data.Page), Number(data.TotalPages))
}

function renderModal(index) {
    console.log('render modal', playersList[index])
    let name = document.getElementById('modalName');
    name.innerHTML = playersList[index].name
    let nation = document.getElementById('modalNation');
    nation.innerHTML = playersList[index].nation
    let team = document.getElementById('modalTeam');
    team.innerHTML = playersList[index].team
    let position = document.getElementById('modalPosition');
    position.innerHTML = playersList[index].position
}

// fetch("http://www.localhost:3000/api/v1/players") line 2
// nombre.innerHTML = respuesta.data.Players.name line 7