let score = document.getElementById('score')
let total_score = document.getElementById('total_score')

score = sessionStorage.getItem('score') ? sessionStorage.getItem('score') : 0;
total_score = sessionStorage.getItem('total_score') ? sessionStorage.getItem('total_score') : 0;
sessionStorage.removeItem('score')
sessionStorage.removeItem('total_score')

document.body.innerHTML = document.body.innerHTML.replace('$score', score);
document.body.innerHTML = document.body.innerHTML.replace('$total_score', total_score);

let playAgain = document.getElementById('play_again')
let mainMenu = document.getElementById('main_menu')

playAgain.addEventListener('click', (event) => {
    window.location.href = '../main/index.html'
})

mainMenu.addEventListener('click', (event) => {
    window.location.href = '../menu/index.html'    
})