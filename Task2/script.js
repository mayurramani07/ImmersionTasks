const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

let allProducts = [];

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  allProducts = data.products; 
  displayProducts(allProducts);
}

function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" width="150">
      <h4>${product.title}</h4>
      <p>$${product.price}</p>
    `;
    productList.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

fetchProducts();
