// A
const addTheWorldCool = function(array) {
   ["nice", "awesome", "amazing"];
   array.push("cool");
   return array;
}
console.log(addTheWorldCool(["nice", "awesome", "amazing"])); // ['nice', 'awesome', 'amazing', 'cool']

// B
const amountOfElementsInArray = ['apples', 'pears', 'lemons'];
console.log(amountOfElementsInArray.length); // 3


// C
const selectBelgiumFromBenelux = ["Belgium", "Netherlands", "Luxembourg"];
console.log(selectBelgiumFromBenelux[0]); // Belgium

/* Other way
const selectBelgiumFromBenelux = function(array) {
    return array[0];
  };
  console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxemburg"]));
   */

// D
const lastElementInArray = ["Hare", "Guinea pig", "Chicken", "Turtle"];
console.log(lastElementInArray[3]); // Turtle

/* Other way
const lastElementInArray = function(array) {
  return array.pop();
};
// Other way

const lastElementInArray = function(array) {
  return array[array.lenght - 1];
};
console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"]));
*/

// E
// .slice
const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const impeachTrumpSlice = function(array) {
    const newArray = array.slice(1, 4);
    console.log("new: ", newArray, "The same array", array);
    return newArray;
}
console.log(impeachTrumpSlice(presidents));
// .splice
const impeachTrumpSplice = function(array) {
    const removeElement = array.splice(0, 1);
    console.log("removed: ", removeElement, "Mutated array", array);
    return array;
}
console.log(impeachTrumpSplice(presidents));

// F
const stringsTogether = function(array) {
    return array.join(" ");
}
console.log(stringsTogether(["Winc", "Academy", "is", "fun", ";-}"]));

// G
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]

/* Other way 
const arrays = function(array1, array2) {
    return array1.concat(array2);
}
console.log(arrays([1, 2, 3], [4, 5, 6]));
*/