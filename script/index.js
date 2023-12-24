const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "pizza-plus.jpg",
    },

    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "tanuki.jpg",
    },

    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "foodband.jpg",
    },

    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "greedy-pizza.jpg",
    },

    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "foodoutlet.jpg",
    },

    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "pizza-burger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка<p/>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <a href="./goods.html?id=${card.id}" class="product-card">
                <div class="product-card__img">
                    <img src="./img/rest/${card.img}" alt="${card.img}">
                </div>
                <div class="product-card__description">

                <div class="product-card__description-row">
                    <h4 class="product-card__description--title">${card.title}</h4>
                    <div class="product-card__description-badge">${card.time}</div>
                </div>

                <div class="product-card__description-row">
                    <div class="product-card__description-info">

                        <div class="product-card__description-info--rairing">
                            <img src="./img/icon/star.svg" alt="star">
                            ${card.rating}
                        </div>

                        <div class="product-card__description-info--price">
                        ${card.price} ₽
                        </div>

                        <div class="product-card__description-info--gruop">
                        ${card.type}
                        </div>
                    </div>
                </div>
                
            </div>
        </a>
            `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerRests(restArray);
    }, 2000);
  }
};

const goodsFunc = () => {
  const containerGoods = document.querySelector("#goods-container");

  const goodsArray = [
    {
      id: 0,
      name: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      img: "eel.jpg",
    },

    {
      id: 1,
      name: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори",
      price: 250,
      img: "colifornia.jpg",
    },

    {
      id: 2,
      name: "Окинава стандарт",
      description:
        "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий",
      price: 250,
      img: "okinava.jpg",
    },

    {
      id: 3,
      name: "Цезарь маки хl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь",
      price: 250,
      img: "сaesar.jpg",
    },

    {
      id: 4,
      name: "Ясай маки стандарт 185 г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      img: "maki.jpg",
    },

    {
      id: 5,
      name: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      img: "roll-shrimp.jpg",
    },
  ];

  const loading = () => {
    containerGoods.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка<p/>';
  };

  const renderGoods = (array) => {
    containerGoods.innerHTML = "";

    array.forEach((card) => {
      containerGoods.insertAdjacentHTML(
        "beforeend",
        `
            <a href="./index.html?id="${card.id}" class="product-card">

              <div class="product-card__img">
                  <img src="./img/goods/${card.img}" alt="${card.img}">
              </div>

              <div class="product-card__description">

                  <div class="product-card__description-row">
                      <h5 class="product-card__description--name">${card.name}</h5>
                  </div>

                  <div class="product-card__description-row">
                      <p class="product-card__description--text">${card.description}</p>
                  </div>

                  <div class="product-card__description-row">

                      <div class="product-card__description-controls">

                          <button class="btn btn-primary">
                              В корзину
                              <img src="./img/icon/goods-cart.svg" alt="user">
                          </button>

                          <span class="product-card__description-controls--price">${card.price} ₽</span>

                      </div>

                  </div>
                  
              </div>
            </a>
        `
      );
    });
  };

  if (containerGoods) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
