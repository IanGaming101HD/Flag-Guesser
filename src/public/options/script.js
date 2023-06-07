let backButton = document.getElementById('back')

backButton.addEventListener('click', (event) => {
    window.location.href = '../menu/index.html'
    return
}, {
    once: true
})

let soundEnabled = sessionStorage.getItem('sound') ? sessionStorage.getItem('sound') : true
let flagsNum = sessionStorage.getItem('flags_number') ? sessionStorage.getItem('flags_number') : 25
let flagsType = sessionStorage.getItem('flags_type') ? sessionStorage.getItem('flags_type') : ['africa', 'asia', 'europe', 'north_america', 'south_america', 'oceania']

let sound = document.getElementById('sound')
sound.checked = soundEnabled

let flagOptions = Array.from(document.getElementById('flag_options').children).filter((element) => element.tagName.toLowerCase() === 'input')
if (!flagOptions.includes(flagsNum)) {
    flagsNum = 25
}

console.log(flagOptions, flagsNum)
console.log(flagOptions.filter((element) => parseInt(element.id) === flagsNum)[0])
flagOptions.filter((element) => parseInt(element.id) === flagsNum)[0].checked = true


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
});