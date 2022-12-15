let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyFocusElement = document.querySelector(".js-currencyType");
let rateEuroElement = document.querySelector(".js-rateEuro");
let rateUsdElement = document.querySelector(".js-rateUsd");
let rateGbpElement = document.querySelector(".js-rateGbp");
let rateBtcElement = document.querySelector(".js-rateBtc");
let rateSvcElement = document.querySelector(".js-rateSvc");

let euro = 4.6913;
let usd = 4.5119;
let gbp = 5.4557;
let btc = 74533;
let svc = 1.94;

rateEuroElement.innerText = euro;
rateUsdElement.innerText = usd;
rateGbpElement.innerText = gbp;
rateBtcElement.innerText = btc;
rateSvcElement.innerText = svc;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currencyChoice = currencyFocusElement.value;
    let amount = +amountElement.value;
    let rate;


    switch (currencyChoice) {
        case "EUR":
            rate = euro;
            break;

        case "USD":
            rate = usd;
            break;

        case "GBP":
            rate = gbp;
            break;

        case "BTC":
            rate = btc;
            break;

        case "SVC":
            rate = svc;
            break;
    }

    const result = amount / rate;
    resultElement.innerText = `${amount.toFixed(2)} PLN =  ${result.toFixed(2)} ${currencyChoice}`;
})