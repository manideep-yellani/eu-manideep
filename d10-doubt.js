// 1. Find the department with the highest average salary
let ans;
const employees = [
  { name: "Alice", department: "HR", salary: 40000 },
  { name: "Bob", department: "IT", salary: 50000 },
  { name: "Charlie", department: "IT", salary: 60000 },
  { name: "David", department: "HR", salary: 45000 }
];
// Output: "IT" (average salary 55000);


// 2. Get the top 2 products with highest total sales (price × quantity)
const products = [
  { name: "Laptop", price: 1000, quantity: 4 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 800, quantity: 5 }
];
// Output: ["Phone", "Tablet"]


// 3. Group books by genre , output = {fiction:[] , non-fiction:[]}
const books = [
  { title: "Book A", genre: "Fiction", year: 2015 },
  { title: "Book B", genre: "Non-Fiction", year: 2020 },
  { title: "Book C", genre: "Fiction", year: 2018 },
  { title: "Book D", genre: "Non-Fiction", year: 2010 }
];
ans=Object.groupBy(books,book=>book.genre)
console.log(ans)

// 4. Get list of customers who placed orders in the last 30 days
const orders = [
  { id: 1, customer: "Alice", date: "2025-07-20" },
  { id: 2, customer: "Bob", date: "2025-08-05" },
  { id: 3, customer: "Charlie", date: "2025-06-15" }
];
// Assume today = 2025-08-08   // Output: ["Alice", "Bob"]
today=[2025,8,8]
ans=orders.filter((order)=>{
dates=order.date.split('-')
if( Number(dates[0])!==today[0]){
return false
}
if( Number(dates[1])===today[1] ){return true}
if(Number(dates[1])===today[1]-1 && Number(dates[2])>=13){return true}
return false
  
})
ans=ans.map(order=>order.customer)
console.log(ans)

// 5. Create leaderboard from game scores (highest score wins)
const games = [
  { player: "Alice", score: 40 },
  { player: "Bob", score: 60 },
  { player: "Alice", score: 70 },
  { player: "Bob", score: 55 }
];
// Output: [{player:"Alice",score:70},{player:"Bob",score:60}]
const leaderboard = Object.values(
  games.reduce((acc, cur) => {
    // If player not in acc OR current score is higher, update
    if (!acc[cur.player] || cur.score > acc[cur.player].score) {
      acc[cur.player] = { player: cur.player, score: cur.score };
    }
    return acc;
  }, {})
)
.sort((a, b) => b.score - a.score) // Sort by score descending
.slice(0, 2); // Take top 2

console.log(leaderboard);

// 6. Merge orders with customer details (join by id)
const customers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const ordersList = [
  { orderId: 101, customerId: 1 },
  { orderId: 102, customerId: 2 }
];
// Output: [
//   { orderId: 101, customerId: 1, name: "Alice" },
//   { orderId: 102, customerId: 2, name: "Bob" }
// ]


// 7. Find overlapping bookings
const bookings = [
  { id: 1, start: "2025-08-01", end: "2025-08-05" },
  { id: 2, start: "2025-08-04", end: "2025-08-06" },
  { id: 3, start: "2025-08-10", end: "2025-08-12" }
];
// Output: [[1,2]]  // booking 1 and 2 overlap
function findOverlaps(bookings) {
  const overlaps = [];
  
  for (let i = 0; i < bookings.length; i++) {
    for (let j = i + 1; j < bookings.length; j++) {
      const aStart = new Date(bookings[i].start);
      const aEnd = new Date(bookings[i].end);
      const bStart = new Date(bookings[j].start);
      const bEnd = new Date(bookings[j].end);

      // Check if booking i overlaps booking j
      if (aStart <= bEnd && aEnd >= bStart) {
        overlaps.push([bookings[i].id, bookings[j].id]);
      }
    }
  }

  return overlaps;
}

console.log(findOverlaps(bookings)); // [[1, 2]]