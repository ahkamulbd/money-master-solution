function getValueFromInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldFloat = parseFloat(inputFieldValue);
    //inputField.value = '';

    return inputFieldFloat;
}



function setTextContentById(inputId, value) {
    const textContent = document.getElementById(inputId);
    textContent.innerText = value;
}
