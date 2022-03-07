function countOccurrences(str, substr) {
  let result = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] + str[i + 1] === substr) {
      result += 1
    }
  }
  return result
}
console.log(countOccurrences("ababagalamaga", "ba"))
