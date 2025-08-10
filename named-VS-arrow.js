let obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    console.log(this)
  }
}
obj.print()


 obj = {
  name: 'deeecode',
  age: 200,
  print: () => {
    console.log(this)
  }
}
obj.print()


 obj = {
  name: 'deeecode',
  age: 200,
  print1: function() {
    console.log(this)
  },
  print: () => {
    console.log(this)
  }
}
obj.print1()
obj.print()


obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    const print2 = () => {
      console.log(this)
    }

    print2()
  }
}
obj.print()



obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    function print2() {
      console.log(this)
    }

    print2()
  }
}
obj.print()



