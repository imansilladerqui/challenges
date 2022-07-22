export default function daysToXmas(date) {
  let daysInSeconds = 86400
  let xMas = new Date('Dec 25, 2021')
  const elapsed = (xMas - date) / 1000;

  // ¡Y no olvides compartir tu solución en redes!

  return Math.ceil(elapsed/daysInSeconds)

}

const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2)
