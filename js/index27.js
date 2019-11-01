let firstNumber=2
let secondNumber=3
console.log(firstNumber++)
console.log(--secondNumber)
console.log(firstNumber--)
console.log(--secondNumber)
firstNumber -= secondNumber
firstNumber=firstNumber+secondNumber

secondNumber--
console.log(`i add ${firstNumber} + ${secondNumber} and the result is ${firstNumber+secondNumber}`)
console.log(`I substract ${firstNumber} - ${secondNumber} and the result is ${firstNumber-secondNumber}`)
console.log(`i multiply ${firstNumber} * ${secondNumber} and the result is ${firstNumber*secondNumber}`)
console.log(`i divide ${firstNumber} / ${secondNumber} and the result is ${firstNumber/secondNumber}`)
console.log(`i take the remider ${firstNumber} % ${secondNumber} and the result is ${firstNumber%secondNumber}`)