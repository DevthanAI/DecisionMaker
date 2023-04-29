function addChoice() {
    let newSection = document.createElement("section");
    let numChoices = document.querySelectorAll("section").length + 1;

    newSection.innerHTML = `
    <br/>
    <hr>
      <h2>
        <input class="choice-name" id="choice${numChoices}_name" type="text" placeholder="Type choice name ..." required>
      </h2>
      <div>
        <div>
            <br/>
            <label for="choice${numChoices}_pro_feat">Pros</label>
            <input class="choice-list" id="choice${numChoices}_pro_feat" type="text">
            <br/>
            <label for="choice${numChoices}_pro">Satisfaction Level</label>
            <input id="choice${numChoices}_pro" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much satisfaction do these pros give you?</span>
            </span>
            <br/>
            <label for="choice${numChoices}_pro_weight">Impact Level</label>
            <input id="choice${numChoices}_pro_weight" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much do these pros matter to you?</span>
            </span>
        </div>
        </br>
        <div>
            <br/>
            <label for="choice${numChoices}_con_feat">Cons</label>
            <input class="choice-list" id="choice${numChoices}_con_feat" type="text">
            <br/>
            <label for="choice${numChoices}_con">Dissatisfaction Level</label>
            <input id="choice${numChoices}_con" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much dissatisfaction do these cons give you?</span>
            </span>
            <br/>
            <label for="choice${numChoices}_con_weight">Impact Level</label>
            <input id="choice${numChoices}_con_weight" type="range" min="0" max="10">
            <span class="tooltip">
                <img src="img/info.png" alt="Info">
                <span class="tooltiptext">How much do these cons matter to you?</span>
            </span>
        </div>
      </div>
    `;

    document.getElementById("newChoices").appendChild(newSection);
}
