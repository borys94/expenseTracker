export const formatPrice = (value: number) => {
  const mayor = Math.floor(value / 100)
  const minor = value % 100

  return `${mayor},${minor.toString().padStart(2, '0')}zł`
}

export const priceToString = (value: number) => {
  const mayor = Math.floor(value / 100)
  const minor = value % 100

  return `${mayor}.${minor.toString().padStart(2, '0')}`
}
