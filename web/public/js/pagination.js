
// $(document).ready(function () {
//     var i = 0;
//     $(".prev").click(function () {
//         ++i;
//         if ($('#outer div').length / 2 < i) {
//             i = 0;
//             $('#outer .first').css('background', 'blue');
//             $first = $(".first");
//         } else {
//             $first = $first.prev();
//             $("#outer div").css("background", "green");
//             $first.css("background", "blue");
//         }
//     });
//     $(".next").click(function () {
//         ++i;
//         if ($('#outer div').length / 2 < i) {
//             i = 0;
//             $('#outer .first').css('background', 'blue');
//             $first = $(".first");
//         } else {
//             $first = $first.next();
//             $("#outer div").css("background", "green");
//             $first.css("background", "blue");
//         }
//     });
// });
// var $first = $(".first");

function renderPaginator(actualPage, totalPages) {
    let limit = 6;
    let ul = $('#pagination');
    ul.empty();
    let prev = $(`<li class="page-item">
                     <a class="page-link" href="#" onclick =searchPlayers(${actualPage > 1 ? actualPage - 1 : 1}) aria-label="Previous">
                     <span aria-hidden="true">&laquo;</span>
                     </a>
                 </li>`);
    ul.append(prev);
    console.log(actualPage, actualPage + limit, totalPages)
    for (index=actualPage; index < actualPage + limit; index++) {
        if (index > totalPages) {
            break;
        }
        let act = $(`<li class="page-item ${index == actualPage ? "active": ""}">
                     <a class="page-link" href="#" onclick=searchPlayers(${index})>${index}</a> 
                 </li>`);
        ul.append(act);
    }
    let nextPage = actualPage + 1 > totalPages ? totalPages : actualPage + 1;
    let next = $(`<li class="page-item">
                    <a class="page-link" href="#" onclick=searchPlayers(${nextPage}) aria-label="Next">
                         <span aria-hidden="true">&raquo;</span>
                     </a>
                 </li>`);
    ul.append(next);
    let list = [];
}
