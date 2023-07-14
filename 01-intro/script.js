console.log("hallo")
console.log("geht")
console.log("das?")

// += operator => ADDs a string to the existing string in the variable
document.body.innerHTML += "<p style='font-size: 2rem;'>Geht auch das????</p>"
document.body.innerHTML += "<p style='font-size: 2rem;'>Geht auch das????</p>"
document.body.innerHTML += "<p style='font-size: 2rem;'>Geht auch das????</p>"

const li1 = "<li>1</li>"
const li2 = "<li>2</li>"
const li3 = "<li>3</li>"

// const ul = `<ul>${li1}+${li2}${li3}</ul>`
const ul = `<ul>${li1+li2+li3}</ul>`
console.log(ul)

document.body.innerHTML += ul