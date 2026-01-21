// API Adresi (otomatik - hem localhost hem canlı sunucuda çalışır)
const API_URL = window.location.origin + '/api';

// Ürünleri yükle (READ işlemi)
async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Ürünler yüklenemedi:', error);
        return [];
    }
}

// Yeni ürün ekle (CREATE işlemi)
async function addProduct(productData) {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        return await response.json();
    } catch (error) {
        console.error('Ürün eklenemedi:', error);
        return null;
    }
}

// Ürün sil (DELETE işlemi)
async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Ürün silinemedi:', error);
        return null;
    }
}

// Ürün güncelle (UPDATE işlemi)
async function updateProduct(id, productData) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        return await response.json();
    } catch (error) {
        console.error('Ürün güncellenemedi:', error);
        return null;
    }
}

// ==================== BLOG API FONKSİYONLARI ====================

// Blog'ları yükle (READ işlemi)
async function loadBlogs() {
    try {
        const response = await fetch(`${API_URL}/blogs`);
        const blogs = await response.json();
        return blogs;
    } catch (error) {
        console.error('Blog yazıları yüklenemedi:', error);
        return [];
    }
}

// Yeni blog ekle (CREATE işlemi)
async function addBlog(blogData) {
    try {
        const response = await fetch(`${API_URL}/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });
        return await response.json();
    } catch (error) {
        console.error('Blog eklenemedi:', error);
        return null;
    }
}

// Blog sil (DELETE işlemi)
async function deleteBlog(id) {
    try {
        const response = await fetch(`${API_URL}/blogs/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Blog silinemedi:', error);
        return null;
    }
}

// Blog güncelle (UPDATE işlemi)
async function updateBlog(id, blogData) {
    try {
        const response = await fetch(`${API_URL}/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });
        return await response.json();
    } catch (error) {
        console.error('Blog güncellenemedi:', error);
        return null;
    }
}
