document.getElementById('submit').addEventListener('click', function() {
    const account = {
        acc_no: document.getElementById('acc_no').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        occupation: document.getElementById('occupation').value,
        phone_no: document.getElementById('phone_no').value,
        address: document.getElementById('address').value,
        pin_code: document.getElementById('pin_code').value
    };


    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];


    accounts.push(account);

   
    localStorage.setItem('accounts', JSON.stringify(accounts));

   
    document.getElementById('acc_no').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('occupation').value = '';
    document.getElementById('phone_no').value = '';
    document.getElementById('address').value = '';
    document.getElementById('pin_code').value = '';

    alert('Account added successfully!');
});