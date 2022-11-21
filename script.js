const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password');
const error = document.querySelector('.error-msg');

function confirmPasswordMatch() {
    if (password.value === confirm.value) {
        error.textContent = '';
        password.classList.remove('error');
        confirm.classList.remove('error');
    } else {
        error.textContent = '* Passwords do not match';
        password.classList.add('error');
        confirm.classList.add('error');
    }
};

password.addEventListener('change', function(event) {
    confirmPasswordMatch();
});

confirm.addEventListener('change', function(event) {
    confirmPasswordMatch();
});