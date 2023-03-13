function submitForm() {
    const choice1 = document.getElementById('choice1').value;
    const choice2 = document.getElementById('choice2').value;
    const resultDiv = document.getElementById('result');

    if (choice1 > choice2) {
        resultDiv.textContent = "choice1";
    } else if (choice2 > choice1) {
        resultDiv.textContent = "choice2";
    } else {
        resultDiv.textContent = "They are equal";
    }
}