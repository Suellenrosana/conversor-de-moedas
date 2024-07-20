// Mapeamento do botão Converter
const convertButton = document.querySelector(".convert-button")
// Mapeamento do Select 
const currencySelect = document.querySelector(".currency-select")


// Função buscar valor dentro do botão
const convertValues = async() => { 
    // O valor dentro do input
    const inputCurrencyValue = document.querySelector(".input-currency").value
    //  Valor em Real para converter
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    // Valor Convertido para outras moedas
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"). then(response=>response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const bitcoin = data.BTCBRL.high
    
// Formatação da moeda em Real
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

    // Selecionar o valor da moeda na opção Select e comparar
    // Aparencendo na tela o Valor a converter digitado no dentro do input com formatação 
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoin)

    }  
}

// Função ao trocar valor do Select  imprime o nome da moeda acima do logo
changeCurrency = () => {
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

// Ouvinte para verificar se clicou no botao e converter no valor
currencySelect.addEventListener("change", changeCurrency)
// Ouvinte para verificar se clicou no botao e converter no valor
convertButton.addEventListener("click", convertValues)
