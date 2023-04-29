import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { refs } from './refs';
import { createProductsListMarkup } from './services/markupService';

// getProducts().then(resp => (console.log(resp)))

async function createProductList() {
    const response = await getProducts();
   
    refs.listProducts.insertAdjacentHTML(
        "beforeend",
        createProductsListMarkup(response)
    );
}

createProductList();