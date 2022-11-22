const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password');
const error = document.querySelector('.error-msg');
const submit = document.querySelector('button');

// Checks if the passwords in the Password and Confirm Password
// fields match
function confirmPasswordMatch() {
    if (password.value === confirm.value) {
        error.textContent = '';
        password.classList.remove('error');
        confirm.classList.remove('error');
        submit.disabled = false;
    } else {
        error.textContent = '* Passwords do not match';
        password.classList.add('error');
        confirm.classList.add('error');
        submit.disabled = true;
    }
};

password.addEventListener('change', function(event) {
    confirmPasswordMatch();
});

confirm.addEventListener('change', function(event) {
    confirmPasswordMatch();
});