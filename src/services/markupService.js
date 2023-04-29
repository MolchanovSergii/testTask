export function createProductsListMarkup(arr) {
    return arr.map(
        ({ title, price, description }) => `
         <li>
        <h2>${title}</h2>
        <p>${price}</p>
        <p>${description}</p>
      </li>
    `).join('');
}



export function createProductMarkup(data) {
    console.log(data);
    const { title, price, description } = data
    return `<h2>${title}</h2>
        <p>${price}</p>
        <p>${description}</p>`

}