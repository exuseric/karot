export const capitalize = (str) => {
  const capitalized = str.split(' ').map((word) => {
    const letter = word.substr(0, 1).toUpperCase()
    const remainders = word.substr(1)
    return letter + remainders
  })

  return capitalized.join(' ')
}
