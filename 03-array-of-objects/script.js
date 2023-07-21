const pizzas = [
  {
    name: "Hawaii", // key / property / prop / member / field: value
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
    price: 3.99,
    currency: "EUR",
  },

  {
    image: "",
    name: "QUATTRO FORMAGGI", // quattro formaggi (=lowercase)
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
    price: 4.99,
    currency: "EUR",
  },

  {
    image: "http://source.unsplash.com/100x100?",
    name: "Margherita",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
    price: 5.99,
    currency: "EUR",
  },
];

const pizzaContainerDiv = document.querySelector(".pizza-container");

// loop over pizza objects in array
// convert each object into DIV object
for(let pizza of pizzas ) {
  const divPizza = document.createElement("div")
  // divPizza.style.backgroundColor = "green" // setting inline style

  // convert content of pizza object into pizza div content
  divPizza.innerHTML = `
  <div>${pizza.name.toUpperCase()}</div>
  <div>${pizza.price} ${pizza.currency}</div>
  `;
    
  // add a CSS class to the generated DIV
  divPizza.classList.add("pizza"); 

  // add the pizza div into the container
  pizzaContainerDiv.appendChild(divPizza)
}