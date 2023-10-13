function handleCostDown(event) {
    if (event.key === 'Enter') {
        calculateShipping();
    }
}

function subscribe() {
    const buttonElement = document.querySelector('.js-button');
    if (buttonElement.innerText === 'subscribe') {
        buttonElement.innerHTML = 'subscribed';
        buttonElement.classList.add('is-subscribed')
    } else {
        buttonElement.innerHTML = 'subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function calculateShipping() {
    const inputElement = document.querySelector('.js-input');
    let cost = parseFloat(inputElement.value);
    if (isNaN(cost)) {
        alert("Please enter a valid number for the cost of the order.");
        return;
    }
    if (cost < 40) {
        cost = cost + 10;
    }
    else{
        cost = cost ;
    }
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}