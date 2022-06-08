// Variables
const searchBox = document.querySelector(".header-input--search");
const hidedItems = document.querySelectorAll(".species-item--hide");

// DOM's
searchBox.addEventListener("input", filterList);

// Functions
function filterList() {
  const textFromInputFiled = searchBox.value.toLowerCase();

  for (let i = 0; i < speciesItem.length; i++) {
    if (speciesItem[i].classList.contains("species-item--hide"))
      speciesItem[i].classList.toggle("species-item--hide");

    appendContainer.appendChild(speciesItem[i]);
    filteredContainer.style.display = "block";
    allProductsContainer.style.display = "none";

    let prodTexts = speciesItem[i].textContent;

    if (prodTexts.toLowerCase().includes(textFromInputFiled.toLowerCase())) {
      speciesItem[i].style.display = "";
    } else {
      speciesItem[i].style.display = "none";
    }
  }

  if (textFromInputFiled.toLowerCase() == "") {
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
    }

    for (let i = 0; i < hidedItems.length; i++) {
      if (!hidedItems[i].classList.contains("species-item--hide"))
        hidedItems[i].classList.toggle("species-item--hide");
    }
  }
}
