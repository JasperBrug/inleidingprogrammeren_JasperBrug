const eersteknop = document.querySelector('#koppelpoort-button')
const koppelpoort = document.querySelector('#koppelpoort')
const kruisje = document.querySelector('#kruis1')

const tweedeknop = document.querySelector('#lievev-button')
const lievevrouwetoren = document.querySelector('#lievevrouwetoren')
const kruisje2 = document.querySelector('#kruis2')


const derdeknop = document.querySelector('#joris-button')
const sintjoriskerk = document.querySelector('#sintjoriskerk')
const kruisje3 = document.querySelector('#kruis3')

const vierdeknop = document.querySelector('#Kamperbinnenpoort-button')
const kamperbinnenpoort = document.querySelector('#kamperbinnenpoort')
const kruisje4 = document.querySelector('#kruis4')

const vijfdeknop = document.querySelector('#Tinnenburg-button')
const groottinnenburg = document.querySelector('#groottinnenburg')
const kruisje5 = document.querySelector('#kruis5')

const geluidje = document.querySelector('#geluid')

const poilijst = document.querySelectorAll('.poi')


function maakPOISOnzichtbaar () {
    poilijst.forEach( function(poi) {
        poi.classList.add('doorzichtig')
    })
    /* met hulp van de docent */
}
function maakPOISzichtbaar () {
    poilijst.forEach( function(poi) {
        poi.classList.remove('doorzichtig')
    })
}


function verschijnen(){
    koppelpoort.classList.remove('hidden')
    geluidje.play()
    /* geluid prompt van chatgpt */
    eersteknop.classList.add('doorzichtig')
    /* van luc klasgenoot */
    maakPOISOnzichtbaar()
}
function verschijnen1(){
    lievevrouwetoren.classList.remove('hidden')
    geluidje.play()
    tweedeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function verschijnen3(){
    sintjoriskerk.classList.remove('hidden')
    geluidje.play()
    derdeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function verschijnen4(){
    kamperbinnenpoort.classList.remove('hidden')
    geluidje.play()
    vierdeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function verschijnen5(){
    groottinnenburg.classList.remove('hidden')
    geluidje.play()
    vijfdeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function kruisjes(){
    koppelpoort.classList.add('hidden')
    maakPOISzichtbaar()
}

function kruisjes2(){
    lievevrouwetoren.classList.add('hidden')
    maakPOISzichtbaar()
}

function kruisjes3(){
    sintjoriskerk.classList.add('hidden')
    maakPOISzichtbaar()
}

function kruisjes4(){
    kamperbinnenpoort.classList.add('hidden')
    maakPOISzichtbaar()
}

function kruisjes5(){
    groottinnenburg.classList.add('hidden')
    maakPOISzichtbaar()
}

kruisje.addEventListener('click', kruisjes)
kruisje2.addEventListener('click', kruisjes2)
kruisje3.addEventListener('click', kruisjes3)
kruisje4.addEventListener('click', kruisjes4)
kruisje5.addEventListener('click', kruisjes5)
eersteknop.addEventListener('click', verschijnen)
tweedeknop.addEventListener('click', verschijnen1)
derdeknop.addEventListener('click', verschijnen3)
vierdeknop.addEventListener('click', verschijnen4)
vijfdeknop.addEventListener('click', verschijnen5)

