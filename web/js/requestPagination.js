$(document).ready(function () {
    $("#playersSearch").on("submit", (event) => {
        event.preventDefault();
        var search = $(this).find('#search').val();
        var order = $(this).find('#order').val();
        console.log(search, order);
        obtenerDatos(search, order, 1);
    })
});