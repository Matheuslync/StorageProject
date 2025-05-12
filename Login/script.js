document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.bi-eye-fill');

    eyeIcon.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';

        eyeIcon.classList.toggle('bi-eye-fill');
        eyeIcon.classList.toggle('bi-eye-slash-fill');
    });

    document.getElementById("login").addEventListener("click", login); 
});

function login(){
    var nome = $("#username").val();
    var senha = $("#password").val();

    if(nome && senha && nome === "admin" && senha === "12345"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000),
        };

        localStorage.setItem("usuario", JSON.stringify(user));

        window.location.href = "/loja/index.html";
    }else{
        document.getElementById("error-modal").style.display = "flex";

    }
}

function fecharError(){
    document.getElementById("error-modal").style.display = "none";
}
