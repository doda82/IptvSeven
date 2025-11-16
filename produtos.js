document.addEventListener('DOMContentLoaded', () => {

    const suporte1 = '5531991814249';
    const suporte2 = '5531987002923';

    const seletorOrdenacao = document.getElementById('ordenar-produtos');
    const campoBusca = document.getElementById('input-busca');
    const container = document.querySelector('.products-grid');
    const todosOsProdutos = Array.from(container.querySelectorAll('.product-card'));

    function filtrarProdutos() {
        const termo = campoBusca.value.toLowerCase();

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

    if (campoBusca) campoBusca.addEventListener('input', filtrarProdutos);
    if (seletorOrdenacao) seletorOrdenacao.addEventListener('change', ordenarProdutos);
    ordenarProdutos();


    // ==============================
    // MODAL DE DETALHES + WHATSAPP
    // ==============================
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDesc = document.getElementById("modal-desc");
    const modalClose = document.querySelector(".modal-close");
    const botaoComprar = document.querySelector(".btn-buy");

    let produtoSelecionado = null;

    document.querySelectorAll('.product-card .btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const card = e.target.closest('.product-card');
            produtoSelecionado = card;

            modalImg.src = card.querySelector("img").src;
            modalTitle.textContent = card.querySelector(".product-card-name").textContent;
            modalPrice.textContent = card.querySelector(".product-card-price").textContent;
            modalDesc.textContent = card.dataset.desc || "Sem descrição disponível.";

            modal.classList.add("ativo");
            document.body.style.overflow = "hidden";
        });
    });

    modalClose.addEventListener("click", () => {
        modal.classList.remove("ativo");
        document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("ativo");
            document.body.style.overflow = "auto";
        }
    });

    botaoComprar.addEventListener("click", () => {
        if (!produtoSelecionado) return;

        const nome = produtoSelecionado.querySelector(".product-card-name").textContent;
        const preco = produtoSelecionado.querySelector(".product-card-price").textContent;

        const numeroEscolhido = Math.random() > 0.5 ? suporte1 : suporte2;
        const mensagem = `Olá! Tenho interesse em assinar o *${nome}* no valor de ${preco}. Pode me ajudar?`;

        const link = `https://wa.me/${numeroEscolhido}?text=${encodeURIComponent(mensagem)}`;
        window.open(link, '_blank');
    });

});
