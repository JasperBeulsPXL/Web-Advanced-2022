let p = document.createElement('p');
let input = document.createElement('input');
input.type = 'text';
let btn = document.createElement('input');
btn.type = 'button';
btn.value = 'Click me';

btn.addEventListener('click', () => {
    p.innerText = input.value;
});

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(p);


