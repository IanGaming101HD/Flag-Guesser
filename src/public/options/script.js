let backButton = document.getElementById('back')

backButton.addEventListener('click', (event) => {
    window.location.href = '../menu/index.html'
    return
}, {
    once: true
})

let soundEnabled = sessionStorage.getItem('sound')
if (soundEnabled === null) {
    soundEnabled = true
}

let flagsNum = sessionStorage.getItem('flags_number') ? sessionStorage.getItem('flags_number') : 25
let flagsType = sessionStorage.getItem('flags_type') ? JSON.parse(sessionStorage.getItem('flags_type')) : ['africa', 'asia', 'europe', 'north_america', 'south_america', 'oceania']

let soundCheckbox = document.getElementById('sound')
soundCheckbox.checked = JSON.parse(soundEnabled)

soundCheckbox.addEventListener('change', (event) => {
    console.log(`${!soundCheckbox.checked} -> ${soundCheckbox.checked}`)
    sessionStorage.setItem('sound', soundCheckbox.checked)
})

let flagOptions = Array.from(document.getElementById('flag_options').children).filter((element) => element.tagName.toLowerCase() === 'input')
if (!flagOptions.map((element) => element.id).includes(flagsNum)) {
    flagsNum = '25'
}
flagOptions.filter((element) => element.id === flagsNum)[0].checked = true

Array.from(flagOptions).forEach((element) => {
    element.addEventListener('change', (event) => {
        flagsNum = element.id
        sessionStorage.setItem('flags_number', flagsNum)
    })
})

let africa = document.getElementById('africa')
let asia = document.getElementById('asia')
let europe = document.getElementById('europe')
let northAmerica = document.getElementById('north_america')
let southAmerica = document.getElementById('south_america')
let oceania = document.getElementById('oceania')

Array.from([africa, asia, europe, northAmerica, southAmerica, oceania]).forEach((element) => {
    if (flagsType.includes(element.id)) {
        element.checked = true
    }
    
    element.addEventListener('change', (event) => {
        if (element.checked) {
            flagsType.push(element.id)
        } else {
            flagsType = Array.from(flagsType).filter((value) => value !== element.id)
        }
        sessionStorage.setItem('flags_type', JSON.stringify(flagsType))
    })
})