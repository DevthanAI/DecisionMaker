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

function addChoice() {
    var newSection = document.createElement("section");
    newSection.innerHTML = `
    <br/>
    <hr>
      <h2>
        <input class="choice-name" id="choice${document.querySelectorAll("section").length + 1}_name" type="text" placeholder="Type choice name ..." required>
      </h2>
      <div>
        <div>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro_feat">Pros</label>
            <input class="choice-list" id="choice${document.querySelectorAll("section").length + 1}_pro_feat" type="text">
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro">Satisfaction Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much satisfaction do these pros give you?</span>
            </span>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_pro_weight">Impact Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_pro_weight" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much do these pros matter to you?</span>
            </span>
        </div>
        </br>
        <div>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con_feat">Cons</label>
            <input class="choice-list" id="choice${document.querySelectorAll("section").length + 1}_con_feat" type="text">
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con">Dissatisfaction Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much dissatisfaction do these cons give you?</span>
            </span>
            <br/>
            <label for="choice${document.querySelectorAll("section").length + 1}_con_weight">Impact Level</label>
            <input id="choice${document.querySelectorAll("section").length + 1}_con_weight" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much do these cons matter to you?</span>
            </span>
        </div>
      </div>
    `;
    document.getElementById("newChoices").appendChild(newSection);
}
