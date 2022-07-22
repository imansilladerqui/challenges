export default function isValid(letter) {
  console.log(letter)
  let parentesis = 0
  let brackets = 0 
  let corchetes = 0
  let isEmpty = false

  for(let i = 0; i <letter.length; i++) {
      (letter[i] === '(') && parentesis++
      
      if (letter[i] === ')') {
        if (letter[i-1] === '(' || i === 0) {
          isEmpty = true
        }
        parentesis--
      }

      (letter[i] === '{') && brackets++
      (letter[i] === '}') && brackets--
      (letter[i] === '[') && corchetes++
      (letter[i] === ']') && corchetes--
  }

  // ¡No dejes que el Grinch gane!
  if( parentesis === 0 && brackets === 0 && corchetes === 0 && isEmpty === false) {
    return true 
  } else {
    return false
  }
}
