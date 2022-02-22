// alert('Hello world');
document.getElementsByClassName('vb')[0].innerHTML = '<h1>nieuwe waarde</h1>';

//let myNumberString = prompt("Mijn favoriete quote is: \" Hakuna matata  \" ");
//let myNumber = parseInt(myNumberString);

let get = '1';
let fullName = `${name} Beuls`
let getal1 = 1 + parseInt(get);
let stringGetal = name + getal1 + '';

console.log('getal 1 is gelijk aan de string: ', stringGetal);
let eindresultaat;
if (getal1 > 1) {
    eindresultaat = true;
} else {
    eindresultaat = false;
}
eindresultaat = getal1 > 1 ? true : false;