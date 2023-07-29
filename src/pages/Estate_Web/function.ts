const minPrice = (price: string): number => {
  return parseInt(price.split(' ')[0])
}
const maxPrice = (price: string): number => {
  return parseInt(price.split(' ')[2])
}
const isDefault = (str: string) => {
  return str.split(' ').includes('(any)')
}

export { minPrice, maxPrice, isDefault }
