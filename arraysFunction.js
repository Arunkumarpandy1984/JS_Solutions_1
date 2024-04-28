function getDetails(){
    console.log("Array Functions");
}

getDetails();

let arrayData = [1,2,3,[4,5,6,[7,8,[9,10]]]];
console.log(arrayData);
/*
(4) [1, 2, 3, Array(4)]
*/

// flatten 1 level.
console.log(arrayData.flat(1));
/*
(7) [1, 2, 3, 4, 5, 6, Array(3)]
*/

// flatten 2 levels.
console.log(arrayData.flat(2));
/*
(9) [1, 2, 3, 4, 5, 6, 7, 8, Array(2)]
*/

// flatten completely.
console.log(arrayData.flat(Infinity));
/*
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
