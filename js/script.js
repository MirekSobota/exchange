{

    const formElement = document.querySelector(".js-form");
    const currencyFocusElement = document.querySelector(".js-currencyType");

    const euro = 10.69;
    const usd = 45.51;
    const gbp = 55.45;
    const btc = 19.25;
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

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const currencyChoice = currencyFocusElement.value;
        let rate;


        const calculatingValue = () => {

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
        }



        const calculatingResult = () => {
            const resultElement = document.querySelector(".js-result");
            const amountElement = document.querySelector(".js-amount");
            const amount = +amountElement.value;

            resultElement.innerText = `${amount.toFixed(2)} PLN =  ${(amount / rate).toFixed(2)} ${currencyChoice}`;
        }

        calculatingValue();
        calculatingResult();
    })

    const init = () => {
        exchangeRate();
    }

    init();
}

