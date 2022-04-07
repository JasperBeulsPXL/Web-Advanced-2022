document.getElementById('een')
    .addEventListener('click', function () {
        console.log('Een clicked');
    });

document.getElementById('twee')
    .addEventListener('click', (event) => {
        console.log('Twee clicked');
        console.log(event)
        event.stopPropagation();
        event.preventDefault();
    });

document.getElementById('drie')
    .addEventListener('click', handleClickDrie);

function handleClickDrie() {
    console.log('Drie clicked');
}

