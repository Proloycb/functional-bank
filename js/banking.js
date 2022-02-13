function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';

    return amountValue ;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText ;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText ;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText ;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    const previousbalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousbalanceTotal + amount ;
    }
    else{
        balanceTotal.innerText = previousbalanceTotal - amount ;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }

    /*const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value ;
    const newDepositAmount = parseFloat(depositAmountText);*/
    
    // get current deposit
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText ;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + newDepositAmount; */
    

    // update balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText ;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal + newDepositAmount ; */

});
// handle withdraw balance
document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount > currentBalance){
        console.log('You cannot withdraw more than what you have in your account');
    }

    /*const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value ;
    const newWithdrawAmount = parseFloat(withdrawAmountText);*/
    
    // get current withdraw
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText ;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount; */
    

    // update balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText ;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal - newWithdrawAmount ; */

});

