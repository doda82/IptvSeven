document.addEventListener('DOMContentLoaded', () => {

    // ===============================
    // MENU MOBILE
    // ===============================
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggleBtn?.addEventListener('click', () => {
        document.body.classList.toggle('menu-aberto');
        mobileMenu?.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu-container a').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-aberto');
            mobileMenu?.classList.remove('active');
        });
    });

    // ===============================
    // FILTRO e ORDENAÇÃO DE PRODUTOS
    // ===============================
    const seletorOrdenacao = document.getElementById('ordenar-produtos');
    const campoBusca = document.getElementById('input-busca');
    const container = document.querySelector('.products-grid');
    const todosOsProdutos = container ? Array.from(container.querySelectorAll('.product-card')) : [];

    function filtrarProdutos() {
        const termo = campoBusca.value.toLowerCase().trim();

        todosOsProdutos.forEach(produto => {
            const nome = produto.querySelector('.product-card-name').textContent.toLowerCase();
            produto.style.display = nome.includes(termo) ? 'flex' : 'none';
        });

        ordenarProdutos();
    }

    function ordenarProdutos() {
        const ordem = seletorOrdenacao.value;
        const visiveis = todosOsProdutos.filter(p => p.style.display !== 'none');

        visiveis.sort((a, b) => {
            const A = parseFloat(a.dataset.price);
            const B = parseFloat(b.dataset.price);

            if (ordem === 'menor-preco') return A - B;
            if (ordem === 'maior-preco') return B - A;
            return parseInt(a.dataset.order) - parseInt(b.dataset.order);
        });

        visiveis.forEach(p => container.appendChild(p));
    }

    campoBusca?.addEventListener('input', filtrarProdutos);
    seletorOrdenacao?.addEventListener('change', ordenarProdutos);
    ordenarProdutos();

  // ... (Tudo que estiver antes da seção de Modal no seu script.js deve ficar aqui)
// Por exemplo, o código do Menu Mobile, Filtros, etc.
// ...

// ===============================
// MODAL DE DETALHES DO PRODUTO (CORRIGIDO)
// ===============================
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const modalClose = document.querySelector(".modal-close");

// Garante que o botão seja encontrado dentro do modal
const modalBuyBtn = modal ? modal.querySelector("#btn-whats-modal") : null; 

// Evento para ABRIR o modal
document.querySelectorAll('.product-card .btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        const card = e.target.closest('.product-card');

        // Preenche o modal com os dados
        modalImg.src = card.querySelector("img").src;
        modalTitle.textContent = card.querySelector(".product-card-name").textContent;
        modalPrice.textContent = card.querySelector(".product-card-price").textContent;
        modalDesc.textContent = card.dataset.desc || "Sem descrição disponível.";

        modal.classList.add("ativo"); // ISSO PRECISA DO CSS .ativo
        document.body.style.overflow = "hidden";
    });
});

// 🛑 LÓGICA DO BOTÃO WHATSAPP 🛑
modalBuyBtn?.addEventListener("click", (e) => {
    e.preventDefault(); 
    
    // Números de suporte
    const suporte1 = '5531991814249'; 
    const suporte2 = '5531987002923'; 

    const numeroEscolhido = Math.random() > 0.5 ? suporte1 : suporte2;
    
    // Pega os dados que foram colocados no modal
    const titulo = modalTitle.textContent;
    const preco = modalPrice.textContent.replace("R$", "").trim();

    const message = `Olá! Tenho interesse no *${titulo}* por R$ ${preco}. Pode me explicar melhor sobre este plano?`;

    const link = `https://wa.me/${numeroEscolhido}?text=${encodeURIComponent(message)}`;
    
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