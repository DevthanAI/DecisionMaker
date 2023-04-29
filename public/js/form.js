function submitForm() {
    const getFormData = (choice) => ({
        name: document.getElementById(`${choice}_name`).value,
        pro: parseInt(document.getElementById(`${choice}_pro`).value),
        con: parseInt(document.getElementById(`${choice}_con`).value),
        pro_weight: parseInt(document.getElementById(`${choice}_pro_weight`).value),
        con_weight: parseInt(document.getElementById(`${choice}_con_weight`).value)
    });

    if (document.querySelectorAll('section').length < 2) {
        alert('Please add at least two choices to compare.');
        return;
    }

    for (let i = 1; i <= document.querySelectorAll('section').length; i++) {
        if (document.getElementById(`choice${i}_name`).value === '') {
            alert('Please fill in the name of the choice in each section.');
            return;
        }
    }

    const numChoices = document.querySelectorAll('section').length;
    const choices = [];

    for (let i = 1; i <= numChoices; i++) {
        const choice = getFormData(`choice${i}`);
        choices.push(choice);
    }

    const sums = choices.map((choice) => {
        return (choice.pro * choice.pro_weight) - (choice.con * choice.con_weight);
    });

    let bestChoices = [];
    let bestSum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < sums.length; i++) {
        if (sums[i] > bestSum) {
            bestChoices = [choices[i].name];
            bestSum = sums[i];
        } else if (sums[i] === bestSum) {
            bestChoices.push(choices[i].name);
        }
    }

    const resultDiv = document.getElementById('result');
    if (bestChoices.length === 1) {
        resultDiv.textContent = `${bestChoices[0]} is the best`;
    } else {
        resultDiv.textContent = `${bestChoices.join(', ')} are tied for the best`;
    }
}