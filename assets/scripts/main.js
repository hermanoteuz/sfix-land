function carregarProdutos() {
  const loader = document.getElementById("loader");
  const lista = document.getElementById("lista-produtos");

  loader.style.display = "block";

  fetch("./assets/data/produtos.json")
    .then(res => res.json())
    .then(produtos => {
      loader.style.display = "none";

      produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `
          <img src="./assets/images/produtos/${produto.imagem}" alt="${produto.nome}" style="width:100%; border-radius: 8px;">
          <h4>${produto.nome}</h4>
          <p>${produto.preco}</p>
        `;
        lista.appendChild(card);
      });
    })
    .catch(error => {
      loader.style.display = "none";
      lista.innerHTML = "<p style='text-align:center;color:red;'>Erro ao carregar produtos.</p>";
      console.error("Erro ao carregar produtos:", error);
    });
}

function carregarMarcas() {
  fetch("./assets/data/marcas.json")
    .then(res => res.json())
    .then(marcas => {
      console.log("Marcas carregadas:", marcas); // ✅ Teste
      const container = document.getElementById("marcas");

      marcas.forEach(marca => {
        const card = document.createElement("div");
        card.className = "marca-card";
        card.style.backgroundImage = `url('./assets/images/marcas/${marca.fundo}')`;

        const logo = document.createElement("img");
        logo.src = `./assets/images/marcas/${marca.logo}`;
        logo.alt = marca.nome;

        card.appendChild(logo);
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Erro ao carregar marcas:", err));
}

// ✅ Carregamento após DOM pronto
document.addEventListener("DOMContentLoaded", () => {
  carregarProdutos();
  carregarMarcas();
});
