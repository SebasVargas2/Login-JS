import {usuarios} from './users.js';
console.log(usuarios)

const icono = document.getElementById('icon-view-show')
const login = document.getElementById('login')
const user = document.getElementById('user')
const password = document.getElementById('pass')
const pantalla = document.getElementById('texto')

icono.addEventListener('click',() => {
    if (password.type=="text"){
        password.type="password"
    }else{
        password.type="text"
    }
})

login.addEventListener('click', (evento)=>{
    let existe=false
    evento.preventDefault()
    usuarios.forEach(element => {
        if (user.value==element.username){
            if (password.value==element.userpass){
                existe=true
            }
        }
    });
    if (existe==false){
        pantalla.innerHTML="Error de usuario o contraseña"
        setTimeout(()=>{
            pantalla.innerHTML=('')
        },2000)
    }else if (existe==true){
        user.value=''
        password.value=''
        location.assign("./HTML/index2.html")
    }
})