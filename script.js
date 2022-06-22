const boxForm = document.getElementById('box-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');

const p_fistName = document.getElementById('p_firstName');
const p_lastName = document.getElementById('p_lastName');
const p_email = document.getElementById('p_email');
const p_password = document.getElementById('p_password');

button.addEventListener('click', event => {
    event.preventDefault();

    if (firstName.value === '') {
        p_fistName.style.visibility = 'visible';
        firstName.style.border = '1px solid hsl(0, 100%, 74%)';
    } else {
        p_fistName.style.visibility = 'hidden';
        firstName.style.border = '1px solid hsl(246, 25%, 77%)';
    }
    
    if (lastName.value === '') {
        p_lastName.style.visibility = 'visible';
        lastName.style.border = '1px solid hsl(0, 100%, 74%)';
    } else {
        p_lastName.style.visibility = 'hidden';
        lastName.style.border = '1px solid hsl(246, 25%, 77%)';
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false) {
        p_email.style.visibility = 'visible';
        email.style.border = '1px solid hsl(0, 100%, 74%)';
    } else {
        p_email.style.visibility = 'hidden';
        email.style.border = '1px solid hsl(246, 25%, 77%)';
    }

    if (password.value === '') {
        p_password.style.visibility = 'visible';
        password.style.border = '1px solid hsl(0, 100%, 74%)';
    } else {
        p_password.style.visibility = 'hidden';
        password.style.border = '1px solid hsl(246, 25%, 77%)';
    }

    if (firstName.value != '' && lastName.value != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === true && password.value != '') {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
        button.textContent = 'Form submitted';
    }

    firstName.addEventListener('click', () => {
        button.textContent = 'Claim your free trial';
    })
})