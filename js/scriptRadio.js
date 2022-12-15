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

    let amount = amountElement.value;

    switch (currencyChoice) {
        case "EUR":
            amount = amount / euro;
            resultElement.innerText = amount.toFixed(3) + " EURO";
            break;

        case "USD":
            amount = amount / usd;
            resultElement.innerText = amount.toFixed(3) + " USD";
            break;

        case "GBP":
            amount = amount / gbp;
            resultElement.innerText = amount.toFixed(3) + " GBP";
            break;

        case "BTC":
            amount = amount / btc;
            resultElement.innerText = amount.toFixed(6) + " BTC";
            break;

        case "SVC":
            amount = amount / svc;
            resultElement.innerText = amount.toFixed(3) + " SVC";
            break;

    }
})