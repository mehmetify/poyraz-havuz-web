const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Veri dosyası yolu
const productsFile = path.join(__dirname, 'data', 'products.json');

// Ürünleri okuma fonksiyonu
function readProducts() {
  const data = fs.readFileSync(productsFile, 'utf8');
  return JSON.parse(data);
}

// Ürünleri yazma fonksiyonu
function writeProducts(products) {
  fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
}

// API Rotaları

// Tüm ürünleri getir (READ)
app.get('/api/products', (req, res) => {
  try {
    const products = readProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Ürünler yüklenemedi' });
  }
});

// Yeni ürün ekle (CREATE)
app.post('/api/products', (req, res) => {
  try {
    const products = readProducts();
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      ...req.body
    };
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Ürün eklenemedi' });
  }
});

// Ürün güncelle (UPDATE)
app.put('/api/products/:id', (req, res) => {
  try {
    const products = readProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
      products[index] = { ...products[index], ...req.body };
      writeProducts(products);
      res.json(products[index]);
    } else {
      res.status(404).json({ error: 'Ürün bulunamadı' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ürün güncellenemedi' });
  }
});

// Ürün sil (DELETE)
app.delete('/api/products/:id', (req, res) => {
  try {
    const products = readProducts();
    const filteredProducts = products.filter(p => p.id !== parseInt(req.params.id));
    writeProducts(filteredProducts);
    res.json({ message: 'Ürün silindi' });
  } catch (error) {
    res.status(500).json({ error: 'Ürün silinemedi' });
  }
});

// ==================== BLOG API ROTALARI ====================

// Blog dosyası yolu
const blogsFile = path.join(__dirname, 'data', 'blogs.json');

// Blog'ları okuma fonksiyonu
function readBlogs() {
  const data = fs.readFileSync(blogsFile, 'utf8');
  return JSON.parse(data);
}

// Blog'ları yazma fonksiyonu
function writeBlogs(blogs) {
  fs.writeFileSync(blogsFile, JSON.stringify(blogs, null, 2));
}

// Tüm blog'ları getir (READ)
app.get('/api/blogs', (req, res) => {
  try {
    const blogs = readBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Blog yazıları yüklenemedi' });
  }
});

// Yeni blog ekle (CREATE)
app.post('/api/blogs', (req, res) => {
  try {
    const blogs = readBlogs();
    const newBlog = {
      id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
      ...req.body,
      date: new Date().toISOString().split('T')[0]
    };
    blogs.push(newBlog);
    writeBlogs(blogs);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: 'Blog eklenemedi' });
  }
});

// Blog güncelle (UPDATE)
app.put('/api/blogs/:id', (req, res) => {
  try {
    const blogs = readBlogs();
    const index = blogs.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...req.body };
      writeBlogs(blogs);
      res.json(blogs[index]);
    } else {
      res.status(404).json({ error: 'Blog bulunamadı' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Blog güncellenemedi' });
  }
});

// Blog sil (DELETE)
app.delete('/api/blogs/:id', (req, res) => {
  try {
    const blogs = readBlogs();
    const filteredBlogs = blogs.filter(b => b.id !== parseInt(req.params.id));
    writeBlogs(filteredBlogs);
    res.json({ message: 'Blog silindi' });
  } catch (error) {
    res.status(500).json({ error: 'Blog silinemedi' });
  }
});

// Sunucu başlat
app.listen(PORT, () => {
  console.log(`🌊 Poyraz Havuz sunucusu http://localhost:${PORT} adresinde çalışıyor`);
});
