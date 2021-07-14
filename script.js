let painel = document.getElementById('white-panel')
let login = document.getElementById('login')
let reg = document.getElementById('register')
let infoR =document.getElementById('login-info')
let infoL = document.getElementById('register-info')

function change(){
    
    painel.classList.toggle('right')
    painel.classList.toggle('left')

    login.classList.toggle('show')
    login.classList.toggle('no-show')

    reg.classList.toggle('no-show')
    reg.classList.toggle('show')

    infoR.classList.toggle('no-show')
    infoL.classList.toggle('no-show')

}