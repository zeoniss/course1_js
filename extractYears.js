let text =
  "Usually people who were born in 1995 can find they first job not later than in 2020 but 2200 also 1938 not earlier than in 2012. Number 11999 is not included in the result because it"
function extractYears(text) {
  let splitText = text.split(" ")
  return splitText
}
console.log(extractYears(text))
