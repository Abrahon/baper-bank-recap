
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textEelementValueString = textElement.innerText;
    const textElemenetValue = parseFloat(textEelementValueString);
    //textElement.innerText = '';
    return textElemenetValue;
}
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}