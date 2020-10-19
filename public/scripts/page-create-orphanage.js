//create map
const map = L.map('mapid').setView([-10.1873042,-48.325565], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
  })

let marker;

//create and add marker
map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;

    //remove icon

    marker && map.removeLayer(marker)

    //add icon
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//adicionar o campo de fotos

function addPhotoField(){
   //pegar o container de fotos #images
   const container = document.querySelector('#images')
   //pegar o container para duplicar .new-image
   const fieldsContainer = document.querySelectorAll('.new-upload')
   //realizar o clone do container da ultima imagem adicionada
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

   //verificar se o campo esta vazio
   const input = newFieldContainer.children[0]
   if(input.value ==""){
       return
   }

   //limpar o campo antes de add a imagens
   input.value = ""
   //adicionar o clone ao container #images
   container.appendChild(newFieldContainer)

}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){

        span.parentNode.children[0].value=""
        return
    }

    span.parentNode.remove();
}

//select yes or no;

function toggleSelect(event){
    //remover a classe active
    document.querySelectorAll('.button-select button')
    .forEach(button=>button.classList.remove('active'))//para cada botão execute a função remover

    //colocar a classe a classe active

    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[ name="open_on_weekends"]')

    input.value = button.dataset.value


}
