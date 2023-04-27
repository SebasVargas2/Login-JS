const card = document.getElementById('card')
const volver = document.querySelector('.btn')

async function confirma(){
    

    let dato = localStorage.getItem('producto')
    let dato2 = JSON.parse(dato)
    console.log(dato2)


    card.innerHTML=`
    <h3 class="tar_titulo">${dato2[0].title}</h3>
    <div class="tar_img">
        <img src="${dato2[0].image}" alt="">
    </div>
    <p class="tar_price">$${dato2[0].price}</p>`

    volver.addEventListener('click',()=>{
        location.assign('../HTML/index2.html')
    })
}
confirma()