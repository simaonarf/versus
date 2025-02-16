document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("username").value;

    var users = JSON.parse(localStorage.getItem("users") || "[]");

    var usuarioValido = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (usuarioValido) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("userLoggedIn", "true");
        window.location.href = "/index.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});