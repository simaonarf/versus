function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        showCustomAlert("As senhas não coincidem!", "error");
        return false;
    }

    const user = { email, password };
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    showCustomAlert("Usuário cadastrado com sucesso!", "success");
    document.getElementById("cadastroForm").reset();
    return false;
}

function showCustomAlert(message, type) {
    const customAlert = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");

    customAlert.className = `alert ${type === "error" ? "error" : ""}`;
    alertMessage.textContent = message;
    customAlert.classList.remove("hidden");

    setTimeout(() => customAlert.classList.add("hidden"), 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('default-checkbox');
    const submitBtn = document.getElementById('submit-btn');

    function updateButtonState() {
        submitBtn.disabled = !checkbox.checked;
    }

    checkbox.addEventListener('change', updateButtonState);

    updateButtonState();
});