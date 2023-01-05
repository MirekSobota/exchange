{

    const euro = 4.69;
    const usd = 4.51;
    const gbp = 5.45;
    const btc = 72000;
    const svc = 1.94;

    const exchangeRate = () => {
        const rateEuroElement = document.querySelector(".js-rateEuro");
        const rateUsdElement = document.querySelector(".js-rateUsd");
        const rateGbpElement = document.querySelector(".js-rateGbp");
        const rateBtcElement = document.querySelector(".js-rateBtc");
        const rateSvcElement = document.querySelector(".js-rateSvc");

        rateEuroElement.innerText = euro;
        rateUsdElement.innerText = usd;
        rateGbpElement.innerText = gbp;
        rateBtcElement.innerText = btc;
        rateSvcElement.innerText = svc;
    }

    const calculatingResult = (currencyChoice) => {
        const resultElement = document.querySelector(".js-result");
        const amountElement = document.querySelector(".js-amount");
        const amount = +amountElement.value;
        const rate = calculatingValue(currencyChoice);
        resultElement.innerText = `${amount.toFixed(2)} PLN =  ${(amount / rate).toFixed(2)} ${currencyChoice}`;
    }

    const calculatingValue = (currencyChoice) => {

        switch (currencyChoice) {
            case "EUR":
                return euro;

            case "USD":
                return usd;

            case "GBP":
                return gbp;

            case "BTC":
                return btc;

            case "SVC":
                return svc;

        }
    }

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const currencyFocusElement = document.querySelector(".js-currencyType");
        let currencyChoice = currencyFocusElement.value;

        calculatingResult(currencyChoice);
    })

    const init = () => {
        exchangeRate();
    }

    init();
}

