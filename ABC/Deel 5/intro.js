document.getElementsByTagName('img')[0]
    .addEventListener('click', function () {
        // mijn code
        console.log('image');
    });

document.getElementsByTagName('p')[0]
    .addEventListener('click', (event) => {
        // mijn code
        console.log('paragraph');
        console.log(event);
        event.stopPropagation();
        event.preventDefault();
    });

document.getElementsByTagName('div')[0]
    .addEventListener('click', divClickHandler);

function divClickHandler() {
    console.log('div');
}

window.onload = function () {

}

