document.querySelector('.card_number_input').oninput = () => {
    document.querySelector('.card_number_box').innerText = document.querySelector('.card_number_input').value;
}

document.querySelector('.card_holder_input').oninput = () => {
    document.querySelector('.card_holder_name').innerText = document.querySelector('.card_holder_input').value;
}

document.querySelector('.month_input').oninput = () => {
    document.querySelector('.exp_month').innerText = document.querySelector('.month_input').value;
}

document.querySelector('.year_input').oninput = () => {
    document.querySelector('.exp_year').innerText = document.querySelector('.year_input').value;
}

document.querySelector('.cvv_input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv_input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv_input').oninput = () => {
    document.querySelector('.cvv_box').innerText = document.querySelector('.cvv_input').value;
}
// ------------------------------------------------------------- vALIDATION

const cardNumberValidation = document.querySelector('.card_number_input');
const cardHolderNameValidation = document.querySelector('.card_holder_input');
const ccvValidation = document.querySelector('.cvv_input');
const submitValidation = document.querySelector('.submit_payment');

cardNumberValidation.addEventListener('keyup', (e) => {
    const error = document.getElementById('card_number_error');
    if (e.target.value.length < 19 || !e.target.value.match(/^[0-9]{19}$/)) {
        e.target.style.borderColor = 'red';
        error.classList.remove('hidden');
    } else {
        e.target.style.borderColor = 'green';
        error.classList.add('hidden');
    }

});

cardHolderNameValidation.addEventListener('keyup', (e) =>{
    const error = document.getElementById('card_number_error');

    if (e.target.value.length < 6 || !e.target.value.match(/^[a-zA-Z ]+$/)) {
        e.target.style.borderColor = 'red';
        error.classList.remove('hidden');
    } else {
        e.target.style.borderColor = 'green';
        error.classList.add('hidden');
    }

});

ccvValidation.addEventListener('keyup', (e) =>{
    const error = document.getElementById('ccv_number_error');

    if (e.target.value.length !==3 || e.target.value.match(/^[a-zA-Z ]+$/)) {
        e.target.style.borderColor = 'red';
        error.classList.remove('hidden');
    } else {
        e.target.style.borderColor = 'green';
        error.classList.add('hidden');
    }
});

