const form = document.querySelector('.hero__form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const { firstName, lastName, email, password } = this;
    const inputs = [firstName, lastName, email, password];
    let allValid = true;

    inputs.forEach(input => {
        if ((input.name === 'email' && !validateEmail(input.value)) || !input.value) {
            input.closest('.input__group').classList.add('error');
            allValid = false;
            return;
        } else {
            input.closest('.input__group').classList.remove('error');
        };
    });

    if (allValid) form.reset();
});

const validateEmail = email => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat))
        return true;
    else
        return false;
};