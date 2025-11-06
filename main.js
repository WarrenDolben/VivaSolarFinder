let clickCount = 0;
let appendedDiv = null;

function dropDownDetails() {
    clickCount++;
    let targetElement = document.getElementById('detailsArrow');
    let faqRow = targetElement.parentNode;
    if (clickCount === 1) {
        const parentElement = document.getElementById('faq1')
        appendedDiv = document.createElement('div');
        appendedDiv.innerText = '\rThere are many benefits to using solar energy. You can save money on your electricity bills. You can receive government incentives that help you keep your costs down. You can increase the value of your home. In terms of an environmental impact, switching to solar helps reduce greenhouse gas emissions. Switching to solar also reduces your carbon footprint.';
        appendedDiv.style.width = '80%';
        appendedDiv.style.margin = '0 15rem';
        appendedDiv.style.fontWeight = '300';
        appendedDiv.style.fontSize = '1.5rem';
   
        faqRow.insertAdjacentElement('afterend', appendedDiv);
        
        targetElement.style.transform = 'rotate(180deg)';
    }
    else if (clickCount === 2) {
        if (appendedDiv) {
            appendedDiv.remove();
            appendedDiv = null;
            targetElement.style.transform = 'initial';
        }
        clickCount = 0;
    }
}

const inputField = document.getElementById('zip');
const originalPlaceholder = inputField.getAttribute('placeholder');

inputField.addEventListener('focus', function () {
    this.setAttribute('placeholder', '');
});

inputField.addEventListener('blur', function() {
    this.setAttribute('placeholder', originalPlaceholder);
});

const inputField2 = document.getElementById('zip2');
const originalPlaceholder2 = inputField2.getAttribute('placeholder');

inputField2.addEventListener('focus', function () {
    this.setAttribute('placeholder', '');
});

inputField2.addEventListener('blur', function() {
    this.setAttribute('placeholder', originalPlaceholder2);
});

const inputField3 = document.getElementById('zip3');
const originalPlaceholder3 = inputField3.getAttribute('placeholder');

inputField3.addEventListener('focus', function () {
    this.setAttribute('placeholder', '');
});

inputField3.addEventListener('blur', function() {
    this.setAttribute('placeholder', originalPlaceholder3);
});