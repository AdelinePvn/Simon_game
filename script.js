/******************************************************************
 * 
 * déclaration et initialisation des variables globales utilisées
 * 
 ******************************************************************/
var compteur = 0;   // compeur d'animation
var compteurMax;    // nombre maximale d'animation dans une séquence
var idAnimation;    // identificateur du timer de l'animation
var etatOnOff = 0;  // état "allumé" ou "éteint" des couleurs
var sequence = [];  // tableau contenant la séquence de l'animation
sequence[0]=0;      // initialisation de la case 0 du tableau à 0 pour indiquer le début de l'animation

/******************************************************************
 * 
 * déclaration et définition des fonctions utilisées pour réaliser le jeu
 * 
 ******************************************************************/

 function on_off(idTouche,etat) {
    if(etat==1)
     switch(idTouche) {
        case 1: document.getElementById('couleur1').style.backgroundColor = "#ff0000";
        break;
        case 2: document.getElementById('couleur2').style.backgroundColor = "#00ff00";
        break;
        case 3: document.getElementById('couleur3').style.backgroundColor = "#0000ff";
        break;
        case 4: document.getElementById('couleur4').style.backgroundColor = "#ffff00";
        break;
     }
     else {
     document.getElementById('couleur1').style.backgroundColor = "#5f0000";
     document.getElementById('couleur2').style.backgroundColor = "#005f00";
     document.getElementById('couleur3').style.backgroundColor = "#00005f";
     document.getElementById('couleur4').style.backgroundColor = "#5f5f00";
     }
}

function readClicOnTouche(idTouche) {
    if(sequence[0]==0) {
        document.getElementById('message').value = "C'est partie !";
        initSequence();
        }
        else {
        if(idTouche == sequence[compteur]) {
            compteur ++;
            if(compteur>compteurMax) initSequence();
        }
        else {
            document.getElementById('message').value = "Erreur !! Appuyer sur une couleur pour recommencer";
            sequence[0]=0;
            compteur=0;
        }
    }
       
}

function initSequence() {
    compteurMax = compteur;
    compteur = 0;
    sequence[compteurMax] = getNbreAleatoire();
    animSequence();
}

function getNbreAleatoire(){
    var nbreAleatoire;
    do {
    nbreAleatoire = Math.floor((Math.random() * 10) + 1);
    }while(nbreAleatoire>4);
    return nbreAleatoire;
}

function animSequence() {
    idAnimation = setTimeout('animSequence();', 500);
    if(etatOnOff==0) {
        on_off(sequence[compteur],1);
        etatOnOff=1;
    }
    else {
        on_off(sequence[compteur],0);
        etatOnOff=0;
        compteur++;
        if(compteur>compteurMax){
            clearTimeout(idAnimation);
            compteur=0;
        }
    } 
}