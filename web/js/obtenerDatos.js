function obtenerDatos(search, order, page) {
    fetch(`http://www.localhost:3000/api/v1/players?search=${search}&order=${order}&page=${page}`, {
        method: 'GET',
        headers:{
            'x-api-key': 'cuembyTest'
        },
        mode: 'cors'
    })
    .then(function (respuesta) {
        return respuesta.json();
    }).then (function (respuesta) {
        let totalPages = respuesta.data.TotalPages;
        let receivedPage = respuesta.data.Page;
        console.log(totalPages, receivedPage);
        let nombre = document.getElementById('nombre');
        nombre.innerHTML = respuesta.data.Players[0].name
        let nation = document.getElementById('nation');
        nation.innerHTML = respuesta.data.Players[2].nation
        let team = document.getElementById('team');
        team.innerHTML = respuesta.data.Players[3].team
        let position = document.getElementById('position');
        position.innerHTML = respuesta.data.Players[1].position
    })
}

// fetch("http://www.localhost:3000/api/v1/players") line 2
// nombre.innerHTML = respuesta.data.Players.name line 7