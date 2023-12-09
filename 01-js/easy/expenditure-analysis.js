/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

//this entire code is chatgpt-ed. gave 40+min still understood nothing. Please help!!!

function calculateTotalSpentByCategory(transactions){
  const categoryTotals = {};
  length = transactions.length

for (let i = 0; i < length; i++) {
  const transaction = transactions[i];
  const { category, price } = transaction;

  if (categoryTotals[category] === undefined) {
    categoryTotals[category] = price;
  } else {
    categoryTotals[category] += price;
  }
}

const result = [];

for (const category in categoryTotals) {
  const totalSpent = categoryTotals[category];
  result.push({ category, totalSpent });
}

return result

}

module.exports = calculateTotalSpentByCategory;
