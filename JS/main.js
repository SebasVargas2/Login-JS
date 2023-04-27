const carrusel = document.querySelector('.carrusel')
const ventanaModal= document.querySelector('.ventana_modal')
const cards = document.querySelector('.tarjetass')
const boton = document.getElementById('')

let cont=0
let fotos = [
    "../assets/image1.png",
    "../assets/image2.webp",
    "../assets/image3.jpg"
]


setInterval(() => {
    if (cont<fotos.length){
        carrusel.src=fotos[cont]
        cont++
    }
    else {
        cont=0
    } 
}, 2000);

const url="https://fakestoreapi.com/products/"

async function traer(){
    let seleccionado=null
    let elementos=null
    const respuesta = await fetch (url)
    const datos=await respuesta.json()

    elementos=Array.from(datos)


    datos.forEach(item => {
        cards.innerHTML+=`
        <div class="tarjeta">
            <h3 class="tar_titulo">${item.title}</h3>
            <div class="tar_img">
                <img src="${item.image}" alt="">
            </div>
            <p class="tar_description">${item.description}</p>
            <p class="tar_price">$${item.price}</p>
            <div class="boton">
                <button class="tar_compra btn" id="btn${item.id}">comprar</button>
            </div>
        </div>`

    });
    
    cards.addEventListener('click',(evento)=>{
        
        if (evento.target.classList.contains('btn')){
            seleccionado= elementos.filter(tarjeta=>tarjeta.title==evento.target.parentElement.parentElement.querySelector('.tar_titulo').textContent)
            ventanaModal.style.display='flex'
            const modalBody = document.querySelector('.modal_body')

            modalBody.innerHTML=`
            <div class="tarjeta">
            <h3 class="tar_titulo">${seleccionado[0].title}</h3>
            <div class="tar_img">
                <img src="${seleccionado[0].image}" alt="">
            </div>
            <p class="tar_description">${seleccionado[0].description}</p>
            <p class="tar_price">$${seleccionado[0].price}</p>
            <div class="boton">
                <button class="tar_compra btn compra" id="btn${seleccionado.id}">Comprar</button>
                <button class="tar_compra btn cancela" id="btn${seleccionado.id}">Cancelar</button>
            </div>
            </div>`

        }
    })


    document.querySelector('.modal_close').addEventListener('click',()=>{
        cerrarModal();
    })

    ventanaModal.addEventListener('click',(evento)=>{
        if (evento.target.classList.contains('cancela')){
            cerrarModal();
        }
        else if (evento.target.classList.contains('compra')){
            if (confirm(`Seguro que desea comprar ${seleccionado[0].title}`)==true){
                localStorage.setItem('producto',JSON.stringify(seleccionado))
                location.assign('../HTML/index3.html')
            }
        }
    })



}


function cerrarModal(){
    ventanaModal.style.display='none'
}

traer()




