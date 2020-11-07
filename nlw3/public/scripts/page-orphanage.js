const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 15);

//create and tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L
    .marker([-27.222633, -49.6455874], { icon })
    .addTo(map)

//image gallery

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    //remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-datails > img")

    //atualizar o container de imagem
    imageContainer.src = image.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')
}
