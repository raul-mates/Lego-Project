class RecommendedItem {
  constructor(title, price, imgSrc, additionalInfo) {
    this.title = title;
    this.price = price;
    this.imgSrc = imgSrc;
    this.additionalInfo = additionalInfo;
  }
}

const item1 = new RecommendedItem(
  "Evadarea lui T. rex",
  "549,99 lei",
  "/imgs/recommended for you images/76956.png",
  "Noutati"
);

const item2 = new RecommendedItem(
  "Atacul Giganotozaurului și Therizinosaurului",
  "699,99 lei",
  "/imgs/recommended for you images/76949.png",
  "Noutati"
);

const item3 = new RecommendedItem(
  "Evadarea dinozaurilor T. rex și Atrociraptor",
  "459,99 lei",
  "/imgs/recommended for you images/76948.png",
  "Noutati"
);
const item4 = new RecommendedItem(
  "Transport de Piroraptor și Dilophosaurus",
  "229,99 lei",
  "/imgs/recommended for you images/76951.png",
  "Noutati"
);

const item5 = new RecommendedItem(
  "Capturarea Velociraptorilor Blue și Beta",
  "149,99 lei",
  "/imgs/recommended for you images/76946.png",
  "Noutati"
);

const item6 = new RecommendedItem(
  "Ambuscada avionului de către Quetzalcoatlus",
  "259,99 lei",
  "/imgs/recommended for you images/76947.png",
  "Noutati"
);
const item7 = new RecommendedItem(
  "Triceratops - ambuscada camionetei",
  "229,99 lei",
  "/imgs/recommended for you images/76950.png",
  "Noutati"
);
const item8 = new RecommendedItem(
  "Evadarea dinozaurului T. rex",
  "259,99 lei",
  "/imgs/recommended for you images/76944.png",
  "Noutati"
);
const item9 = new RecommendedItem(
  "Dinozaur Atrociraptor:  Urmărirea cu motocicleta",
  "99,99 lei",
  "/imgs/recommended for you images/76945.png",
  "Noutati"
);
const item10 = new RecommendedItem(
  "Mercedes-AMG F1 W12 E Performance și Mercedes-AMG Project One",
  "219,99 lei",
  "/imgs/recommended for you images/76909.png",
  ""
);
const item11 = new RecommendedItem(
  "Evadarea cu barca a dinozaurului Baryonyx",
  "399,99 lei",
  "/imgs/recommended for you images/76942.png",
  ""
);
const item12 = new RecommendedItem(
  "Urmărirea Pteranodonului",
  "99,99 lei",
  "/imgs/recommended for you images/76943.png",
  "Noutati"
);

const itemsArr = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
];

const renderRecommendedList = () => {
  const listItems = document.querySelectorAll(".recommended-item");
  listItems.forEach((item, i) => {
    item.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="carousel-item-container">
      <a class="carousel-inner-text add-to-wishlist">
          <ion-icon
              class="carousel-heart"
              name="heart-outline"
          ></ion-icon>
          Adauga in Lista de dorinte
          </a>
      <a href="#" id="carousel-item-body">
          <img
          class="carousel-inner-image"
          src="${itemsArr[i].imgSrc}"
          />
      </a>
      ${
        itemsArr[i].additionalInfo !== ""
          ? `<p id="additional-info" class="carousel-inner-text">
      ${itemsArr[i].additionalInfo}
      </p>`
          : ""
      }
      </div>
      <div class="price-add-to-cart">
      <a href="#" id="carousel-outter-heading">${itemsArr[i].title}</a>
      <span class="carousel-outter-text">${itemsArr[i].price}</span>
      <a href="#" id="recommended-carousel-button">Adauga in cos</a>
      </div>
      `
    );
  });
};
renderRecommendedList();
