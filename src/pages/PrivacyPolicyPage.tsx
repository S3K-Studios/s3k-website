import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isTr = i18n.language === "tr";

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-content1 p-8 rounded-2xl shadow-xl border border-divider">
        {isTr ? (
          <TurkishContent />
        ) : (
          <EnglishContent />
        )}
      </div>
    </div>
  );
};

const TurkishContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <h1 className="text-3xl font-bold mb-6 text-primary">Gizlilik Politikası</h1>
    <p className="text-foreground-500 mb-8 italic">Son Güncelleme: 1 Mayıs 2026</p>
    
    <p>Bu gizlilik politikası, <strong>Atomic Boom</strong> ("Uygulama") mobil uygulamasının kullanımıyla ilgili politikalarımızı ve prosedürlerimizi açıklar. <strong>S3K Studios</strong> olarak gizliliğinize önem veriyor ve kişisel verilerinizin korunması konusunda kararlılıkla çalışıyoruz.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">1. Toplanan Bilgiler ve Kullanımı</h2>
    <p>Uygulamamız, oyun ilerlemenizi kaydetmek, kullanıcı deneyimini iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla belirli bilgiler toplar:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Kimlik Doğrulama:</strong> Google, Apple veya E-posta ile giriş yaptığınızda e-posta adresiniz, isminiz ve profil resminiz Firebase Auth aracılığıyla güvenli bir şekilde toplanır.</li>
      <li><strong>Uygulama İçi Satın Alımlar:</strong> RevenueCat aracılığıyla satın alma geçmişiniz ve abonelik durumunuz takip edilir. Bu veriler ödemelerin doğrulanması ve özelliklere erişimin sağlanması için gereklidir.</li>
      <li><strong>Teknik Veriler:</strong> Cihaz modeli, işletim sistemi sürümü ve reklam kimlikleri (IDFA/AAID) analiz ve reklam hizmetleri (Google AdMob) için toplanabilir.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">2. Üçüncü Taraf Hizmetleri</h2>
    <p>Veri toplayabilecek veya işleyebilecek şu üçüncü taraf hizmetlerini kullanmaktayız:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Google Play Hizmetleri & AdMob</li>
      <li>Apple Game Center / App Store</li>
      <li>Firebase (Google) - Veritabanı ve Kimlik Doğrulama</li>
      <li>RevenueCat - Satın Alım Yönetimi</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">3. Veri Güvenliği ve Saklama</h2>
    <p>Verileriniz güvenli bulut sunucularında saklanır. Kişisel bilgilerinizi korumak için endüstri standartlarında yöntemler kullanmaktayız. Ancak internet üzerinden iletilen hiçbir yöntemin %100 güvenli olmadığını belirtmek isteriz.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">4. Veri Silme ve Kullanıcı Hakları</h2>
    <p>Kullanıcılar, topladığımız verilere erişme, bunları düzeltme veya silme hakkına sahiptir. Verilerinizin ve hesabınızın tamamen silinmesini istiyorsanız:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Uygulama içindeki <strong>"Hesabı Sil"</strong> butonunu kullanabilirsiniz.</li>
      <li>Veya <strong>info@s3kstudios.com</strong> adresine talebinizi içeren bir e-posta gönderebilirsiniz.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">5. Çocukların Gizliliği</h2>
    <p>Uygulamamız 13 yaşın altındaki çocuklara doğrudan hitap etmemektedir. Bilinçli olarak çocuklardan veri toplamıyoruz. Aksi bir durum fark edilirse veriler derhal silinecektir.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">6. İletişim</h2>
    <p>Sorularınız veya talepleriniz için bize ulaşın:</p>
    <p className="font-semibold">S3K Studios</p>
    <p>E-posta: <a href="mailto:info@s3kstudios.com" className="text-primary hover:underline">info@s3kstudios.com</a></p>
  </div>
);

const EnglishContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
    <p className="text-foreground-500 mb-8 italic">Last Updated: May 1, 2026</p>
    
    <p>This privacy policy describes our policies and procedures on the collection and use of your information when you use the <strong>Atomic Boom</strong> mobile application. <strong>S3K Studios</strong> is committed to ensuring that your privacy is protected.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">1. Information Collection and Use</h2>
    <p>We collect information to provide better services to our users and to improve the gaming experience:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Authentication:</strong> When you sign in with Google, Apple, or Email, your email address, name, and profile picture are collected securely via Firebase Auth.</li>
      <li><strong>In-App Purchases:</strong> Purchase history and subscription status are managed through RevenueCat to verify payments and grant access to premium features.</li>
      <li><strong>Technical Data:</strong> Device model, OS version, and advertising identifiers (IDFA/AAID) may be collected for analytics and advertising services (Google AdMob).</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">2. Third-Party Services</h2>
    <p>The app uses third-party services that may collect information used to identify you:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Google Play Services & AdMob</li>
      <li>Apple Game Center / App Store</li>
      <li>Firebase (Google) - Storage and Authentication</li>
      <li>RevenueCat - Subscription Management</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Security and Retention</h2>
    <p>Your data is stored on secure cloud servers. We use commercially acceptable means of protecting your personal information, but remember that no method of transmission over the internet is 100% secure.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Deletion and Your Rights</h2>
    <p>You have the right to access, correct, or delete your personal data. If you wish to delete your account and all associated data:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Use the <strong>"Delete Account"</strong> button within the app settings.</li>
      <li>Or contact us at <strong>info@s3kstudios.com</strong> with your request.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
    <p>Our app does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, you can contact us:</p>
    <p className="font-semibold">S3K Studios</p>
    <p>Email: <a href="mailto:info@s3kstudios.com" className="text-primary hover:underline">info@s3kstudios.com</a></p>
  </div>
);

export default PrivacyPolicyPage;
