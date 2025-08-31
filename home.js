document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const saveAcountNumber = 12345678901;
    const savePin = 1234;
    const getBank = document.getElementById('select-bank').value;
    const getAcountNumber = parseInt(document.getElementById('acount-number').value);
    const getAmount = parseInt(document.getElementById('add-amount').value);
    const getPin = parseInt(document.getElementById('pin').value);

    const getBalance = parseInt(document.getElementById('balance').innerText);
    

    if(saveAcountNumber !== getAcountNumber){
        alert('Please provide correct Account Number');
        return;
    }
    if(savePin !== getPin){
        alert('Please provide correct PIN Number');
        return
    }
    const totalBalance = getBalance + getAmount;
    document.getElementById('balance').innerText = totalBalance;
    
})