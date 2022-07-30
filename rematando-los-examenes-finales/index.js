export default function sumPairs(numbers, result) {
  for(let i = 0; i<= numbers.length; i++) {
    const secondValue = numbers.find(second => {
      numbers.splice(1,i)
      return numbers[i] + second === result
    })
    if(secondValue) {
      return Array(numbers[i], secondValue)
      break;
    }
  }
  // ¡Y no olvides compartir tu solución en redes!
  return null
}
