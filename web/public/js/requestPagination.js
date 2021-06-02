$(document).ready(function () {
    $("#playersSearch").on("submit", (event) => {
        event.preventDefault();
        searchPlayers(1);
    })
});

function searchPlayers(page) {
    var search = $("#playersSearch").find('#search').val();
    var order = $("#playersSearch").find('#order').val();
    var playersBy = $("#playersSearch").find("#playersBy").val();
    console.log(search, order);
    obtenerDatos(search, order, page, playersBy);
}