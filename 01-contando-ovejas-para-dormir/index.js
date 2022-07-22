export default function contarOvejas(ovejas) {
  let ovejasFiltradas = ovejas.filter((value)=> {
    let lowerCase = value.name.toLowerCase()
    if(lowerCase.includes('a') && lowerCase.includes('n') && value.color === 'rojo') {
      return value
    }
  })

  return ovejasFiltradas
}

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
