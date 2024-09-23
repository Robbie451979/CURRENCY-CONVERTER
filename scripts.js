
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/The USA.jpeg"

    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }
}
function convertValues() {

    const dolarToday = 5.2
    const euroToday = 6.2

    

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency", currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }



    changeCurrency()

    console.log(convertedValue)

}