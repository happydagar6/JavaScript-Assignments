// Shopping Cart Application With CRUD Operations

const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const itemQuantity = document.getElementById("itemQuantity");
const addItemButton = document.getElementById("addItemBtn");
const cartItemsContainer = document.getElementById("cartItems");
const totalAmountContainer = document.getElementById("totalAmount");


// let cart = [];
// let editItemId = null;

// addItemButton.addEventListener("click", () => {
//     const name = itemName.value.trim();
//     const price = parseFloat(itemPrice.value);
//     const quantity = parseInt(itemQuantity.value);

//     if (name === "" || isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
//         alert("Please enter valid item details.");
//         return;
//     }

//     if (editItemId !== null) {
//         for(let i = 0; i < cart.length; i++) {
//             if (cart[i].id === editItemId) {
//                 cart[i].name = name;
//                 cart[i].price = price;
//                 cart[i].quantity = quantity;
//                 break;
//             }
//         }
//         editItemId = null;
//         addItemButton.textContent = "Add Item";
//     } else {
//         const newItem = {
//             id: Date.now(),
//             name: name,
//             price: price,
//             quantity: quantity
//         };
//         cart.push(newItem);
//     }
//     itemName.value = "";
//     itemPrice.value = "";
//     itemQuantity.value = "";

//     updateScreen();
// });

// function updateScreen() {
//     cartItemsContainer.innerHTML = "";

//     let totalAmount = 0;
//     for(let i = 0; i < cart.length; i++) {
//         const item = cart[i]; // Get the current item from the cart
//         const itemTotal = item.price * item.quantity;
//         totalAmount += itemTotal;

//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;

//         const editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.style.marginLeft = "10px";
//         editButton.addEventListener("click", () => editCartItem(item.id));

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.style.marginLeft = "10px";
//         deleteButton.addEventListener("click", () => deleteCartItem(item.id));

//         listItem.appendChild(editButton);
//         listItem.appendChild(deleteButton);
//         cartItemsContainer.appendChild(listItem);
//     }
//     totalAmountContainer.textContent = totalAmount.toFixed(2);
// }

// function editCartItem(id) {
//     for(let i = 0; i < cart.length; i++) {
//         if (cart[i].id === id) {
//             itemName.value = cart[i].name;
//             itemPrice.value = cart[i].price;
//             itemQuantity.value = cart[i].quantity;
//             editItemId = id;
//             addItemButton.textContent = "Update Item";
//             break;
//         }
//     }
//     editItemId = id;
//     addItemButton.textContent = "Update Item";
// }

// function deleteCartItem(id) {
//     cart = cart.filter((item) => {
//         return item.id !== id;
//     });
//     updateScreen();
// };


let cart = [];
let editItemId = null;

addItemButton.addEventListener("click", () => {
    const name = itemName.value.trim(), price = parseFloat(itemPrice.value), quantity = parseInt(itemQuantity.value);

    if (!name || isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) return alert("Please enter valid item details.");

    if (editItemId) {
        let item = cart.find(item => item.id === editItemId); // Find the item in the cart using the editItemId

        if (item.name === name && item.price === price && item.quantity === quantity) {
            alert("No changes made to the item.");
            return;
        }
        item.name = name; // Update the name of the item
        item.price = price; // Update the price of the item
        item.quantity = quantity; // Update the quantity of the item
        editItemId = null;
        addItemButton.textContent = "Add Item"; // Change the button text back to "Add Item"
    } else {
        cart.push({ id: Date.now(), name, price, quantity: quantity }); // Add a new item to the cart
    }

    itemName.value = itemPrice.value = itemQuantity.value = ""; // Clear the input fields
    updateScreen(); // Update the screen to reflect the changes
})

function updateScreen() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <li>
            ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
            <button onclick="editCartItem(${item.id})" style="margin-left: 10px;">Edit</button>
            <button onclick="deleteCartItem(${item.id})" style="margin-left: 10px;">Delete</button>
        </li>
        `).join("");

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        totalAmountContainer.textContent = total.toFixed(2);
}

window.editCartItem = (id) => {
    let item = cart.find(item => item.id === id); // Find the item in the cart using the id
    itemName.value = item.name; // Set the name input field to the item's name
    itemPrice.value = item.price; // Set the price input field to the item's price
    itemQuantity.value = item.quantity;
    editItemId = id; // Set the editItemId to the id of the item being edited
    addItemButton.textContent = "Update Item"; // Change the button text to "Update Item"
};

window.deleteCartItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateScreen(); // Update the screen to reflect the changes
};
