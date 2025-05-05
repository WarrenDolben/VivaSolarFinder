let clickCount = 0;
let appendedDiv = null;

function dropDownDetails() {
    clickCount++;
    let targetElement = document.getElementById('detailsArrow');
    if (clickCount === 1) {
        const parentElement = document.getElementById('faq1')
        appendedDiv = document.createElement('div');
        appendedDiv.innerText = 'There are many benefits to using solar energy. You can save money on your electricity bills. You can receive government incentives that help you keep your costs down. You can increase the value of your home. In terms of an environmental impact, switching to solar helps reduce greenhouse gas emissions. Switching to solar also reduces your carbon footprint.';
        appendedDiv.style.width = '52.5%';
        appendedDiv.style.margin = '10px 280px auto auto';
        parentElement.appendChild(appendedDiv);
        targetElement.style.borderRadius = '50%';
        targetElement.style.backgroundColor = 'gold';
        targetElement.style.transform = 'rotate(180deg)';
        targetElement.style.padding = "10px";
    }
    else if (clickCount === 2) {
        if (appendedDiv) {
            appendedDiv.remove();
            appendedDiv = null;
            targetElement.style.backgroundColor = 'initial';
            targetElement.style.transform = 'initial';
        }
        clickCount = 0;
    }
}