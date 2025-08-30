// console.log('script connected');
// login button function

document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const saveNumber = 12345678910;
    const savePin = 1234;

    const getNumber = parseInt(document.getElementById('phn-number').value);
    const getPin = parseInt(document.getElementById('password').value);

    if(saveNumber === getNumber && savePin === getPin){
        window.location.href= './home.html';
    }
    else{
        alert("Invalid")
    }

})