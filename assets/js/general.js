//Comment
$(document).ready(function() {
    console.log("ready!");

    $(".dropdown-toggle").dropdown();


    $('.modal-trigger').on('click', function() {
        $('#instrutionModal').modal();
    });
});
