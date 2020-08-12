function mouseOver() {
  
  var elementId = document.querySelector(".beautify");

  elementId.style.background = "royalblue";
  elementId.style.color = "yellow";

  elementId.innerHTML = "Hello Everyone";
}

function mouseOut() {
  
  let elementId = document.querySelector(".beautify");

  elementId.style.background = "crimson";
  elementId.style.color = "white";

  elementId.innerHTML = "Welcome to CDAC MUMBAI!!!";
}

