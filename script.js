const eersteknop = document.querySelector('#koppelpoort-button')
const koppelpoort = document.querySelector('#koppelpoort')



const tweedeknop = document.querySelector('#lievev-button')
const lievevrouwetoren = document.querySelector('#lievevrouwetoren')


const derdeknop = document.querySelector('#joris-button')
const sintjoriskerk = document.querySelector('#sintjoriskerk')

const vierdeknop = document.querySelector('#Kamperbinnenpoort-button')
const kamperbinnenpoort = document.querySelector('#kamperbinnenpoort')

const vijfdeknop = document.querySelector('#Tinnenburg-button')
const groottinnenburg = document.querySelector('#groottinnenburg')

let doorzichtig1 = document.querySelector('.doorzichtig')
const geluidje = document.querySelector('#geluid')

const poilijst = document.querySelectorAll('.poi')

function maakPOISOnzichtbaar () {
    poilijst.forEach( function(poi) {
        poi.classList.add('doorzichtig')
    })
}
function maakPOISzichtbaar () {
    poilijst,forEach( function(poi) {
        poi.classList.remove('doorzichtig')
    })
}


function verschijnen(){
    koppelpoort.classList.toggle('hidden')
    geluidje.play()
    eersteknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}
function verschijnen1(){
    lievevrouwetoren.classList.toggle('hidden')
    geluidje.play()
    tweedeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function verschijnen3(){
    sintjoriskerk.classList.toggle('hidden')
    geluidje.play()
    derdeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function verschijnen4(){
    kamperbinnenpoort.classList.toggle('hidden')
    geluidje.play()
    vierdeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}

function verschijnen5(){
    groottinnenburg.classList.toggle('hidden')
    geluidje.play()
    vijfdeknop.classList.add('doorzichtig')
    maakPOISOnzichtbaar()
}


eersteknop.addEventListener('click', verschijnen)
tweedeknop.addEventListener('click', verschijnen1)
derdeknop.addEventListener('click', verschijnen3)
vierdeknop.addEventListener('click', verschijnen4)
vijfdeknop.addEventListener('click', verschijnen5)

