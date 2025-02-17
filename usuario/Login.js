document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");   
    const senhaInput = document.getElementById("senha");  
    const entrarButton = document.getElementById("entrar");  

    entrarButton.addEventListener("click", function(event) {
        event.preventDefault();  

        const email = emailInput.value;  
        const senha = senhaInput.value;  

        // Simulação de credenciais válidas
        const emailValido = "professoroak@gmail.com";
        const senhaValida = "senha123";

        if (email === emailValido && senha === senhaValida) {
            window.location.href = "../projeto/projeto.html";
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    });
});