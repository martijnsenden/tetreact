function shuffleArray(array) {
  let i
  let j = 0
  let temp = null
  const shuffledArray = array

  for (i = shuffledArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = shuffledArray[i]
    shuffledArray[i] = shuffledArray[j]
    shuffledArray[j] = temp
  }

  return shuffledArray
}

export { shuffleArray }
