//console.log('Calculation started');


document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = getValueFromInputField('income');
    //console.log(typeof incomeValue, incomeValue);

    const foodValue = getValueFromInputField('food');

    const rentValue = getValueFromInputField('rent');

    const clothesValue = getValueFromInputField('clothes');

    const totalExpenses = foodValue + rentValue + clothesValue;

    const balance = incomeValue - totalExpenses;

    setTextContentById('total-expenses', totalExpenses);
    setTextContentById('balance-amount', balance);
})

document.getElementById('save-btn').addEventListener('click', function () {
    // Saving Amount Calculation:
    const incomeValue = getValueFromInputField('income');
    const saveValue = getValueFromInputField('save-field');
    const saveValuePercentage = saveValue / 100;
    const savingAmount = incomeValue * saveValuePercentage;
    setTextContentById('saving-amount', savingAmount);

    // Remaining Balance Calculation: 
    const foodValue = getValueFromInputField('food');
    const rentValue = getValueFromInputField('rent');
    const clothesValue = getValueFromInputField('clothes');
    const totalExpenses = foodValue + rentValue + clothesValue;

    const balance = incomeValue - totalExpenses;
    const remainingBalance = balance - savingAmount;
    setTextContentById('remaining-balance', remainingBalance);
})