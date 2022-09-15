
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

// button up scroll
document.getElementById("up").addEventListener("click", scrollUp)

function scrollUp() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if(scroll > 0 ){
        window.scrollTo (0,0)
    }

}
