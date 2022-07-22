export default function listGifts(letter) {
 var resultado = {}
  letter.split(" ")
    .filter(regalo => regalo.charAt(0)!== "_" && regalo!== "")
    .map( regalo => {
      resultado[regalo] = (resultado[regalo]|| 0 ) + 1
    })
  return resultado
}
