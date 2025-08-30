document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const getBank = document.getElementById('select-bank').value;
    const getAcountNumber = document.getElementById('acount-number').value;
    const getAmount = parseInt(document.getElementById('add-amount').value);
    const getPin = document.getElementById('pin').value;

    const getBalance = parseInt(document.getElementById('balance').innerText);
    
    const totalBalance = getBalance + getAmount;
    document.getElementById('balance').innerText = totalBalance;
    
})