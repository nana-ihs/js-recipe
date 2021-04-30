const display = document.getElementById("display")

const oneButton = document.getElementById("one-button")
const twoButton = document.getElementById("two-button")
const threeButton = document.getElementById("three-button")
const fourButton = document.getElementById("four-button")
const fiveButton = document.getElementById("five-button")
const sixButton = document.getElementById("six-button")
const sevenButton = document.getElementById("seven-button")
const eightButton = document.getElementById("eight-button")
const nineButton = document.getElementById("nine-button")
const zeroButton = document.getElementById("zero-button")

const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multipliedButton = document.getElementById("multiplied-button")
const dividedButton = document.getElementById("divided-button")

let count = 0

oneButton.onclick = function() {
  count += 1
  display.textContent = count
}
minusButton.onclick = function() {
  count -= 1
  display.textContent = count
}
doubleButton.onclick = function() {
  count *= 2
  display.textContent = count
}
