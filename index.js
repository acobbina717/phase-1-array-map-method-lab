const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  return tutorials.map(element => { // map through elements in tutotials
    const split = element.split(" ") // split the elements in tutorials by space between
    return split.map(element => { // map through elements that were split
      const newTut = element.charAt(0).toUpperCase() + element.substring(1) // UpperCase the frist index of each element(string) & concat the rest of the string text to the uppercased first index
      return newTut // return value
    }).join(" ") // Join elements split by space 
  })

}
