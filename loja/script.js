//declaracao da variavel produtos fora dos escopos para tornar global
let produtos

window.onload = function () {
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)
    //3 exemplos de atribuição de valor copm javascript puro
    document.getElementById("user").innerHTML = user.name
    document.getElementById("perfil").innerText = user.name
    document.getElementById("idPerfil").textContent = user.id
};

document.addEventListener("DOMContentLoaded", function () {
    //fetch, busca dos produtos e armazenamento na variavel global
    fetch("../dados/loja.json")
        .then((response) => response.json())
        .then((data) => {
            produtos = data
            const produtosContainer = document.getElementById("produtos-container")
            produtos.forEach((produto, index) => {
                // Coluna responsiva
                const col = document.createElement("div")
                col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4" // Responsivo + espaçamento

                // Card
                const card = document.createElement("div")
                card.className = "card h-100 text-white bg-dark rounded-3"

                const imagem = document.createElement("img")
                imagem.src = produto.imagem
                imagem.className = "card-img-top rounded-top-3"
                imagem.alt = produto.descricao

                const cardBody = document.createElement("div")
                cardBody.className = "card-body d-flex flex-column"

                const cardTitle = document.createElement("h5")
                cardTitle.className = "card-title"
                cardTitle.textContent = produto.descricao

                const cardText = document.createElement("p")
                cardText.className = "card-text"
                cardText.textContent = "R$" + produto.preco.toFixed(2)

                const btnAdicionarAoCarrinho = document.createElement("a")
                btnAdicionarAoCarrinho.href = "#"
                btnAdicionarAoCarrinho.className = "btn btn-primary mt-auto rounded-2 btn-adicionar-ao-carrinho"
                btnAdicionarAoCarrinho.textContent = "Adicionar ao carrinho"
                btnAdicionarAoCarrinho.setAttribute("data-indice", index)

                cardBody.appendChild(cardTitle)
                cardBody.appendChild(cardText)
                cardBody.appendChild(btnAdicionarAoCarrinho)

                card.appendChild(imagem)
                card.appendChild(cardBody)

                col.appendChild(card) // Coluna envolve o card

                produtosContainer.appendChild(col)
            })

        }).catch((error) => console.error("Erro ao carregar o arquivo JSON", error))


    $("#produtos-container").on("click", ".btn-adicionar-ao-carrinho", function () {
        const indexDoProduto = $(this).data("indice")
        const produtoSelecionado = produtos[indexDoProduto]
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
        carrinho.push(produtoSelecionado)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        alert("Produto adicionado com sucesso")
    })
});