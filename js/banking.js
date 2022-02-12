// add event listener
document.getElementById('deposit-button').addEventListener('click', function() {
    event.preventDefault();
    // console.log('deposit button clicked');

    //get input value
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    // console.log(depositAmount);
    const depositAmount = parseFloat(depositAmountText);



    // pass input value to the deposit section 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // console.log(depositTotalText);
    // depositTotal.innerText = depositAmount;
    depositTotal.innerText = previousDepositTotal + depositAmount;


    // sum deposit + balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;




    // to clear input values
    depositInput.value = '';
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {
    // to fix page reloading issue
    event.preventDefault();
    // console.log('withdraw button clicked') to check working or not

    // 1 get input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText)
    const withdrawAmount = parseFloat(withdrawAmountText);

    // 2 pass input value to the withdraw section
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // to clear input values
    withdrawInput.value = '';
});