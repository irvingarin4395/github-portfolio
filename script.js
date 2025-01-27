$(document).ready(function(){
    $("#contact_close").click(function(){
        $("#contact_modal").css("display", "none");
    });
    $("#contact_btn").click(function(){
        $("#contact_modal").css("display", "flex");
    });
    $('.exp_card_front[company="sapere_marketing"]').click(function(){
        $('.exp_card_front[company="sapere_marketing"]').css("opacity", "0");
        $('.exp_card_back[company="sapere_marketing"]').css("transform", "scale(1)");
        $('.exp_card_layer[company="sapere_marketing"]').css("transform", "scale(1)");
    });
    $('.exp_card_back[company="sapere_marketing"]').click(function(){
        $('.exp_card_front[company="sapere_marketing"]').css("opacity", "1");
        $('.exp_card_back[company="sapere_marketing"]').css("transform", "scale(0)");
        $('.exp_card_layer[company="sapere_marketing"]').css("transform", "scale(0)");
    });
    $('.exp_card_front[company="udd"]').click(function(){
        $('.exp_card_front[company="udd"]').css("opacity", "0");
        $('.exp_card_back[company="udd"]').css("transform", "scale(1)");
        $('.exp_card_layer[company="udd"]').css("transform", "scale(1)");
    });
    $('.exp_card_back[company="udd"]').click(function(){
        $('.exp_card_front[company="udd"]').css("opacity", "1");
        $('.exp_card_back[company="udd"]').css("transform", "scale(0)");
        $('.exp_card_layer[company="udd"]').css("transform", "scale(0)");
    });
});