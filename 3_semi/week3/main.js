const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
let myMoney = 0
let amountMoney = 0
const baitoMoney = document.getElementById("baito-money")
const jihankiMoney = document.getElementById("jihanki-money")
const syozikin = document.getElementById("my-money")
const tonyu = document.getElementById("amount-money")

const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

teaButton.onclick = () => {
  if (amountMoney >= 100) {
    const image = createImage("tea")
    display.append(image)
    amountMoney -= 100
    tonyu.textContent = amountMoney
  }
}
cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    const image = createImage("coke")
    display.append(image)
    amountMoney -= 130
    tonyu.textContent = amountMoney
  }
}

baitoMoney.onclick = function() {
  myMoney += 1000
  console.log(myMoney)
  syozikin.textContent = myMoney
}
jihankiMoney.onclick = function() {
  if (myMoney >= 100) {
    myMoney -= 100
    syozikin.textContent = myMoney
    console.log(myMoney)
    amountMoney += 100
    tonyu.textContent = amountMoney
    console.log(amountMoney)
  }
}
