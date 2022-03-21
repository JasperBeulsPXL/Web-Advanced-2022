/*
let leeftijd = 13;
let res;
if(leeftijd > 12){
    res = 'ouder';
}else{
    res = 'jonger';
}

res = (leeftijd > 12) ? 'ouder' : 'jonger';

for (let i = 0; i < 10; i++) {

}
let myArray = ['maandag']

let result = (par1,par2) => {
    // berekening
    return par1 + par2 + 'resultaat berekening'
}


*/

let myContainer = document.getElementById('voorbeeld');

let myImg = document.getElementById('voorbeeld')
    .getElementsByTagName('img')[0];

myImg.src = '../pathToImg'

myImg.alt = 'my alt text';
myImg.src = '../path'

myContainer.style.backgroundColor = 'red';
myContainer.style.display = 'none';

let myParagraph = document.createElement('p');

/*let textNode = document.createTextNode('My text');
myParagraph.appendChild(textNode);*/

myParagraph.innerText = '<h1>my text</h1>';
myContainer.appendChild(myParagraph);

function myClickHandler() {

}

window.onload = function () {
    myContainer.addEventListener('click', myClickHandler);

}