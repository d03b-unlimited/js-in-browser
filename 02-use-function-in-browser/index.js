// grab HTML elements
const input = document.querySelector(".user-string"); // INPUT
const button = document.querySelector(".btn-reverse"); // TRIGGERS FUNCTION
const divOutput = document.querySelector(".output"); // OUTPUT

// big picture
/**
 * user triggers some action
 * we catch the INPUT from the user
 * the INPUT of the user will become the INPUT of our FUNCTION
 * the function does something with the INPUT and we get OUTPUT
 * we display the OUTPUT
 */
// exectute code when user clicks button
button.onclick = function() {
  const output = reverseString(input.value)
  // output the result of our function to a HTML div
  // innerHTML => content of a tag (e.g. a div)
  divOutput.innerHTML = output
}

/**
 * Task: Reverse string
 * 
 * Create a function called reverseString 
 * that takes in input a string and returns the same string reversed. 
 * 
 * For example: 
 * console.log(reverseString("table")); // "elbat" 
 * console.log(reverseString("blabla")); // "albalb" 
 * console.log(reverseString("")); // "" 
 * console.log(reverseString("tomato")); // "otamot" 
 * console.log(reverseString("cat")); // "tac" 
 * 
 * INPUT: string
 * OUTPUT: string
 * 
 * LOGIC: Reverse the string
 * Reverse the characters in the string
 * Example: 
 * - Character at index 0 becomes LAST item
 * - Character at LAST position becomes first item
 * 
 * String durchloopen => so oft wie string length ist
 * 
 * Beispiel: abc => Länge 3 => Loop läuft drei mal: a, b, c => c b a ???
 * 
 * 
 */


// LOGIC: to get from INPUT => OUTPUT
/**
 * Steps visualized for helping to FIND the logic
 * ""
 * a => "a"
 * b => "ba"
 * c => "cba"
 */

// use INPUT variable as parameter
function reverseString(stringy) {
  // OUTPUT variable => usually easier to define it INSIDE function
  let stringyReversed = ""; // "" => "cba"

  // LOGIC
  for (let char of stringy) {
    // links= alter string => rechts: neuer string
    // just pack NEW character at BEGINNING of old string
    stringyReversed = char + stringyReversed;
  }

  // always return output AFTER loop (except search)
  return stringyReversed
}








