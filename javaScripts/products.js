// SECTOR 
// ** variables
const allProductsBtn = document.querySelectorAll(".product-desc-btn--all");
const speciesContainers = document.querySelectorAll(".species-contents");
const productsContainers = document.querySelectorAll(".species-container");
const speciesItem = document.querySelectorAll(".species-item");
const filteredContainer = document.querySelector(".filtered-display-container");
const allProductsContainer = document.querySelector(".products-container");
const appendContainer = document.querySelector(".append-container");
const filteredContHeading = document.querySelector(
  ".filtered-container-heading"
);
const backFilteredBtn = document.querySelector(".filtered-container-btn--back");
const moreProductBtn = document.querySelector(".btn--more");
const lessProductBtn = document.querySelector(".btn--less");

// SECTOR 
// DOM's

// ** 'All Products' Btn's:
for (let i = 0; i < speciesContainers.length; i++) {
  const prodContNum = speciesContainers[i].getAttribute("data-container-num");
  const prodContName = speciesContainers[i].getAttribute("data-container-name");

  for (let j = 0; j < allProductsBtn.length; j++) {
    const prodBtnNum = allProductsBtn[j].getAttribute("data-btn-num");

    allProductsBtn[j].addEventListener("click", function () {
      if (prodContNum === prodBtnNum) {
        filteredContainer.style.display = "block";
        filteredContHeading.innerHTML = `${prodContName}`;
        filteredContHeading.style.textTransform = "uppercase";

        for (let k = 0; k < speciesItem.length; k++) {
          if (
            speciesItem[k].classList.contains(`species-item--${prodContName}`)
          ) {
            speciesItem[k].style.display = "block";
            appendContainer.appendChild(speciesItem[k]);
            window.scrollBy(0, 80);
          }
        }
      } else {
        for (let l = 0; l < speciesContainers.length; l++) {
          speciesContainers[l].style.display = "none";
        }

        allProductsContainer.style.display = "none";
      }
    })
  }
};

// 'Append-Back' btn:
backFilteredBtn.addEventListener("click", function () {
  allProductsContainer.style.display = "flex";
  filteredContHeading.innerHTML = ``;
  filteredContainer.style.display = "none";

  for (let i = 0; i < speciesContainers.length; i++) {
    speciesContainers[i].style.display = "flex";
  }

  for (let j = 0; j < speciesItem.length; j++) {
    const itemType = speciesItem[j].getAttribute("data-item-type");

    for (let k = 0; k < speciesContainers.length; k++) {
      const prodContName = speciesContainers[k].getAttribute(
        "data-container-name"
      );

      if (itemType === prodContName) {
        speciesContainers[k].appendChild(speciesItem[j]);
      }
    }

    if (speciesItem[j].classList.contains("species-item--hide")) {
      speciesItem[j].style.display = "none";
    }
  }
});

// ** 'More-Product' Btn:
moreProductBtn.addEventListener("click", function () {
  for (let i = 0; i < productsContainers.length; i++) {
    let childHidden = 0;

    if (productsContainers[i].classList.contains("species-container--hide")) {
      childHidden++;

      productsContainers[i].style.display = "block";
      window.scrollBy(0, 700 * `${childHidden}`);
    }
  }

  moreProductBtn.style.display = "none";
  lessProductBtn.style.display = "flex";
});

// ** "Less-Products" Btn
lessProductBtn.addEventListener("click", function () {
  for (let i = 0; i < productsContainers.length; i++) {
    moreProductBtn.style.display = "flex";
    lessProductBtn.style.display = "none";

    let childHidden = 0;

    if (productsContainers[i].classList.contains("species-container--hide")) {
      productsContainers[i].style.display = "none";
      childHidden++;
      window.scrollBy(0, -700 * `${childHidden}`);
    }
  }
});

// Finish displaying products! 😎✌