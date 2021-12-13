// objects to compare the keys and values for the menu

/**
 * Updates the total value of items selected in the DOM
 *
 * */
function updateTotal() {
    const total = getCheckedItemsValue()
    document.querySelector("#totalCost").textContent = `$${total}`
    document.querySelector('#totalCostError').textContent = ""
}

/**
 * Appends all items in the DOM by looping through the itemsList object
 *
 * */
function printItemsMenu() {
    // parent DOM node where menu items are to be appended
    const parent = document.querySelector("#items-menu")
        // get the keys of items object in an array
    const keys = Object.keys(window.itemsList)
        // loop through keys
    keys.forEach((key) => {
        // destructure object and get label and price from itemsList

        const price = window.itemsList[key].price
        const label = window.itemsList[key].label
        const img = window.itemsList[key].img

        // append HTML string in the parent node
        parent.innerHTML +=
            `<div class="itemSlides">
                <div class="itemName">${label}</div>
                <input type="checkbox" id="${key}" name="${key}" value="${key}" onchange="updateTotal()">
                <label for="${key}">
                    <img src="${img}">
                </label>
                <div class="itemPrice">$${price}</div>
            </div>`
    })
}
// window.onload is a function which is called after the page is fully loaded
window.onload = () => {
    printItemsMenu()
}
const itemsList = {
    pepperoni: {
        label: "Pepperoni",
        price: 13.00,
        img: "images/menu-pizza-pep.jpg",
    },
    meatLovers: {
        label: "Meat Only",
        price: 20.00,
        img: 'images/menu-pizza-meat.jpg',
    },
    cheese: {
        label: "Margherita",
        price: 15.00,
        img: 'images/menu-pizza-ch.jpg',
    },
    canadian: {
        label: "Canadian",
        price: 12.00,
        img: 'images/menu-pizza-can.jpg',
    },
    hawaiian: {
        label: "Hawaiian",
        price: 5.00,
        img: 'images/menu-pizza-hw.jpg',
    },
    deluxe: {
        label: "Deluxe",
        price: 25.00,
        img: 'images/menu-pizza-dl.jpg',
    },
}

window.itemsList = itemsList
