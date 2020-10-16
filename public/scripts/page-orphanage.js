const options ={
    dragging:false,
    touchZoom:false,
    doubleClickZoom: false,
    scrollWheelZoom:false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-10.1873042,-48.325565], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

//create and add marker
L   .marker([-10.1873042,-48.325565], { icon })
    .addTo(map)

    function selectImage(event){
        const button = event.currentTarget

        //remover todas as classes .active
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removeActivClass)

        function removeActivClass(button){
            button.classList.remove("active")
        }

        //selecionar as imagens clicada

        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanege-details >img")

        //atualizar o containner de imagens

        imageContainer.src = image.src

        //adicionar a classe .active para este botão
        button.classList.add('active')

    }
