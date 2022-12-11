let body = document.querySelector('body');

//Fonction à paramètre variable contenant "Bonjour"
function bonjour(...myNames) {
    let nom = document.createElement('div');
    nom.innerHTML = "Bonjour ";
    for(let name of myNames) {
        nom.innerHTML += name + ", ";
    }
    nom.innerHTML = nom.innerHTML.trim().slice(0, -1);
    body.append(nom);
}
bonjour('La vie', 'Le sport', 'La terre', 'Le ciel', 'Les nuages', 'Le soleil', 'La lune');
bonjour('Les carottes', 'Les pommes de terre', 'Les haricots', 'Les poirots', 'Les salades');

//Fonction à paramètre variable avec somme de nombre
function nombre(...myNumber) {
    let nom = document.createElement('div');
    let valeur = 0;
    for(let name of myNumber) {
        valeur += name;
    }
    nom.innerHTML = valeur.toString();
    body.append(nom);
}
nombre(7, 4, 18, 12, 9, 45, 24);
nombre(2, 5, 22, 34, 14);

//Fonction à paramètre variable avec somme de nombre multiplié par 11.76
function multiple(...myNumber) {
    let nom = document.createElement('div');
    let valeur = 0;
    for(let name of myNumber) {
        valeur += name;
    }

    nom.innerHTML = Math.floor(valeur * 11.76).toString();
    body.append(nom);
}
multiple(3, 6, 10, 15, 17, 26, 32);
multiple(1, 4, 8, 17, 19);