
let itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{

    let nomeProduto = document.querySelector('input[name=nome_produto');
    let precoProduto = document.querySelector('input[name=preco_produto');

    itens.push({

        nome:nomeProduto.value,
        valor:precoProduto.value
        
    });
    
    /*
    <div class="lista-produto-single">
    <h3>Suco de uvas</h3>
    <h3 class="price-product"><span>R$:4,00</span></h3>
    </div><!--lista-produto-single-->
    */

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;

    listaProdutos.innerHTML = "";
    
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
         
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-product"><span>R$:`+val.valor+`</span></h3>
        </div><!--lista-produto-single-->

        
        `;

    });
    
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;
    
});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{

     itens = [];
     document.querySelector('.lista-produtos').innerHTML = "";
     document.querySelector('.soma-produto h1').innerHTML = "R$:0";

})