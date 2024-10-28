Ürün Yönetim Sistemi
Bu proje, Next.js ile geliştirilmiş basit bir ürün yönetim uygulamasıdır. Kullanıcılar, ürünleri sisteme ekleyebilir, eklenen ürünleri görüntüleyebilir ve silebilir. Proje, temel bir CRUD (Create, Read, Update, Delete) işlevselliği sunmaktadır.

Özellikler
Ürün Ekleme: Anasayfa üzerinden ürün adı, miktarı ve fiyatı girilerek yeni ürün eklenebilir.
Ürün Listeleme: /products sayfasında tüm ürünler görüntülenebilir.
Ürün Silme: /products sayfasında listelenen ürünler, sil butonu ile sistemden kaldırılabilir.
API Routes: Next.js'in API route’ları ile ürün bilgilerini getirme, ekleme ve silme işlemleri yapılmaktadır.
Kullanılan Teknolojiler
Next.js: Hem frontend hem de backend işlemleri için kullanılmıştır.
React: Kullanıcı arayüzü oluşturulmuştur.
Tailwind CSS: Basit ve şık bir tasarım için kullanılmıştır.
Kurulum
Projenin çalışabilmesi için bilgisayarınızda Node.js kurulu olması gerekmektedir.

Adımlar
Bu repoyu klonlayın:

bash
Kodu kopyala
git clone https://github.com/kullaniciadi/urun-yonetim-sistemi.git
Proje klasörüne gidin:

bash
Kodu kopyala
cd urun-yonetim-sistemi
Gerekli paketleri yükleyin:

bash
Kodu kopyala
npm install
Projeyi başlatın:

bash
Kodu kopyala
npm run dev
Tarayıcınızda projeyi görüntülemek için şu URL'yi açın: http://localhost:3000

Proje Yapısı
/pages/index.js: Ürün ekleme sayfası (Ana sayfa).
/pages/products.js: Ürünlerin listelendiği ve silinebildiği sayfa.
/api/product: API endpoint'leri, ürün bilgilerini getirme, ekleme ve silme işlemlerini yönetir.
API Kullanımı
GET /api/product: Tüm ürünleri getirir.
POST /api/product: Yeni bir ürün ekler. JSON formatında name, quantity, ve price bilgilerini gerektirir.
DELETE /api/product/[id]: Belirtilen id’ye sahip ürünü siler.
Kullanım
Ürün Ekleme: Ana sayfada ürün bilgilerini girin ve "Ekle" butonuna basın. Ekleme işlemi başarılı olursa /products sayfasına yönlendirilirsiniz.

Ürün Listeleme ve Silme: /products sayfasında tüm ürünler görüntülenir. Bir ürünü silmek için ürünün sağında bulunan "Sil" butonuna tıklayın.

Ekran Görüntüleri
Ürün Ekleme Sayfası

Ürün Listeleme Sayfası

Katkıda Bulunma
Bu repoyu fork'layın.
Yeni bir branch oluşturun: git checkout -b özellik-isim
Değişikliklerinizi yapın ve commit edin: git commit -m 'Özellik ekleme açıklaması'
Branch'inize push edin: git push origin özellik-isim
Bir Pull Request açın.
Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.
