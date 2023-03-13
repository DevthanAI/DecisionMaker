function submitForm() {
    const choice1_pro = document.getElementById('choice1_pro').value;
    const choice1_con = document.getElementById('choice1_con').value;
    const choice1_pro_weight = document.getElementById('choice1_pro_weight').value;
    const choice1_con_weight = document.getElementById('choice1_con_weight').value;

    const choice2_pro = document.getElementById('choice2_pro').value;
    const choice2_con = document.getElementById('choice2_con').value;
    const choice2_pro_weight = document.getElementById('choice2_pro_weight').value;
    const choice2_con_weight = document.getElementById('choice2_con_weight').value;

    const resultDiv = document.getElementById('result');

    const choice1_sum = parseInt(choice1_pro) * parseInt(choice1_pro_weight) + parseInt(choice1_con) * parseInt(choice1_con_weight) - 1;
    const choice2_sum = parseInt(choice2_pro) * parseInt(choice2_pro_weight) + parseInt(choice2_con) * parseInt(choice2_con_weight) - 1;

    if (choice1_sum > choice2_sum) {
        resultDiv.innerHTML = 'Choice 1 is better';
    } else if (choice1_sum < choice2_sum) {
        resultDiv.innerHTML = 'Choice 2 is better';
    } else {
        resultDiv.innerHTML = 'Both are equal';
    }
}