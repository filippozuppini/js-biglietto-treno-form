

const kmEl = document.getElementById('chilometri');
const etaEl = document.getElementById('eta');
const resultField = document.getElementById('risultato');

const formEl = document.querySelector('form')
const bottoneEl = document.getElementById('calcola');



bottoneEl.addEventListener('click', function (e){
    e.preventDefault();

    const age = Number(etaEl.value)
    const km = Number(kmEl.value)

    let ticket_price = km * 0.21

    if (age < 18) {
        // resultField.innerHTML = ((kmEl.value * 0,21) *  0,80) // sconto 20%
        ticket_price *=  0.80;
        resultField.innerHTML(ticket_price)
        
    } else if (age > 65) {
        // resultField.innerHTML = ((kmEl.value * 0,21) *  0,60) // sconto 40%
        ticket_price *=  0.60;
        resultField.innerHTML(ticket_price)

    }

    // console.log(ticket_price.toFixed(2));


    resultField.innerText = ticket_price.toFixed(2)

})


