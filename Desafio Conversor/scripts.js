const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency")


function convertValues() {


    const inputConvertValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-other")
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.72
    const bitcoinToday = 591.737



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConvertValue / dolarToday)


    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputConvertValue / euroToday)


    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputConvertValue / libraToday)
    }


    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputConvertValue)
}


function currencyChange() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".img-converted")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/estados-unidos.png"


    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro-logo.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra-img.png"


    }


    convertValues()

}













currencySelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)








