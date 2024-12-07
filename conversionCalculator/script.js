const exchangeRates = {
    eur: 4.2,
    usd: 3.9,
    gbp: 5.0,
};

document.getElementById('convert-btn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid numeric amount.');
        return;
    }

    if (!exchangeRates[currency]) {
        alert("Invalid currency type selected.");
        return;
    }

    const result = (amount / exchangeRates[currency]).toFixed(2);
    alert(`Converted amount: ${result} ${currency.toUpperCase()}`);
});
