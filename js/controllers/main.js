import { servicesProducts } from "../services/products-services";

const productContainer = document.querySelector("[data-product]");

function createElement (name, price, image) {
    const card = document.createElement("div");
    card.classList.add(produtos__visualizar__itens__grupos__card);
    card.innerHTML = `
        <div class="card__imagem">
            <img class="${image}" alt="">
        </div>
        
        <div class="card__nome_cont">
            <h3 class="card__nome" >${name}</h3>
        </div>
        <div class="card__valor_cont">
            <h3 class="card__valor" >${price}</h3>
            <button class="card__button">x</button>
        </div>    
   ` 

   productContainer.appendChild(card);
   return card;
}

const render = async () => {

    try {
        const listProduct = await servicesProducts.productList();
        console.log(listProduct);
        
    } catch (error) {
        console.log(error);
        
    }
};

render()