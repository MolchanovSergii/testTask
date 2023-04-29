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


export async function addProduct(data) {
    try {
        const response = await apiInstance.post(`/products/add`, data);
        console.log(response);

        if (response.status === 404) {
            throw new Error("Not Found");
        }
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteProduct(id) {
    try {
      const response = await apiInstance.delete(`/products/${id}`);
      console.log(response);

        alert(`SUCCESS delete: ${response.data.title}`);
        return response.data;
        
    } catch (error) {
        alert(error);
      console.log(error);
    }
}