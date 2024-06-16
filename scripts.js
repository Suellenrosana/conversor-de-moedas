// Mapeamento do botão Converter
const convertButton = document.querySelector(".convert-button")
// Mapeamento do Select 
const currencySelect = document.querySelector(".currency-select")
const selectACconverter = document.querySelector(".select-a-converter")

// Ouvinte para verificar se clicou no botao e converter no valor
currencySelect.addEventListener("change", changeCurrency)
// Ouvinte para verificar se clicou no botao e converter no valor
convertButton.addEventListener("click", convertValues)
selectACconverter.addEventListener("change", nomeMoedaAConverter)



// Função buscar valor dentro do botão
function convertValues() {
    // O valor dentro do input
    const inputCurrencyValue = document.querySelector(".input-currency").value


    // Valores das moedas Real
    const dolarToday = 5.38
    const euroToday = 5.76
    const libraToday = 6.81
    const bitcoinToday = 358.569
    //valor moeda base dolar
    const euroPDolar = 0.94
    const libraPDolar = 0.81
    const bitcoinPDolar = 27389.90
    const realPDolar = 5.06

    //valor moeda base 
    const dolarPEuro = 1.06
    const libraPEuro = 0.86
    const bitcoinPEuro = 25.843

    //valor moeda base 
    const dolarPLibra = 1.23
    const euroPLibra = 1.16
    const bitcoinPLibra = 22.292

    //valor moeda base bitcoin
    const dolarPBit = 27.402
    const euroPBit = 25.843
    const libraPBit = 22.292
    const realPBit = 143.716

    //  Valor em Real para converter
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    // Valor Convertido para outras moedas
    const currencyValueConverted = document.querySelector(".currency-value")


    // Selecionar o valor da moeda na opção Select e comparar
    // Aparencendo na tela o Valor a converter digitado no dentro do input com formatação 
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    // Formatação da moeda em Real
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}


// Função ao trocar valor do Select  imprime o nome da moeda acima do logo
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyimage.src = "./assets/dollar_eua.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyimage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyimage.src = "./assets/Libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyimage.src = "./assets/Bitcoin.png"
    }
    convertValues()
}


