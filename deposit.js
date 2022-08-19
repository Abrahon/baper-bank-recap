
document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total');
    console.log(newDepositAmount);
    console.log(previousDepositTotal);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);


})