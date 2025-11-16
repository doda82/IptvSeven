document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // MODAL DE DETALHES DO PRODUTO (Somente WhatsApp)
    // ===============================
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    
    // Procura o botão de compra dentro do Modal.
    const modalBuyBtn = modal ? modal.querySelector("#btn-whats-modal") : null; 
    const modalClose = document.querySelector(".modal-close");

    // Evento para ABRIR o modal
    document.querySelectorAll('.product-card .btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            // O código para preencher a imagem e a descrição deve vir aqui.
            // Para simplificar, vou focar apenas no botão de WhatsApp.
            
            // Supondo que você tem uma função para preencher os dados:
            // updateModalContent(e.target.closest('.product-card')); 
            
            modal.classList.add("ativo");
            document.body.style.overflow = "hidden";
        });
    });

    // 🛑 LÓGICA DO BOTÃO WHATSAPP 🛑
    modalBuyBtn?.addEventListener("click", (e) => {
        e.preventDefault(); // Garante que o clique não faça nada além do que queremos
        
        const suporte1 = '5531991814249'; 
        const suporte2 = '5531987002923'; 

        const numeroEscolhido = Math.random() > 0.5 ? suporte1 : suporte2;
        
        const titulo = modalTitle.textContent;
        const preco = modalPrice.textContent.replace("R$", "").trim();

        const message = `Olá! Tenho interesse no *${titulo}* por R$ ${preco}. Pode me explicar melhor sobre este plano?`;

        const link = `https://wa.me/${numeroEscolhido}?text=${encodeURIComponent(message)}`;
        
        // Abre o link em uma nova aba
        window.open(link, '_blank');
    });
    
    // Eventos para FECHAR o modal
    modalClose?.addEventListener("click", () => {
        modal.classList.remove("ativo");
        document.body.style.overflow = "auto";
    });

    modal?.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("ativo");
            document.body.style.overflow = "auto";
        }
    });
});