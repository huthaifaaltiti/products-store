/* 
** NOTE
issue 🤔:
To filter the new appended children's, from lowest price, highest price, and the oldest release time.

** TODO
procedure 📃:
1- get all the price for all items (loop through them).  
2- push the prices to a new array.
3- sort items from lowest to highest and vis-versa. 
4- the index for each ordered items, will be given for 'flex-order'.
*/

// SECTOR
// Variables
const lowerPriceBtn = document.querySelector(".lower-price");
const higherPriceBtn = document.querySelector(".higher-price");
const releaseDateBtn = document.querySelector(".release-date");

let priceArr = [];
let dateArr = [];

// SECTOR
// Functions:

// ** sorting from lowest to highest:
function sortPriceAcc() {
  for (let i = 0; i < speciesItem.length; i++) {
    if (speciesItem[i].parentElement.className == "append-container") {
      let itemPrice = speciesItem[i].getAttribute("data-item-price");

      priceArr.push(itemPrice);
      priceArr.sort(function (a, z) {
        return a - z;
      });
    }
  }
}

// ** sorting from highest to lowest:
function sortPriceDesc() {
  sortPriceAcc();
  priceArr.reverse();
}

// ** sorting releasing dates:
function sortDates() {
  for (let i = 0; i < speciesItem.length; i++) {
    if (speciesItem[i].parentElement.className == "append-container") {
      let itemDate = speciesItem[i].getAttribute("data-item-date");

      dateArr.push(itemDate);
      dateArr.sort();
    }
  }
}

// SECTOR
// DOM's

// ** Filtering to the lowest:
lowerPriceBtn.addEventListener("click", function () {
  sortPriceAcc();

  for (let j = 0; j < speciesItem.length; j++) {
    let itemDataPrice2 = speciesItem[j].getAttribute("data-item-price");

    if (speciesItem[j].parentElement.className == "append-container") {
      for (let k = 0; k < priceArr.length; k++) {
        if (priceArr[k] == itemDataPrice2) {
          speciesItem[j].style.order = priceArr.indexOf(priceArr[k]);
        }
      }
    }
  }
});

// ** Filtering to the highest:
higherPriceBtn.addEventListener("click", function () {
  sortPriceDesc();

  for (let j = 0; j < speciesItem.length; j++) {
    let itemDataPrice2 = speciesItem[j].getAttribute("data-item-price");

    if (speciesItem[j].parentElement.className == "append-container") {
      for (let k = 0; k < priceArr.length; k++) {
        if (priceArr[k] == itemDataPrice2) {
          speciesItem[j].style.order = priceArr.indexOf(priceArr[k]);
        }
      }
    }
  }
});

// ** Filtering to the released time:
releaseDateBtn.addEventListener("click", function () {
  sortDates();

  for (let j = 0; j < speciesItem.length; j++) {
    let itemDate2 = speciesItem[j].getAttribute("data-item-date");

    if (speciesItem[j].parentElement.className == "append-container") {
      for (let k = 0; k < dateArr.length; k++) {
        if (dateArr[k] == itemDate2) {
          speciesItem[j].style.order = dateArr.indexOf(dateArr[k]);
        }
      }
    }
  }
});

// ## Finish filtering! ##
