let balance = 1240;
let totalDeposit = 0;
let totalWithdraw = 0;

function updateBalance() {
    document.getElementById('balance-amount').innerText = `$${balance}`;
    document.getElementById('deposit-amount').innerText = `$${totalDeposit}`;
    document.getElementById('withdraw-amount').innerText = `$${totalWithdraw}`;
}

function depositMoney() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    if (depositAmount > 0) {
        balance += depositAmount;
        totalDeposit += depositAmount;
        updateBalance();
        depositInput.value = '';
    } else {
        alert("Please enter a valid deposit amount.");
    }
}

function withdrawMoney() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        totalWithdraw += withdrawAmount;
        updateBalance();
        withdrawInput.value = '';
    } else {
        alert("Please enter a valid withdraw amount.");
    }
}

updateBalance();
