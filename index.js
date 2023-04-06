const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const convertedValueEl = document.getElementById("converted-value");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/5f9d1c87f7250159c9c9b17d/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      const convertedValue = (worthFirstEl.value * rate).toFixed(2);
      worthSecondEl.value = convertedValue;
      convertedValueEl.innerText = `${worthFirstEl.value} ${currencyFirstEl.value} = ${convertedValue} ${currencySecondEl.value}`;
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
