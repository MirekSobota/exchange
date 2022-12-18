{
    const amountElement = document.querySelector(".js-amount");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");
    const currencyFocusElement = document.querySelector(".js-currencyType");

    const euro = 4.6913;
    const usd = 4.5119;
    const gbp = 5.4557;
    const btc = 74533;
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

    const holdSubmit = formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        calculatingValue();
        
        const currencyChoice = currencyFocusElement.value;
        const amount = +amountElement.value;
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

       

        const result = amount / rate;
        
        resultElement.innerText = `${amount.toFixed(2)} PLN =  ${result.toFixed(2)} ${currencyChoice}`;
    })
const init = () => {
    exchangeRate();
    holdSubmit();
}
   
init();
}