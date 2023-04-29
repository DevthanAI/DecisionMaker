function submitForm() {
    const getFormData = (choice) => ({
        name: document.getElementById(`${choice}_name`).value,
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

function addChoice() {
    var newSection = document.createElement("section");
    newSection.innerHTML = `
    <br/>
    <hr>
      <h2>
        <input id="choice${document.querySelectorAll("section").length + 1}_name" type="text" placeholder="Type choice name ..." required>
      </h2>
      <div>
        <div>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro_feat">Pros</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro_feat" type="text" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro">Satisfaction Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro" type="range" min="0" max="10" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro_weight">Impact Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro_weight" type="range" min="0" max="10"" required>
        </div>
        </br>
        <div>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con_feat">Cons</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con_feat" type="text" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con">Dissatisfaction Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con" type="range" min="0" max="10" required>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con_weight">Impact Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con_weight" type="range" min="0" max="10" required>
        </div>
      </div>
    `;
    document.getElementById("newChoices").appendChild(newSection);
}
