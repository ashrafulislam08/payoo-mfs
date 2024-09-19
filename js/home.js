// Add money to the account

const addMoney = document.getElementById("btn-add-money");

// step-1: add an event handler to the add money button inside the form
addMoney.addEventListener("click", function (event) {
  event.preventDefault();
  //   get money to be added to the account
  const addMoneyInput = document.getElementById("input-add-money").value;
  // get the pin number provided
  const pinNumberInput = document.getElementById("input-pin-number").value;
  console.log(addMoneyInput, pinNumberInput);
});
