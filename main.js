let items = [];
const adicionar = document.querySelector("input[type=submit]")

if(adicionar) {
adicionar.addEventListener("click", () => {
    const product = document.getElementById("nome-produto");
    const price = document.getElementById("price");
    items.push({ nome: product.value, valor: price.value });

    if (product.value === "" || price.value === "") {
        alert("Preencha todos os campos");
        return;
    }

    let listaProdutos = document.querySelector(".lista-produto");
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map((val) => {
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produto"> <h2>Lista de Produtos</h2>
        <div class="lista-produtos-single">
            <h3>${val.nome}</h3>
            <h3 class="product-price"><span>R$${val.valor}</span></h3>
        </div>
        </div>
        `;
    });

    product.value = "";
    price.value = "";

    let elementoSoma = document.querySelector(".soma-total h1");
    elementoSoma.innerHTML = `R$${soma.toFixed(2)}`; 

});
} else {
    console.log("Ocorreu um erro ao clicar no botão de cadastrar");
}

let reset = document.querySelector('button[name=limpar]');
if (reset) {
  reset.addEventListener("click", () => {
    items = [];
    let listaProdutos = document.querySelector(".lista-produto");
    listaProdutos.innerHTML = "";
    let elementoSoma = document.querySelector(".soma-total h1");
    elementoSoma.innerHTML = `Total: R$0,00`;
  }); 
} else {
    console.log("Ocorreu um erro ao clicar no botão de limpar");
}


