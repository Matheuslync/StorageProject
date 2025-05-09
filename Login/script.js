document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.bi-eye-fill');

    eyeIcon.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';

        passwordInput.type = isPassword ? 'text' : 'password';

        eyeIcon.classList.toggle('bi-eye-fill');
        eyeIcon.classList.toggle('bi-eye-slash-fill');
    });

});
