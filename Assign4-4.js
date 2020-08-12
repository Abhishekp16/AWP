let counter = 1;

function increament() {
  
  let counterEle = document.querySelector("#counterid");

  counter = counter + 1;

  counterEle.innerHTML = counter;

}

function decreament() {
  
  let counterEle = document.querySelector("#counterid");

  counter = counter - 1;

  counterEle.innerHTML = counter;

}