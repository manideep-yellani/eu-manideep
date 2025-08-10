const students = [

  {

    id: 1,

    name: "Alice",

    age: 20,

    grade: "A",

    marks: 85,

    enrolled: true

  },

  {

    id: 2,

    name: "Bob",

    age: 22,

    grade: "B",

    marks: 70,

    enrolled: false

  },

  {

    id: 3,

    name: "Charlie",

    age: 19,

    grade: "A",

    marks: 90,

    enrolled: true

  },

  {

    id: 4,

    name: "David",

    age: 21,

    grade: "C",

    marks: 60,

    enrolled: true

  },

  {

    id: 5,

    name: "Eva",

    age: 20,

    grade: "B",

    marks: 75,

    enrolled: false

  }

];


let a={}

for(let i of students){
  if(a[i.grade]){
    a[i.grade]+=1
  }
  else{
    a[i.grade]=1
  }
}

console.log(a)