# 🌊 Poyraz Havuz - Web Uygulaması

Havuz yapımı, bakım, satış ve spa hizmetleri sunan **Poyraz Havuz** için geliştirilmiş modern web uygulaması.

## 📋 Proje Özellikleri

- ✅ **Node.js + Express** backend
- ✅ **Blog Sistemi** ile CRUD işlemleri
- ✅ **6 Sayfa** (Ana, Hizmetler, Ürünler, Blog, Referanslar, İletişim)
- ✅ **JSON Veritabanı** (blogs.json, products.json)
- ✅ **RESTful API**
- ✅ **Responsive Tasarım**
- ✅ **Modern UI/UX**

## 🚀 Hızlı Başlangıç

### 1. Gereksinimler
- Node.js (v14 veya üzeri)
- Web tarayıcısı

### 2. Kurulum

```bash
# Proje dizinine git
cd "c:\Users\sosya\Desktop\WEB SİTESİ ANTIGRAVITY\poyraz-havuz-web"

# Bağımlılıkları yükle
npm install
# veya
"C:\Program Files\nodejs\npm.cmd" install
```

### 3. Sunucuyu Başlat

```bash
# Node.js ile sunucuyu başlat
node server.js
# veya tam path ile
& "C:\Program Files\nodejs\node.exe" server.js
```

Sunucu başarıyla başladığında:
```
🌊 Poyraz Havuz sunucusu http://localhost:3000 adresinde çalışıyor
```

### 4. Tarayıcıda Aç

Ana sayfa: **http://localhost:3000**

## 📂 Proje Yapısı

```
poyraz-havuz-web/
├── data/
│   ├── blogs.json          # Blog yazıları veritabanı
│   └── products.json       # Ürünler veritabanı
├── public/
│   ├── css/
│   │   └── style.css       # Ana stil dosyası
│   ├── js/
│   │   └── app.js          # Frontend JavaScript (API çağrıları)
│   ├── images/
│   │   ├── products/       # Ürün görselleri
│   │   ├── gallery/        # Referans/proje görselleri
│   │   └── blog/           # Blog görselleri
│   ├── index.html          # Ana sayfa
│   ├── services.html       # Hizmetler
│   ├── products.html       # Ürünler (API'den okur)
│   ├── blog.html           # Blog + CRUD yönetimi
│   ├── references.html     # Referanslar/Galeri
│   └── contact.html        # İletişim
├── server.js               # Express sunucusu
├── package.json            # Bağımlılıklar
└── README.md              # Bu dosya
```

## 🎯 Sayfalar

### 1. Ana Sayfa (`/`)
- Şirket tanıtımı
- Hizmet kartları
- Modern tasarım

### 2. Hizmetler (`/services.html`)
- Havuz İnşaatı
- Havuz Bakımı
- Spa & Sauna
- Tamir Hizmetleri

### 3. Ürünler (`/products.html`)
- API'den dinamik ürün listesi
- Ürün görselleri
- Fiyat bilgileri

### 4. Blog (`/blog.html`) ⭐ CRUD
- Blog yazıları listesi
- **Yeni blog ekleme formu**
- **Blog düzenleme/silme**
- Tam CRUD işlemleri

### 5. Referanslar (`/references.html`)
- Tamamlanmış projeler
- Galeri görselleri

### 6. İletişim (`/contact.html`)
- İletişim formu
- Adres: Yeniköy Mahallesi, Beyazıt Çıkmazı No:1, Sarıyer/İstanbul
- Telefon: 0 (212) 262 10 20

## 🔧 API Endpoints

### Blog API'leri (CRUD)
```javascript
GET    /api/blogs          // Tüm blog yazılarını getir
POST   /api/blogs          // Yeni blog ekle
PUT    /api/blogs/:id      // Blog güncelle
DELETE /api/blogs/:id      // Blog sil
```

### Ürün API'leri (Sadece okuma)
```javascript
GET    /api/products       // Tüm ürünleri getir
POST   /api/products       // Yeni ürün ekle
PUT    /api/products/:id   // Ürün güncelle
DELETE /api/products/:id   // Ürün sil
```

## ✏️ CRUD İşlemleri (Blog Yönetimi)

### Blog Ekleme
1. `http://localhost:3000/blog.html` sayfasına git
2. Üstteki formu doldur:
   - Başlık
   - İçerik
   - Yazar
   - Resim URL (opsiyonel)
3. "Blog Ekle" butonuna tıkla
4. ✅ Yeni blog yazısı eklendi!

### Blog Düzenleme
1. Blog sayfasında yazının yanındaki "Düzenle" butonuna tıkla
2. Form mevcut bilgilerle dolacak
3. İstediğin değişiklikleri yap
4. "Güncelle" butonuna tıkla

### Blog Silme
1. "Sil" butonuna tıkla
2. Onay ver
3. ✅ Blog yazısı silindi!

## 🎨 Tasarım Özellikleri

- **Modern gradient navbar**
- **Hover efektleri** (kartlar, butonlar)
- **Yumuşak geçişler** (transitions)
- **Box shadow** efektleri
- **Responsive** (mobil uyumlu)
- **Mavi-beyaz renk paleti**

## 📦 Bağımlılıklar

```json
{
  "express": "^4.18.2",
  "body-parser": "^1.20.2",
  "cors": "^2.8.5"
}
```

## 🧪 Test

### Sunucuyu Test Et
```bash
node server.js
# Başarılı: "🌊 Poyraz Havuz sunucusu http://localhost:3000 adresinde çalışıyor"
```

### Blog CRUD Test Et
1. Blog ekle → Listede görünsün ✅
2. Blog düzenle → Değişiklik yansısın ✅
3. Blog sil → Listeden silinsin ✅

### API Test Et
```bash
# Blog listesi
curl http://localhost:3000/api/blogs

# Ürün listesi
curl http://localhost:3000/api/products
```

## 🎓 Ders Projesine Uygunluk

✅ **Node.js kullanımı** - Express framework
✅ **CRUD işlemleri** - Blog yönetimi
✅ **5+ Sayfa** - 6 sayfa mevcut
✅ **Veritabanı** - JSON dosya tabanlı
✅ **API** - RESTful endpoints
✅ **Frontend-Backend iletişimi** - Fetch API

## 🛠️ Sorun Giderme

### Sunucu başlamıyor
```bash
# Node.js kurulu mu kontrol et
node --version

# Port kullanımda mı kontrol et
netstat -ano | findstr :3000

# Tam path ile dene
& "C:\Program Files\nodejs\node.exe" server.js
```

### Bağımlılıklar yüklenmiyor
```bash
# npm cache temizle
npm cache clean --force

# Tekrar yükle
npm install
```

### Değişiklikler görünmüyor
- Tarayıcıda **Hard Refresh**: `Ctrl + F5`
- Sunucuyu yeniden başlat

## 📄 Lisans

Bu proje eğitim amaçlı bir öğrenci projesidir.

---

**Geliştirici:** Öğrenci Projesi  
**Tarih:** 2026  
**Teknolojiler:** Node.js, Express, HTML, CSS, JavaScript
