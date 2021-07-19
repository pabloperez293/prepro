
// Menu
$(document).ready(function(){
    $("#icon").click(function(){
        $("ul").toggleClass("show");
    });
});
// recargar
    window.onload = function(){
        $("#onload").fadeOut();
        $("body").removeClass("hidden");    
}


