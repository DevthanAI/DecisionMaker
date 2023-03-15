function submitForm() {
    const getFormData = (choice) => ({
        pro: parseInt(document.getElementById(`${choice}_pro`).value),
        con: parseInt(document.getElementById(`${choice}_con`).value),
        pro_weight: parseInt(document.getElementById(`${choice}_pro_weight`).value),
        con_weight: parseInt(document.getElementById(`${choice}_con_weight`).value)
    });

    const choice1 = getFormData('choice1');
    const choice2 = getFormData('choice2');

    const choice1_sum = choice1.pro * choice1.pro_weight + choice1.con * choice1.con_weight - 1;
    const choice2_sum = choice2.pro * choice2.pro_weight + choice2.con * choice2.con_weight - 1;

    var subtitle1 = document.getElementById("pink-subtitle-1").textContent;
    var subtitle2 = document.getElementById("pink-subtitle-2").textContent;
    var subtitle3 = document.getElementById("pink-subtitle-3").textContent;

    const resultDiv = document.getElementById('result');
    if (choice1_sum > choice2_sum) {
        resultDiv.textContent = 'Choice 1 is better';
    } else if (choice1_sum < choice2_sum) {
        resultDiv.textContent = 'Choice 2 is better';
    } else {
        resultDiv.textContent = 'Both are equal';
    }
}