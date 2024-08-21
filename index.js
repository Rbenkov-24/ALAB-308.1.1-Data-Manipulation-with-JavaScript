//--------------Part 1: Math Problems------------------
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5
const allDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`All number divisible by 5: ${allDivisibleBy5}`);

//check if the first number is larger than the last
const firstLargerThanLast = n1 > n4;
console.log(
  `The first number (${n1}) is larger than the last number (${n4}): ${firstLargerThanLast}`
);

// Check if the sum of the numbers is 50
const isSum50 = n1 + n2 + n3 + n4 === 50;
console.log(`The sum of the numbers is 50: ${isSum50}`);

// Check if there are at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`There are at least two odd numbers: ${isTwoOdd}`);

// Check if no number is larger than 25
const allUnderOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`No number larger than 25: ${allUnderOrEqual25}`);

//Check if all numbers are unique
const isUnique =
  n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4;
console.log(`All numbers are unique: ${isUnique}`);

// Combine all checks into a single validation
const isValid = isSum50 && isTwoOdd && allUnderOrEqual25 && isUnique;
console.log(`Overall validation: ${isValid}`);

//this code combines all conditions into a single boolean expression.
// It is an alternative approach not recommended for readability because combining multiple logical (validation) checks into one expression instead of breaking it into separate lines makes the code harder to understand and debug.

const dontDoThis =
  n1 + n2 + n3 + n4 === 50 && // Check if the sum of the numbers is 50
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 && // Ensure at least two of the numbers are odd
  n1 <= 25 && // Ensure no number is greater than 25
  n2 <= 25 &&
  n2 <= 25 &&
  n3 <= 25 &&
  n4 <= 25 &&
  n1 !== n2 && // Ensure all numbers are unique
  n1 !== n3 &&
  n1 !== n3 &&
  n1 !== n4 &&
  n2 !== n3 &&
  n2 !== n4 &&
  n3 !== n4;
console.log(`Alternative validation: ${dontDoThis}`);



//--------------------Part 2: Practical Math----------------

const distance = 1500;
const fuelCostPerGallon = 3; // cost of fuel per gallon in dollars
const budget = 175; //fuel budget in dollars

//different speeds and their associated fuel efficiencies
const speeds = [55, 60, 75]; // Speeds in miles per hour
const efficiency = [30, 28, 23]; // Fuel efficiencies in miles per gallon

// calculate and log trip details
const calculateTripDetails = (speed, efficiency) => {
  // Calculate gallons needed
  const gallons = distance / efficiency;
  // Calculate total cost
  const cost = gallons * fuelCostPerGallon;
  // Calculate time required
  const time = distance / speed;
// Check if within budget
  const withinBudget = cost <= budget;

  console.log(
    `At ${speed} mph: Gallons needed: ${
      Math.round(gallons * 100) / 100
    }, Total cost: $${Math.round(cost * 100) / 100}, Time: ${
      Math.round(time * 100) / 100
    } hours, Within budget: ${withinBudget}`
  );
};

calculateTripDetails(55, 30);
calculateTripDetails(60, 28);
calculateTripDetails(75, 23);
