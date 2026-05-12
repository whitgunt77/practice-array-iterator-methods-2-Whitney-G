// Task 1: Using forEach()
const cities = ["Tokyo", "London", "New York", "Paris", "Sydney"];
cities.forEach(city => {
    console.log(city.toUpperCase());
});
/*
Expected Output:
TOKYO
LONDON
NEW YORK
PARIS
SYDNEY
*/

// Task 2: Transforming with map()
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log("\nSquares:", squares);
/*
Expected Output:
Squares: [1, 4, 9, 16, 25]
*/

// Task 3: Filtering with filter()
const scores = [85, 42, 90, 75, 30, 100];
const highScores = scores.filter(score => score >= 80);
console.log("\nHigh Scores:", highScores);
/*
Expected Output:
High Scores: [85, 90, 100]
*/

// Task 4: Finding with find() and findIndex()
const favoriteFood = ["Taco", "Sushi", "Pizza", "Burger", "Pasta"];
const firstLongFood = favoriteFood.find(food => food.length > 4);
const firstLongFoodIndex = favoriteFood.findIndex(food => food.length > 4);

console.log("\nFirst food > 4 letters:", firstLongFood);
console.log("Index of that food:", firstLongFoodIndex);
/*
Expected Output:
First food > 4 letters: Sushi
Index of that food: 1
*/

// Task 5: Checking conditions with some() and every()
const temperatures = [72, 85, 92, 68, 75];
const anyAbove90 = temperatures.some(temp => temp > 90);
const allAbove50 = temperatures.every(temp => temp > 50);
const tempResults = [anyAbove90, allAbove50];

console.log("\nTemperature Results:", tempResults);
/*
Expected Output:
Temperature Results: [true, true]
*/

// Task 6: Reducing with reduce()
const totalBudget = 200;
const prices = [45, 30, 55, 20];
const remainingBudget = prices.reduce((acc, price) => {
    return acc - price;
}, totalBudget);

console.log("\nRemaining Budget:", remainingBudget);
/*
Expected Output:
Remaining Budget: 50
*/