const sections = document.querySelectorAll("section")

console.log(sections)

let maxClasses = 0
let itemWithMaxClasses

// loope durch sections
// prüfe ob aktuelle section in der loop MEHR klassen hat als vorige sections
// wenn ja: speicher element als neues item mit meisten klassen
// wenn nicht: ignore
sections.forEach(section => {
  if(section.classList.length > maxClasses) {
    itemWithMaxClasses = section
    maxClasses = section.classList.length
  }
})
console.log(itemWithMaxClasses, maxClasses)

// console.log("Greetings from for..of")
// for(let sect of sections) {
//   console.log(sect)
// }


// convert NodeList to NORMAL JS Array
// vorteil: dann können wir alle array functions benutzen:
// map, filter, reduce, find
const normalArray = Array.from(sections)
console.log(normalArray)


// Beispiel-Array von Produkten
const products = [
  {
    id: 1,
    title: "Produkt 1",
    price: 19.99
  },
  {
    id: 2,
    title: "Produkt 2",
    price: 59.99
  },
  {
    id: 3,
    title: "Produkt 3",
    price: 39.99
  },
  // Fügen Sie hier weitere Produkte hinzu, falls erforderlich
];

// Sie können das Array jetzt verwenden oder weiter anpassen, wie Sie möchten.


let maxPrice = 0

// find maximum
for(let product of products) {
  // if current product has bigger price => this becomes our NEW maximum price
  if(product.price > maxPrice) {
    maxPrice = product.price
  }
}

console.log(maxPrice)

// MINDFUCK version of the same as above
const max = products.reduce((max, item) => {
  return item.price > max ? item.price : max
}, 0)
console.log(max)