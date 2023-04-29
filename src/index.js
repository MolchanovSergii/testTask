import './styles/normalize.css';
import './styles/index.css';
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
} from "./requests/products";
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


// refs.singleProductForm.addEventListener('submit', onSearchFormSubmit)


// async function onSearchFormSubmit(evt) {
// evt.preventDefault();
// const id = evt.currentTarget.elements.id.value.trim();
// const response = await getProductById(id);
// refs.singleProductDiv.insertAdjacentHTML(
//   "beforeend", createProductMarkup(response)
// );

// }

// refs.productCreateForm.addEventListener('submit', onProductCreateFormSubmit)

// async function onProductCreateFormSubmit(event) {
//     event.preventDefault();

//     const newProduct = {};

//     new FormData(event.currentTarget).forEach((value, idx) => {
//         newProduct[idx] = value;
//     })

//     console.log(newProduct);

//     const response = await addProduct(newProduct);


//     refs.newProductSection.insertAdjacentHTML('beforeend', createProductMarkup(response))

// }

refs.deletionProductForm.addEventListener('submit', onDeleteFormSubmit);

async function onDeleteFormSubmit(e) {
    e.preventDefault();
    const id = e.currentTarget.elements.deletionId.value.trim();

    deleteProduct(id);
}