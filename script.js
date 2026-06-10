document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const carta = document.getElementById("carta");

    envelope.addEventListener("click", () => {
        // Suaviza o desaparecimento do envelope
        envelope.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        envelope.style.opacity = "0";
        envelope.style.transform = "scale(0.8)";

        // Aguarda a animação do envelope terminar para mostrar a carta
        setTimeout(() => {
            envelope.style.display = "none";
            
            // Remove o 'hidden' e ativa a transição visual
            carta.classList.remove("hidden");
            
            // Um leve delay para o navegador processar a remoção do hidden antes do fade-in
            setTimeout(() => {
                carta.classList.add("faded-in");
            }, 50);
            
        }, 500);
    });
});
