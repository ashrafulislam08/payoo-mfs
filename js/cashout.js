document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cash-out-container").style.display = "block";

    const balanceAmount = document.getElementById("account-balance").innerText;
    const inputCashOutMoney = document.getElementById("input-cash-out").value;
    const inputPinNumber = document.getElementById("input-cash-out-pin").value;
    if (inputPinNumber === "1234") {
      const balanceNumber = parseFloat(balanceAmount);
      const cashOutMoneyNumber = parseFloat(inputCashOutMoney);
      const newAmount = balanceNumber - cashOutMoneyNumber;
      document.getElementById("account-balance").innerText = newAmount;
    } else {
      alert("Failed to cash out money! Please try again");
    }
  });
