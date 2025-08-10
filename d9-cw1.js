const products = [

  {

    id: 1,

    name: "Laptop",

    category: "Electronics",

    price: 75000,

    stock: 10,

    rating: 4.5

  },

  {

    id: 2,

    name: "Smartphone",

    category: "Electronics",

    price: 40000,

    stock: 0,

    rating: 4.2

  },

  {

    id: 3,

    name: "Book",

    category: "Education",

    price: 500,

    stock: 100,

    rating: 4.9

  },

  {

    id: 4,

    name: "Desk Chair",

    category: "Furniture",

    price: 3500,

    stock: 25,

    rating: 4.0

  }

];


let a = products.reduce((prev,cur)=>{
  return prev.price>cur.price ? prev : cur;
},products[0])

console.log(a)