class element {
    constructor(type,content,parent,id) {
        this.type = type;
        this.content = content;
        this.parent = parent;
        this.id = id;
    }
    createContent() {
        var element = document.createElement(this.type);
        var content = document.createTextNode(this.content);
        element.appendChild(content);
        var parent = document.getElementById(this.parent);
        parent.appendChild(element)
        element.setAttribute('id',this.id)
    } 
//tipo de elemento, conteudo, elemento pai e o id
}
function pickRandom (min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function advanceMesssage(messageSource) {
    this.messageSource = messageSource;
    messageIndex++
    document.getElementById('gameText').innerHTML = `<p>${this.messageSource}</p>`;
}
function callMaromba() {
    marombaPlaces.forEach(places => {
   places.createContent()   
});
}
const status = {
    biceps: ['pequeno','grande','sheipado'],
    triceps:['pequeno','grande','sheipado'],
    peso: pickRandom(45,80)
}
const playerStatus = {
    biceps:     status.biceps[pickRandom(0,2)],
    triceps:    status.biceps[pickRandom(0,2)],
    peso:   pickRandom(45,80)
}

// Casa Maromba's Places
let academia = new element('BUTTON','Academia','playerButtons','gym')
let cozinha = new element('BUTTON','Cozinha','playerButtons','kitchen')
let sala = new element('BUTTON','Sala','playerButtons','room')
let tcholasRoom = new element('BUTTON','Quarto dos Tcholas','playerButtons','tcholas')
let banheiro = new element('BUTTON','banheiro','playerButtons','bathroom')
let marombaPlaces = [academia,cozinha,sala,tcholasRoom,banheiro];


//

let messageIndex = 0;
let messages =  [
'Bem vindo a casa maromba, neste jogo você é um morador da casa maromba e deve fazer o possível para não ser expulso da casa.', 'Você joga como um integrante da casa e tem seus status iniciais gerados aleatoriamente, seu objetivo secundário é  ficar sheipado no rolê','Está pronto para começar?','Os locais da casa ficarão abaixo e você pode ir a qualquer um deles a qualquer momento.',`Seus status foram gerados aleatóriamente:<br>
Biceps: ${playerStatus.biceps}<br>
Triceps: ${playerStatus.triceps}<br>
Peso: ${playerStatus.peso}
`]
let nextButton =  document.getElementById('next');
document.getElementById('next').onclick = () => {
    console.log('messageIndex: ' + messageIndex)
    advanceMesssage(messages[messageIndex])
    let placesCheck = (messageIndex === 4) ? callMaromba() : false;
 
}


