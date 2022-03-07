function splitMessageAndGetLength(message, delimeter) {
  let words
  words = message.split(delimeter).length
  return words
}
console.log(splitMessageAndGetLength("putin huylo poebanoe", " "))
