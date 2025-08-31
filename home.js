
// function get input value

function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value;
}

// function get input number 

function getInputNumber(id) {
    const number = parseInt(document.getElementById(id).value);
    return number;
}

// function get inner line number

function getInnerTextNumber(id) {
    const number = parseInt(document.getElementById(id).innerText);
    return number;
}


// important variable
const saveAccountNumber = 12345678901;
const savePin = 1234;

// Add Money

document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const getBank = getInputValue('select-bank');
    const getAccountNumber = getInputNumber('acount-number');
    const getAmount = getInputNumber('add-amount');
    const getPin = getInputNumber('pin');
    const getBalance = getInnerTextNumber('balance');

    if (saveAccountNumber !== getAccountNumber) {
        alert('Please provide correct Account Number');
        return;
    }
    if (savePin !== getPin) {
        alert('Please provide correct PIN Number');
        return
    }
    const totalBalance = getBalance + getAmount;
    document.getElementById('balance').innerText = totalBalance;
})


// cash out function
document.getElementById('withdraw-btn').addEventListener("click", function (e) {
    e.preventDefault();
    const getAgentNumber = getInputValue('agent-number');
    const getWithdrawAmount = getInputNumber('withdraw-amount');
    const getWithdrawPin = getInputNumber('withdraw-pin');
    const getBalance = getInnerTextNumber('balance');
    const currentBalance = getBalance - getWithdrawAmount;

    if (getAgentNumber.length != 11) {
        alert('Provide valid Agent Number');
        return;
    }
    if (savePin !== getWithdrawPin) {
        alert('Please provide correct PIN');
        return
    }
    document.getElementById('balance').innerText = currentBalance;
})



// toggle function

function toggle(id) {
    const section = document.getElementsByClassName("Features");
    for (const sec of section) {
        sec.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// toggle

document.getElementById('add-money-card-btn').addEventListener('click', function () {
    toggle('add-money-section');
})

document.getElementById('cash-out-card-btn').addEventListener('click', function () {
    toggle('cash-out-section');

})

document.getElementById('transfer-card-btn').addEventListener('click', function () {
    toggle('transfer-money-section');

})

document.getElementById('bonus-card-btn').addEventListener('click', function () {
    toggle('bonus-section');

})

document.getElementById('pay-bill-card-btn').addEventListener('click', function () {
    toggle('pay-bill-section');

})

document.getElementById('transaction-card-btn').addEventListener('click', function () {
    toggle('transaction-section');

})