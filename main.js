const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener ("submit", e=>{ 
    e.preventDefault()
    let warnings= ""
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){ 
        warnings+= "El nombre no es valido <br>"
    }
    console.log(regexEmail.test(email.value))
    if (regExEmail.test(email.value)){

    }
})