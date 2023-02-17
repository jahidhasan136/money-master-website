

function expensesAmount(){
    
    
    const foodInputField = document.getElementById('food');
    const foodInputFieldValue = foodInputField.value;
    const foodInputFieldString = parseInt(foodInputFieldValue);
    
    const rentInputField = document.getElementById('rent');
    const rentInputFieldValue = rentInputField.value;
    const rentInputFieldString = parseInt(rentInputFieldValue);
    
    const clothesInputField = document.getElementById('clothes');
    const clothesInputFieldValue = clothesInputField.value;
    const clothesInputFieldString = parseInt(clothesInputFieldValue);
    
    const incomeInputField = document.getElementById('income');
    const incomeInputFieldValue = incomeInputField.value;
    const incomeInputFieldString = parseInt(incomeInputFieldValue);

    //validation for negative number
    if(foodInputFieldString <= 0 || rentInputFieldString <= 0 || clothesInputFieldString <= 0 || incomeInputFieldString <=0 ){
        alert('input should be integer');
        return
    }


        const totalExpenses = foodInputFieldString + rentInputFieldString + clothesInputFieldString;

        const totalExpensesAmount = document.getElementById('total-expenses');
        totalExpensesAmount.innerText = totalExpenses;
    
        //total balance
    
        const totalBalance = incomeInputFieldString - totalExpenses;
    
        const totalAmount = document.getElementById('total-balance');
        totalAmount.innerText = totalBalance;




}

function totalSavingAmoun(){
    const incomeInputField = document.getElementById('income');
    const incomeInputFieldValue = incomeInputField.value;
    const incomeInputFieldString = parseInt(incomeInputFieldValue);

    const parcentice = document.getElementById('parcentice');
    const parcenticeInputFieldValue = parcentice.value;
    const parcenticeInputFieldString = parseInt(parcenticeInputFieldValue);

    const incomeParcentice = incomeInputFieldString * parcenticeInputFieldString / 100;

    const saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = incomeParcentice;
}


function remainingBalance(){
    const balanceAmount = document.getElementById('total-balance');
    const balanceValue = balanceAmount.innerText;
    const balanceValueString = parseInt(balanceValue);

    const savingAmount = document.getElementById('save-amount');
    const savingAmountValue = savingAmount.innerText;
    const savingAmountString = parseInt(savingAmountValue);

    const remainigBalance = balanceValueString - savingAmountString;

    const remainig = document.getElementById('remaining-balance');
    remainig.innerText = remainigBalance;
}


document.getElementById('btn-calculate').addEventListener('click', function(){
    expensesAmount();
})

document.getElementById('btn-save').addEventListener('click', function(){
    totalSavingAmoun();
    remainingBalance();
})




