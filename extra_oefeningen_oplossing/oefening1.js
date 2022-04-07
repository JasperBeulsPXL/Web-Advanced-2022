const vehicles = [
    {
        model: 'Mercedes AMG',
        license: 'B',
        odometer: 0,
        price: 240000,
        imgPath: 'mercedes-amg.jpg'
    },
    {
        model: 'Kawasaki Ninja 400',
        license: 'A',
        odometer: 11500,
        price: 5500,
        imgPath: 'kawasaki-ninja.jpg'
    },
    {
        model: 'Ford Mondeo',
        license: 'B',
        odometer: 14000,
        price: 30000,
        imgPath: 'ford-mondeo.jpeg'
    },

    {
        model: 'Ducati Panigale Superbike',
        license: 'A',
        odometer: 2499,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
    {
        model: 'Ford Fiesta ST',
        license: 'B',
        odometer: 45124,
        price: 19999,
        imgPath: 'ford-fiesta-st.jpg'
    },
    {
        model: 'Ducati Panigale Superbike 2',
        license: 'A',
        odometer: 1000,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
];
let selectedLicense = 'All';
let selectionChangedCounter = 0;

function orderByModulo() {
    return vehicles.sort((a, b) => {
        let charactersInA = a.model.length;
        let charactersInB = b.model.length;

        let calculateModuloA = (charactersInA + a.odometer) % selectionChangedCounter;
        let calculateModuloB = (charactersInB + b.odometer) % selectionChangedCounter;
        let res = (calculateModuloA < calculateModuloB) ? -1 : (calculateModuloA > calculateModuloB) ? 1 : 0;

        console.log(`A = ${calculateModuloA}, B = ${calculateModuloB}, result ${res}`)
        return (calculateModuloA < calculateModuloB) ? -1 : (calculateModuloA > calculateModuloB) ? 1 : 0;
    });
}

function createVehicleCards() {
    let vehiclesToRender;
    if (selectionChangedCounter < 3) {
        let filteredVehicles = filterVehiclesArray();
        vehiclesToRender = orderFilteredArray(filteredVehicles);
    } else {
        vehiclesToRender = orderByModulo();
    }

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    document.body.appendChild(cardContainer);
    vehiclesToRender.forEach(vehicle => {
        let card = document.createElement('div');
        card.classList.add('card');
        let cardImg = document.createElement('img');
        cardImg.classList.add('card__img');
        cardImg.src = `./assets/${vehicle.imgPath}`;
        let detailsContainer = document.createElement('div');
        detailsContainer.classList.add('card__details');
        detailsContainer.innerHTML = `<h2>${vehicle.model}</h2>
                                      <div>
                                      <label>Price: <span> ${vehicle.price}</span> EUR</label>
                                      <label>Odometer: ${vehicle.odometer} km</label>
                                      </div>`;
        if (vehicle.price > 20000) {
            let span = detailsContainer.getElementsByTagName('span')[0];
            span.style.color = 'darkorange';
        }

        card.appendChild(cardImg);
        card.appendChild(detailsContainer);
        document.getElementsByClassName('card-container')[0].appendChild(card);
    });
}

function createLicenseSelect() {
    const licenses = ['All', 'A', 'B'];

    let select = document.createElement('select');
    select.name = 'license';

    licenses.forEach(license => {
        let option = document.createElement('option');
        option.value = license;
        option.innerText = license;
        select.appendChild(option);
    });
    select.addEventListener('change', (event) => {
        selectionChangedCounter++;
        document.getElementsByClassName('card-container')[0].remove();
        createVehicleCards();
    });
    document.body.appendChild(select);

}

function filterVehiclesArray() {
    selectedLicense = document.getElementsByName('license')[0].value;
    if (selectedLicense === 'All') {
        return vehicles;
    } else {
        return vehicles.filter(vehicle => {
            return vehicle.license === selectedLicense;
        })
    }

}

function orderFilteredArray(filteredArray) {
    let orderedArray = filteredArray; // in geval van 'alle' wordt gewoon de initiële array returned.

    if (selectedLicense === 'A') { // order wijze van motto's
        orderedArray = filteredArray.sort((a, b) => {
            if (a.price === b.price) {
                return a.odometer < b.odometer ? -1 : 1
            } else {
                return a.price < b.price ? -1 : 1
            }
        });
    } else if (selectedLicense === 'B') { // order wijze van auto's
        orderedArray = filteredArray.sort((a, b) => {
            let firstCarName = a.model.toLowerCase();
            let secondCarName = b.model.toLowerCase();
            return (firstCarName < secondCarName) ? -1 : (firstCarName > secondCarName) ? 1 : 0;
        }).reverse();
    }

    return orderedArray;
}


//createHeaderElements();
createLicenseSelect();
createVehicleCards();