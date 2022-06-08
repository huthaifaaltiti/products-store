// Variables
const cartIcon = document.querySelector(".header-item--cart");
const cartContainer = document.querySelector(".cart-container");
const addToCartBtn = document.querySelectorAll(".product-desc-btn--cart");
const cartContents = document.querySelector(".cart-contents");
const cartTotalPrice = document.querySelector(".cart-total-price");
const cartClearAllBtn = document.querySelector(
  ".cart-container-btn--clear-all"
);

let cartItemCounter = 0;

// Changing position for cart and man-contents container
cartIcon.addEventListener("click", function () {
  if (cartContainer.style.right == "-100%") {
    cartContainer.style.right = "0";
  } else {
    cartContainer.style.right = "-100%";
  }

  if (allProductsContainer.style.transform == "translateX(0rem)") {
    allProductsContainer.style.transform = "translateX(-33rem)";
  } else {
    allProductsContainer.style.transform = "translateX(0rem)";
  }
});

// Adding items to cart
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", addToCart);
}

// This function appends a children to a cart content container
function addToCart(event) {
  let btn = event.target;
  let btnParent = btn.parentElement;
  let btnGrandParent0 = btnParent.parentElement;
  let btnGrandParent1 = btnGrandParent0.parentElement;
  let btnGrandParent2 = btnGrandParent1.parentElement;

  let itemName = btnGrandParent1.children[0].children[1].innerText;
  let itemImg = btnGrandParent2.children[0].children[0].src;
  let itemPrice = btnGrandParent1.children[3].children[1].children[0].innerText;
  let itemCurrency =
    btnGrandParent1.children[3].children[1].children[1].innerText;

  const cartCreatRow = document.createElement("div");
  cartCreatRow.classList.add("cart-row-item");
  cartCreatRow.innerHTML = ` 
  <div class="cart-row-item-img">
    <img src="${itemImg}" alt="milk bottle" />
  </div>

  <div class="cart-row-item-name">
    <h4>${itemName}</h4>
  </div>

  <div class="cart-row-item-price">
    <h4 class="heading-4">
      <span>${itemPrice}</span>
      <span>${itemCurrency}</span>
    </h4>
  </div>

  <div class="cart-row-item-num">
    <form>
      <input
        type="number"
        name="num"
        min="1"
        max="100"
        value='1'
        class="cart-row-item-quantity-num"
      />
    </form>
  </div>

  <div class="cart-row-item-price--total">
    <h4 class="heading-4">
      <span>${itemPrice}</span>
      <span>${itemCurrency}</span>
    </h4>
  </div>

  <div class="cart-row-item-btn">
    <button class="btn-de cart-item-btn--remove">Remove</button>
  </div>`;
  cartContents.appendChild(cartCreatRow);

  // Updating all cart row price mount
  const quantityFields = document.querySelectorAll(
    ".cart-row-item-quantity-num"
  );
  for (let i = 0; i < quantityFields.length; i++) {
    quantityFields[i].value = 1;
    quantityFields[i].addEventListener("change", updateToTotal);
  }

  // Activating remove item btn
  const cartRowRemoveBtns = document.querySelectorAll(".cart-item-btn--remove");

  for (let i = 0; i < cartRowRemoveBtns.length; i++) {
    cartRowRemoveBtns[i].addEventListener("click", removeFromCart);
  }

  // Collecting cart item prices
  totalCartPrice();

  cartItemCounter++;
  cartIcon.children[1].innerText = cartItemCounter;

  // Clear all items btn
  if (cartContents.childElementCount > 2) {
    cartClearAllBtn.style.display = "Block";
    cartClearAllBtn.addEventListener("click", clearAllCartItems);
  }
}

// This function updates the total price of the items
function updateToTotal(event) {
  numOfItems = event.target;
  numOfItemsParent = numOfItems.parentElement;
  numOfItemsGrandParent0 = numOfItemsParent.parentElement;
  numOfItemsGrandParent1 = numOfItemsGrandParent0.parentElement;

  itemRowPriceParent = numOfItemsGrandParent1.querySelector(
    ".cart-row-item-price"
  );
  itemRowTotalPriceParent = numOfItemsGrandParent1.querySelector(
    ".cart-row-item-price--total"
  );
  itemRowPriceContent = itemRowPriceParent.children[0].children[0];
  itemRowPrice = itemRowPriceContent.innerText;

  itemRowTotalPrice = numOfItems.value * itemRowPrice;

  itemRowTotalPriceContent = itemRowTotalPriceParent.children[0].children[0];

  itemRowTotalPriceContent.innerText = itemRowTotalPrice;

  totalCartPrice();
}

// This function collects all item prices
function totalCartPrice() {
  let totalCartRowsPrice = 0;

  const cartRowTotalPrice = document.querySelectorAll(
    ".cart-row-item-price--total"
  );

  for (let i = 0; i < cartRowTotalPrice.length; i++) {
    cartRowTotalPriceContent = Number(
      cartRowTotalPrice[i].children[0].children[0].innerText
    );
    totalCartRowsPrice += cartRowTotalPriceContent;
  }

  cartTotalPrice.children[1].innerText = totalCartRowsPrice + " JD";
}

// This function collects all item prices
function removeFromCart(event) {
  cartItemCounter--;
  cartIcon.children[1].innerText = cartItemCounter;

  removeBtn = event.target;
  removeBtnParent = removeBtn.parentElement;
  removeBtnGrandParent = removeBtnParent.parentElement;

  removeBtnGrandParent.remove();

  totalCartPrice();

  if (cartContents.childElementCount == 2)
    cartClearAllBtn.style.display = "none";
}

// Clear all items, zero cart, zero the all items price
function clearAllCartItems() {
  const cartRowItems = document.querySelectorAll(".cart-row-item");
  for (let i = 0; i < cartRowItems.length; i++) {
    cartRowItems[i].remove();
  }

  if (cartContents.childElementCount == 1)
    cartClearAllBtn.style.display = "none";

  cartItemCounter = 0;
  cartIcon.children[1].innerText = cartItemCounter;
  cartTotalPrice.children[1].innerText = 0 + " JD";
}

// ## Finish cart! ##
