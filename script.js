class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ["P", "N", "R", "D"];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    if (this.userGears.indexOf(gear) < 0) {
      throw new Error(`Invalid gear: ${gear}`);
    }
    this.userGear = gear;
  }
}

const car1 = new Car("sm", "sm");
const car2 = new Car("sm", "sm");
console.log(car1);
console.log(car2);
console.log(Car instanceof Object);

Array;


// const arr = [1,2,3,5,9,6]

// const arrays = arr.map(arrs => {
//   return arrs + 3
// }).filter(small => {
//   return small > 5
// }).reduce((acc,curr)=>{
//     return acc +curr
// })


// const forEachResult = arr.forEach((ar,i)=>{
//   arr[i] = ar + 1;
  
//   });

// console.log(arrays,forEachResult, arr)




let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35},
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
  ];

  const student = students.map(stud =>{
    return stud.name.toUpperCase()
  })

  console.log(student)


  const score = students.filter(mark=> mark.marks> 60 && mark.rollNumber > 15)
    

  console.log(score)


  const totalMarks = students.reduce((acc, curr)=> acc+ curr.marks,0)
  console.log(totalMarks)


  const top = students.filter(stud => {
    return stud.marks > 60
  }).map(nam => {
    return nam.name
  })
  
  console.log(top);


  

  var string = "Welcome to this Javascript Guide!";

  function reverseSeparator(string){
    return string.split('').reverse().join('')
  }

  var z = reverseSeparator(string);
  console.log(z)


  var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];

  arrayList = [];
  console.log(arrayList)


  function isInt(num){
    return num % 1 ===0;
  }

  console.log(isInt(0))




  var firstWord = "Mary";
var secondWord = "Army";

console.log(isAnagram(firstWord, secondWord));



function isAnagram(first,second){
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  a = a.split('').sort().join('');
  b= b.split('').sort().join('')

  return a===b
}





const palindrome = (str)=>{
  str = str.toLowerCase()
  return str === str.split('').reverse().join('');
}

console.log(palindrome('AMMA'))





const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}

console.log(findVowels('yoyo'))
