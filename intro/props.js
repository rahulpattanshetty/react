function ComponentOne(props) {
  let numbers = []
  function greet(name) {
    console.log("hello", name);
  }
  function addToNum(num) {
    numbers.push(num)
    return numbers
  }

  ComponentTwo({name: "virat" ,city:"bangalore", greet: greet, add: addToNum})
}

function ComponentTwo(props) {
  console.log(props.name, props.city, props.greet)
  props.greet("Vijay")
  console.log(props.add(10))
  console.log(props.add(20))
}

ComponentTwo()