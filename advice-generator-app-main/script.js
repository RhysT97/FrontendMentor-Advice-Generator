const dice_btn = document.querySelector(".dice");
const quote = document.querySelector(".quote");
const advice_id = document.getElementById("advice-id");

dice_btn.addEventListener("click", generateQuote);


function generateQuote() {
    let url = "https://api.adviceslip.com/advice";
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        advice_id.innerHTML = data.slip.id;
        quote.innerHTML = data.slip.advice;
    })
}