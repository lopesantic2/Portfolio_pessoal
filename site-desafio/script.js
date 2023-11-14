function validarNome(nome) {
    if(nome.length <= 3 || nome === "" || nome?.length > 50) return false
    else return true
}
function validarEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
function validarIdade(idade) {
    return idade >= 0 && idade < 120;
}
function validarFormulario(nome, sobrenome, email, idade) {
    if(validarNome(nome) && validarNome(sobrenome) && validarEmail(email) && validarIdade(idade)) return true
    else return false
}
function validarSubmit() {
    event.preventDefault();
    const nome = document.getElementById("name").value
    const sobrenome = document.getElementById("surname").value
    const email = document.getElementById("email").value
    const idade = document.getElementById("age").value
    const form = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        idade: idade
    }
    const json = JSON.stringify(form)

    localStorage.setItem("form", json)

    if(validarFormulario(nome, sobrenome, email, idade)) {
        window.location.href = "./confirmation.html"
    }
}