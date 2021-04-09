const url = 'https://blockchain.info/ticker';


function takePrice() {
  // create request

  let requeste = new XMLHttpRequest();
  requeste.open("GET", url);
  requeste.responseType = "json";
  requeste.send();
  requeste.onload = function () {
    if (requeste.readyState === XMLHttpRequest.DONE) {
      if (requeste.status === 200) {
        let response = requeste.response;
        let EuroPrice = response.EUR.last;
        document.querySelector("#price_label").textContent = EuroPrice;
        console.log('Prix actualisé');
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}

setInterval(takePrice, 1000);
