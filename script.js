const populate = async (value, currency) => {
    let myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_zTf2ZYghFVtK8XLESQBRg5YjN30Pekz2LfIth5X3&base_currency=" + currency;

    let response = await fetch(url);
    let rJson = await response.json();
    console.log(rJson)
    document.querySelector(".output").style.display = "block" 


    for (let key of Object.keys(rJson["data"])) {
        myStr += `<tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
</tr>
`

    }
    const tableBody = document.querySelector('tbody');

    tableBody.innerHTML = myStr;


}

const btn = document.getElementById('btn')
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("k")
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency);
})




