# Currency Converter Web Application ✨

## Overview
This is a simple and user-friendly **Currency Converter** web application built using **HTML**, **CSS**, and **JavaScript**, utilizing the powerful API from [CurrencyConverter.io](https://currencyconverter.io). 💵 The app allows users to select a base currency and input an amount to see the equivalent value in other currencies.

## Features
- 📈 Real-time currency conversion powered by CurrencyConverter.io API.
- 🔹 Dynamic results displayed in a clean table format.
- 🗓 Dropdown menu for selecting base currency.
- ➕ Intuitive interface to input quantity for conversion.
- 🔓 Cross-browser compatibility.

## How It Works
1. Enter the quantity you want to convert.
2. Select a base currency from the dropdown menu.
3. Click the **Submit** button.
4. View converted values in different currencies displayed in a table.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **CurrencyConverter.io API**

## Installation & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/Harjot2552/currency-converter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```

3. Open the `index.html` file in your preferred web browser.

## API Integration
The application integrates the [CurrencyConverter.io API](https://currencyconverter.io) to fetch the latest exchange rates. Ensure you have a valid API key for proper operation.

## Example API Request
```javascript
let apiKey = "your_api_key_here";
let url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=USD`;
```

## Screenshots
![Currency Converter](https://harjotrocks.com/javascript/currency-converter/)

## Code Snippet
Here is a key portion of the code responsible for fetching and displaying the conversion results:
```javascript
const populate = async (value, currency) => {
    let url = `https://api.currencyapi.com/v3/latest?apikey=your_api_key&base_currency=${currency}`;
    let response = await fetch(url);
    let rJson = await response.json();

    let output = '';
    for (let key in rJson.data) {
        output += `<tr><td>${key}</td><td>${rJson.data[key].code}</td><td>${Math.round(rJson.data[key].value * value)}</td></tr>`;
    }
    document.querySelector('tbody').innerHTML = output;
};
```


---

📍 **Developed by [Harjot Singh](https://github.com/Harjot2552)** ✨

