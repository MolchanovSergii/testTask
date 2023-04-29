import './styles/normalize.css';
import './styles/index.css';
import { getProducts, getProductById } from './requests/products';
import { refs } from './refs';
import { createProductsListMarkup, createProductMarkup } from './services/markupService';
// getProducts().then(resp => (console.log(resp)))

// async function createProductList() {
//     const response = await getProducts();
   
//     refs.listProducts.insertAdjacentHTML(
//         "beforeend",
//         createProductsListMarkup(response)
//     );
// }

// createProductList();


refs.singleProductForm.addEventListener('submit', onSearchFormSubmit)


async function onSearchFormSubmit(evt) {
evt.preventDefault();
const id = evt.currentTarget.elements.id.value.trim();
const response = await getProductById(id); 
refs.singleProductDiv.insertAdjacentHTML(
  "beforeend", createProductMarkup(response)
);

}

