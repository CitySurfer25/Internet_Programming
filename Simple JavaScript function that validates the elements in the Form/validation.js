document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        clearErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('Pnumber').value.trim();
        const password = document.getElementById('password').value.trim();
        const country = document.getElementById('country').value;
        const terms = document.getElementById('terms').checked;

        let valid = true;

        if (name === '') {
            showError('name', 'Name is required');
            valid = false;
        }

        if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
            showError('email', 'Valid email is required');
            valid = false;
        }

        if (phoneNumber === '' || phoneNumber.length !== 10) {
            showError('Pnumber', 'Phone number must be 10 digits');
            valid = false;
        }

        if (password === '' || password.length < 6) {
            showError('password', 'Password must be at least 6 characters');
            valid = false;
        }

        if (country === '') {
            showError('country', 'Please select a country');
            valid = false;
        }

        if (!terms) {
            showError('terms', 'You must agree to the terms and conditions');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => el.remove());
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => input.style.border = '');
    }

    function showError(id, message) {
        const element = document.getElementById(id);
        element.style.border = '2px solid red';
        const error = document.createElement('div');
        error.classList.add('error');
        error.style.color = 'red';
        error.textContent = message;
        element.parentElement.appendChild(error);
    }
});
