$(document).ready(function(){
    $("#contact_close").click(function(){
        $("#contact_modal").css("display", "none");
    });
    $("#contact_btn").click(function(){
        $("#contact_modal").css("display", "flex");
    });
});