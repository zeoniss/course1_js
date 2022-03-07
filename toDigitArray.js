function toDigitArray(element) {
  element += ""
  return element
    .split("")
    .reverse()
    .map((elementString) => +elementString)
}
