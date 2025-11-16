const produtos = [
    {
        nome: "Promoção: Plano Essencial",
        preco: 19.90,
        imagem: "./images/KZ PNG.png",
        descricao: "O KZ EDX Pro entrega graves fortes, médios detalhados e excelente separação sonora. Ideal para quem busca qualidade profissional sem gastar muito."
    },
    {
        nome: "Carregador Power Bank 10.000mah",
        preco: 30.00,
        imagem: "./images/KZ PNG (1).png",
        descricao: "Compacto e eficiente, com carregamento rápido e seguro. Ideal para uso diário e viagens."
    },
    {
        nome: "Apple Vision Pro",
        preco: 90.00,
        imagem: "./images/vision-pro.png",
        descricao: "O revolucionário headset da Apple com realidade mista e interação espacial avançada."
    },
    {
        nome: "iPhone 15 Pro",
        preco: 120.00,
        imagem: "./images/iphone.png",
        descricao: "Chip A17 Pro, titânio, câmeras avançadas e tela 120Hz. O mais poderoso iPhone já criado."
    },
    {
        nome: "iPhone 15 Pro",
        preco: 240.00,
        imagem: "./images/iphone.png",
        descricao: "Chip A17 Pro, titânio, câmeras avançadas e tela 120Hz. O mais poderoso iPhone já criado."
    }
];

// Repetições
produtos.push(produtos[0], produtos[1], produtos[2], produtos[3], produtos[0], produtos[1], produtos[2], produtos[3]);

// ---------------------

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) - 1;

if (produtos[id]) {
    document.getElementById("produto-img").src = produtos[id].imagem;
    document.getElementById("produto-nome").textContent = produtos[id].nome;
    document.getElementById("produto-preco").textContent = `R$ ${produtos[id].preco.toFixed(2).replace(".", ",")}`;
    document.getElementById("produto-desc").textContent = produtos[id].descricao;
}
