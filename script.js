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
