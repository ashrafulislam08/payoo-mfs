// Add money to the account

const addMoney = document.getElementById("btn-add-money");

// step-1: add an event handler to the add money button inside the form
addMoney.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("add-money-container").style.display = "block";
  document.getElementById("cash-out-container").style.display = "hidden";
  //   get money to be added to the account
  const addMoneyInput = document.getElementById("input-add-money").value;
  // get the pin number provided
  const pinNumberInput = document.getElementById("input-pin-number").value;
  //   verify pin number
  // not a good way to validate
  if (pinNumberInput === "1234") {
    // get the current amount
    let balance = document.getElementById("account-balance").innerText;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    document.getElementById("account-balance").innerText = newBalance;
  } else {
    alert("Failed to add money! Please try again");
  }
});
