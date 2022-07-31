{
    const welcome = () => {
        console.log("Cześć!");
    };

    const currencyConverterResult = (amount, outputCurrency) => {
        const eurToPln = 4.75;
        const usdToPln = 4.32;
        const chfToPln = 4.88;

        switch (outputCurrency) {
            case "EUR": return amount / eurToPln;
            case "USD": return amount / usdToPln;
            case "CHF": return amount / chfToPln;
        }
    };

    const resultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const outputCurrency = outputCurrencyElement.value;
        const amount = amountElement.value;
        const result = currencyConverterResult(amount, outputCurrency);

        resultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        welcome();
    };

    init();
}