let items = [];

document.querySelector("input[type=submit]").addEventListener("click", () => {
    const product = document.getElementById("nome-produto");
    const price = document.getElementById("price");
    items.push({ nome: product.value, valor: price.value });



    /* modelo a ser seguido
     <div class="lista-produtos-single">
            <h3>Cheetos</h3>
            <h3 class="product-price"><span>R$10,00</span></h3>
        </div>
    */

    let listaProdutos = document.querySelector(".lista-produto");
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map((val) => {
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produtos-single">
            <h3>${val.nome}</h3>
            <h3 class="product-price"><span>R$${val.valor}</span></h3>
        </div>
        `;
    });

    product.value = "";
    price.value = "";

    let elementoSoma = document.querySelector(".soma-total h1");
    elementoSoma.innerHTML = `R$${soma.toFixed(2)}`; 

});
