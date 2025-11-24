// No seu arquivo script.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('active');

});

// --- LIMPADOR DE URL (Remove index.html e .html) ---
document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    
    // Se a URL terminar com "index.html", remove ele
    if (path.endsWith("index.html")) {
        var newPath = path.replace("index.html", "");
        // Atualiza a barra de endereços sem recarregar a página
        window.history.replaceState(null, "", newPath);
    } 
    // Se terminar com qualquer outro ".html" (ex: produtos.html), remove também
    else if (path.endsWith(".html")) {
        var newPath = path.replace(".html", "");
        window.history.replaceState(null, "", newPath);
    }
});
