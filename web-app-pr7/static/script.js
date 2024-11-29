const API_URL = (typeof CONFIG !== 'undefined' && CONFIG.API_URL) ? CONFIG.API_URL : 'http://localhost:8080/api';

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('fetchProducts')) {
        document.getElementById('fetchProducts').addEventListener('click', fetchProducts);
    }
    if (document.getElementById('productForm')) {
        document.getElementById('productForm').addEventListener('submit', addProduct);
    }
    if (document.getElementById('fetchCategories')) {
        document.getElementById('fetchCategories').addEventListener('click', fetchCategories);
    }
    if (document.getElementById('categoryForm')) {
        document.getElementById('categoryForm').addEventListener('submit', addCategory);
    }
});

async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const products = await response.json();
        const productsList = document.getElementById('productsList');
        productsList.innerHTML = products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category.id}</td>
            </tr>
        `).join('');
    } catch (error) {
        console.error(error);
        alert('Failed to fetch products');
    }
}

async function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const categoryId = document.getElementById('productCategory').value;

    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, category: { id: categoryId } })
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        alert('Product added successfully');
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
        alert('Failed to add product');
    }
}

async function fetchCategories() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const categories = await response.json();
        const categoriesList = document.getElementById('categoriesList');
        categoriesList.innerHTML = categories.map(category => `
            <tr>
                <td>${category.id}</td>
                <td>${category.name}</td>
            </tr>
        `).join('');
    } catch (error) {
        console.error(error);
        alert('Failed to fetch categories');
    }
}


async function addCategory(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('categoryName').value;

    const categoryData = {
        name: name
    };

    try {
        const response = await fetch(`${API_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoryData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const newCategory = await response.json();
        alert(`Category added successfully: ID=${newCategory.id}, Name=${newCategory.name}`);
        window.location.href = 'categories.html'; // Перенаправление на список категорий
    } catch (error) {
        console.error('Failed to add category:', error);
        alert('Failed to add category');
    }
}
