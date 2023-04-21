function showVal() {
    document.getElementById('choice1_pro').addEventListener('input', function () {
        document.getElementById('choice1_pro_value').textContent = this.value;
    });
}

function submitForm() {
    const getFormData = (choice) => ({
        pro: parseInt(document.getElementById(`${choice}_pro`).value),
        con: parseInt(document.getElementById(`${choice}_con`).value),
        pro_weight: parseInt(document.getElementById(`${choice}_pro_weight`).value),
        con_weight: parseInt(document.getElementById(`${choice}_con_weight`).value)
    });

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
            bestChoices = [i + 1];
            bestSum = sums[i];
        } else if (sums[i] === bestSum) {
            bestChoices.push(i + 1);
        }
    }

    const resultDiv = document.getElementById('result');
    if (bestChoices.length === 1) {
        resultDiv.textContent = `Choice ${bestChoices[0]} is the best`;
    } else {
        resultDiv.textContent = `Choices ${bestChoices.join(', ')} are tied for the best`;
    }
}


function addChoice() {
    var newSection = document.createElement("section");
    newSection.innerHTML = `
      <h2>Choice ${document.querySelectorAll("section").length + 1}
        <label for="choice${document.querySelectorAll("section").length + 1}_name">Name</label>
        <input id="choice${document.querySelectorAll("section").length + 1}_name" type="text" required>
      </h2>
      <div>
        <div>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro_feat">What's good about this?</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro_feat" type="text" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro">How good?</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro" type="range" min="0" max="10" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro_weight">How much of a big deal is this?</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro_weight" type="range" min="0" max="10"" required>
        </div>
        </br>
        <div>
            <label for="choice${document.querySelectorAll("section").length + 1}_con_feat">What's bad about this?</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con_feat" type="text" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con">How bad?</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con" type="range" min="0" max="10" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con_weight">How much of a big deal is this?</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con_weight" type="range" min="0" max="10" required>
        </div>
      </div>
    `;
    document.getElementById("newChoices").appendChild(newSection);
}
