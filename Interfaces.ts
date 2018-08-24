// type assertion
let undeclaredType: any = "this is string";

let lengthOfString: number = (undeclaredType as string).length;
lengthOfString = (<string>undeclaredType).length;

// interface
interface squareDescriptor {
  'name' : string,
  'size' : number
}

//create method accepting interface
let squareFn = (square : squareDescriptor) => {
  return square.name;
}

let square = {
  'name': 'a square',
  'lol': 666
}

let executedFn = squareFn(square);

class squareClass implements squareDescriptor {
  name : string = 'a name'
  size : number = 10
}

let square2 : squareDescriptor;
let falseSquare = {
  'size': 'a string',
  'name': 20
}
square2 = falseSquare;