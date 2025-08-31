document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const saveAcountNumber = 12345678901;
    const savePin = 1234;
    const getBank = document.getElementById('select-bank').value;
    const getAcountNumber = parseInt(document.getElementById('acount-number').value);
    const getAmount = parseInt(document.getElementById('add-amount').value);
    const getPin = parseInt(document.getElementById('pin').value);

    const getBalance = parseInt(document.getElementById('balance').innerText);


    if (saveAcountNumber !== getAcountNumber) {
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
    const savePin = 1234; 
    const getAgentNumber = document.getElementById('agent-number').value;
    const getWithdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const getWithdrawPin = parseInt(document.getElementById('withdraw-pin').value);

    const getBalance = document.getElementById('balance').innerText;
    const currentBalance = getBalance - getWithdrawAmount;
    console.log(currentBalance)
    console.log(length.getAgentNumber);
    if(getAgentNumber.toString().length !== 11){
        alert('Provide valid Agent Number');
        return;
    }
    if(savePin !== getWithdrawPin){
        alert('Please provide correct PIN');
        return
    }

    document.getElementById('balance').innerText = currentBalance;

})

// toggle

document.getElementById('add-money-card-btn').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = "block"
    document.getElementById('cash-out-section').style.display = "none";
})

document.getElementById('cash-out-card-btn').addEventListener('click',function(){
    document.getElementById('cash-out-section').style.display = "block";
    document.getElementById('add-money-section').style.display = "none"
})