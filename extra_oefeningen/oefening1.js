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

function createVehicleCard(vehicles) {
    vehicles.forEach(vehicle => {
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
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
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(detailsContainer);
        document.getElementsByClassName('card-container')[0].appendChild(cardContainer);
    });
}

createVehicleCard(vehicles);