function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText) ;

    // clear the input field 
    inputField.value = '';
    return amountValue; 

}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText ;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount ;
}

function getCurrentBalance (){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal ;
}
function updateBalance (amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount ;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount ;
    }
}
// handle deposit amount 
document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    
});

// handle withdraw amount 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});