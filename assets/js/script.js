const jeu1 = document.querySelector('.jeu1');
const jeu2 = document.querySelector('.jeu2');
const results = document.querySelector('.results');
const popup = document.querySelector('.modal-header');
const playerScore = document.querySelector('.player-score');
const pcScore = document.querySelector('.pc-score');
var score1 = 0;
var addPlayerScore = function () {
    score1++;
    playerScore.textContent = score1;
};
var score2 = 0;
var addPcScore = function () {
    score2++;
    pcScore.textContent = score2;
};

var getRandom = function () {
    return Math.floor((Math.random()*3)+1);
};

const pierre = document.querySelector('.pierre');
pierre.onclick = function () { 
    jeu1.src = 'assets/img/pierre.png';
    jeu1.alt = 'pierre';
};

const feuille = document.querySelector('.feuille');
feuille.onclick = function () { 
    jeu1.src = 'assets/img/feuille.png';
    jeu1.alt = 'feuille';
 };

const ciseaux = document.querySelector('.ciseaux');
ciseaux.onclick = function () { 
    jeu1.src = 'assets/img/ciseaux.png';
    jeu1.alt = 'ciseaux';
 };

const button = document.querySelector('button');
button.onclick = function () {
    if (getRandom() == 1) {
        jeu2.src = 'assets/img/pierre.png';
        jeu2.alt = 'pierre';
    } else if (getRandom() == 2) {
        jeu2.src = 'assets/img/feuille.png';
        jeu2.alt = 'feuille';
    } else if (getRandom() == 3) {
        jeu2.src = 'assets/img/ciseaux.png';
        jeu2.alt = 'ciseaux';
    }
    if (jeu1.alt == 'pierre' && jeu2.alt == 'pierre' || jeu1.alt == 'feuille' && jeu2.alt == 'feuille' || jeu1.alt == 'ciseaux' && jeu2.alt == 'ciseaux') {
        results.textContent = 'MATCH NUL !';
        popup.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    } else if (jeu1.alt == 'pierre' && jeu2.alt == 'feuille' || jeu1.alt == 'feuille' && jeu2.alt == 'ciseaux' || jeu1.alt == 'ciseaux' && jeu2.alt == 'pierre') {
        results.textContent = 'PERDU !';
        popup.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
        addPcScore();
    } else if (jeu1.alt == 'pierre' && jeu2.alt == 'ciseaux' || jeu1.alt == 'feuille' && jeu2.alt == 'pierre' || jeu1.alt == 'ciseaux' && jeu2.alt == 'feuille') {
        results.textContent = 'GAGNÉ !';
        popup.style.backgroundColor = 'rgba(0, 255, 13, 0.3)';
        addPlayerScore();
    } else {
        results.textContent = 'OUPS, TU AS OUBLIÉ DE FAIRE TON CHOIX !';
        popup.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    }
 };