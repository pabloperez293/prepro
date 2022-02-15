
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

// formulario
    const $form =  document.querySelector('#form')

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
        'Accept' : 'application/json'
        }
        })
        if (response.ok){
            this.reset()
            alert("Gracias por contactarme, te estare respondiendo pronto");
        }
    }

    // Elemento submit de enviar mensaje form
//    const $form = document.querySelector('#form')

   $form.addEventListener("subtmit", handleSubmit )

   function handleSubmit(event) {
       event.preventDefault()
       const form = new FormData(this)
       console.log(form.get("name"))
   }
