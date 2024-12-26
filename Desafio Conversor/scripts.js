const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency")


function convertValues() {


    const inputConvertValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-other")
    const dolarToday = 5.2
    const euroToday = 6.2
    

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



    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputConvertValue)





}

convertButton.addEventListener("click", convertValues)








