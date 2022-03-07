function calculateRoundedRating(number) {
  if (number > 4 && number < 0) return Math.round(number * 2) / 2
}
console.log(calculateRoundedRating(2.223766))
