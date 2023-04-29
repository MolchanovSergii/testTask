import { apiInstance } from "../services/api";


export async function getProducts() { 
try {
    const response = await apiInstance.get("/products");
    console.log(response);

    if (response.status === 404) {
        throw new Error("Not Found");
    }
    return response.data.products;
    
} catch (error) {
    console.log(error.message);
}
    
}


export async function getProductById(id) {
try {
  const response = await apiInstance.get(`/products/${id}`);
  console.log(response);

  if (response.status === 404) {
    throw new Error("Not Found");
  }
  return response.data;
} catch (error) {
  console.log(error.message);
}
    }


