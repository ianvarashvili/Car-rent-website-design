const carData = [
  {
    model: "Koenigsegg",
    type: "Sport",
    img: "assets/images/cars/car-1.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "99.00",
    oldPrice: " ",
  },
  {
    model: "Nissan GT-R",
    type: "Sport",
    img: "assets/images/cars/car-2.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "80.00",
    oldPrice: "$100.00",
  },
  {
    model: "Rolls - Royce",
    type: "Sedan",
    img: "assets/images/cars/car-3.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "96.00",
    oldPrice: " ",
  },

  {
    model: "Nissan GT-R",
    type: "Sport",
    img: "assets/images/cars/car-4.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "80.00",
    oldPrice: "$100.00",
  },
];

const container = document.querySelector(".popular-cars");

function displayCars() {
  container.innerHTML = ""; //emptying the section
  carData.forEach((car) => {
    const cardHTML = `
      <div class="car-card">
        <p class="car-model">
          ${car.model}
          <img class="fav-icon" src="assets/images/icons/fav.png" alt="" />
        </p>
        <p class="car-type">${car.type}</p>
        <img class="car-img" src="${car.img}" alt="${car.model}" />
        
        <div class="car-details">
          <div class="details-item">
            <img src="assets/images/icons/gas-station.png" alt="gas icon" />
            <p>${car.fuel}</p>
          </div>
          <div class="details-item">
            <img src="assets/images/icons/manual.png" alt="manual icon" />
            <p>${car.transmission}</p>
          </div>
          <div class="details-item">
            <img src="assets/images/icons/people.png" alt="people icon" />
            <p>${car.capacity}</p>
          </div>
        </div>

        <div class="price-and-rent">
          <p><b>$${car.price}/ </b>day</p>
          <button>Rent Now</button>
          <p class="old-price">${car.oldPrice}</p>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });
}

displayCars();
