
let name = document.getElementsByClassName("name")[0].value; // Use [0] to get the first element
let account_number = 123; // Example account number
let amount = document.getElementsByClassName("amount")[0].value; // Use [0] to get the first element
let pin = document.getElementsByClassName("pin_code")[0].value; 

account_number = parseInt(account_number, 10);

const stored_data = localStorage.getItem("accounts");
const accounts = stored_data ? JSON.parse(stored_data) : [];
      
const account = accounts.find(acc => parseInt(acc.acc_no, 10) === account_number);

      if(account)
     {

        console.log('found' , account);
     }

     else 
      {
        console.log('not'  );
      }

       
    

