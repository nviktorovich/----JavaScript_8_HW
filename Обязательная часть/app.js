'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});





const buttons = document.querySelectorAll(".featuredImgDark button")
const cartInnerCounter = document.querySelector("#cartInnerCounter")
const cart = document.querySelector(".cartIcon")
const openCart = document.querySelector(".openCart")
const body = document.querySelector("body")
const featuredDataSet = document.getElementsByClassName("featuredData")
let allShopItems = {}

for (let i = 0; i < featuredDataSet.length; i++) {
    let name = featuredDataSet[i].querySelector(".featuredName").textContent.trim()
    let price = parseFloat(featuredDataSet[i].querySelector(".featuredPrice").textContent.replace("$", '').trim())
    allShopItems[name] = {'count': 0, 'price': price, 'sum': 0}
}

document.addEventListener("click", function (event){
    for (let i = 0; i < buttons.length; i++) {
        if (event.target === buttons[i]) {
            let numberOfPositions = parseInt(document.getElementById("cartInnerCounter").textContent)
            document.getElementById("cartInnerCounter").textContent = `${numberOfPositions + 1}`
            let name = buttons[i].parentElement.parentElement.parentElement.querySelector(".featuredName").textContent.trim()
            allShopItems[name]['count'] += 1
            allShopItems[name]['sum'] = allShopItems[name]['count'] * allShopItems[name]['price']
            console.log(allShopItems)
        }
    }
})

cart.addEventListener("click", function () {
    openCart.innerHTML = ""
    if (openCart.style.display === "block") {
        openCart.style.display = "none"
    } else {
        openCart.style.display = "block"
    }
    for (let i = 0; i < Object.keys(allShopItems).length; i++) {
        let name = Object.keys(allShopItems)[i]
        let count = allShopItems[name]["count"]
        let sum = allShopItems[name]["sum"]
        if (allShopItems[name]["count"] > 0) {
            console.log(name, count, sum)
            openCart.insertAdjacentHTML(
                "beforeend",
                `<div class="represent"><p><span>${name}</span><span>x${count}</span><span>${sum}$</span></p></div>`
            )
        }
    }
})

cart.addEventListener("mouseover", function () {
    openCart.style.display = "none"
})