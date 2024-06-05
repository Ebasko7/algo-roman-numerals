const toRomanLazy = (num) => {
  let output = ''
  let romanNumeralToArabic = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let romanNumeralPriorityOrder = ['M','D','C','L', 'X','V','I']

  for(letter of romanNumeralPriorityOrder){
    let timesDivisible = Math.floor( num / romanNumeralToArabic[letter])
    if (timesDivisible > 0) {
      output += letter.repeat(timesDivisible)
      num -= (romanNumeralToArabic[letter] * timesDivisible)
      }
    }
  return output 
}

const toRoman = (num) => {
  let output = ''
  let romanNumeralToArabic = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }
  let romanNumeralPriorityOrder = ['M','CM','D','CD','C','XC','L','XL','X','V','IV','I']

  for(letter of romanNumeralPriorityOrder){
    let timesDivisible = Math.floor( num / romanNumeralToArabic[letter])
    if (timesDivisible > 0) {
      output += letter.repeat(timesDivisible)
      num -= (romanNumeralToArabic[letter] * timesDivisible)
      }
    }
  return output 
}

console.log(toRomanLazy(4),toRomanLazy(150),toRomanLazy(944))
console.log(toRoman(4),toRoman(150),toRoman(944))

module.exports = { toRoman, toRomanLazy };
