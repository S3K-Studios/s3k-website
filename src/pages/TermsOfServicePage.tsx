import React from "react";
import { useTranslation } from "react-i18next";

const TermsOfServicePage: React.FC = () => {
  const { i18n } = useTranslation();
  const isTr = i18n.language === "tr";

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-content1 p-8 rounded-2xl shadow-xl border border-divider">
        {isTr ? <TurkishContent /> : <EnglishContent />}
      </div>
    </div>
  );
};

const TurkishContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <h1 className="text-3xl font-bold mb-6 text-primary">Kullanım Şartları</h1>
    <p className="text-foreground-500 mb-8 italic">Son Güncelleme: 1 Mayıs 2026</p>

    <p>
      Bu Kullanım Şartları ("Şartlar"), <strong>S3K Studios</strong> tarafından geliştirilen{" "}
      <strong>Atomic Boom</strong> mobil uygulamasını ("Uygulama") indirmeniz, yüklemeniz veya
      kullanmanız halinde sizinle aramızdaki sözleşmeyi oluşturur. Uygulamayı kullanarak bu
      Şartları kabul etmiş sayılırsınız.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">1. Lisans</h2>
    <p>
      S3K Studios, size Uygulamayı yalnızca kişisel, ticari olmayan amaçlarla kullanmanız için
      sınırlı, münhasır olmayan, devredilemez bir lisans verir. Uygulamanın kaynak kodunu tersine
      mühendislikle çözemez, kopyalayamaz, dağıtamaz veya türev çalışma oluşturamazsınız.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">2. Hesaplar</h2>
    <p>
      Bazı özellikler (ilerleme kaydetme, skor tabloları, çok oyunculu mod) Google, Apple veya
      e-posta ile giriş yapmanızı gerektirir. Hesap bilgilerinizin gizliliğinden ve hesabınız
      altında gerçekleşen tüm etkinliklerden siz sorumlusunuz.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">3. Uygulama İçi Satın Alımlar</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Uygulama, sanal içerik veya özellik ayrıcalıkları sunan uygulama içi satın alımlar
        içerebilir. Satın alımlar Apple App Store veya Google Play üzerinden işlenir ve
        RevenueCat aracılığıyla doğrulanır.
      </li>
      <li>
        Tüm ödemeler ilgili mağaza hesabınıza (Apple ID / Google hesabı) yansıtılır; fatura ve
        iade talepleri doğrudan Apple veya Google üzerinden yönetilmelidir.
      </li>
      <li>
        Otomatik yenilenen bir abonelik satın alırsanız, aksi belirtilmedikçe abonelik, mevcut
        dönemin bitiminden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir.
        Yenileme ücreti, hesabınıza dönem sonundan 24 saat önce yansıtılır. Aboneliğinizi
        cihazınızın mağaza ayarlarından yönetebilir ve iptal edebilirsiniz.
      </li>
      <li>Satın alınan sanal içerikler herhangi bir gerçek para değeri taşımaz ve iade edilemez.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">4. Kullanıcı Davranışı</h2>
    <p>
      Uygulamayı yasa dışı amaçlarla, hile veya bot yazılımlarıyla, diğer kullanıcıları taciz
      edecek şekilde ya da oyunun bütünlüğünü bozacak biçimde kullanamazsınız. Bu kurallara aykırı
      davranış tespit edilirse hesabınız askıya alınabilir veya kapatılabilir.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">5. Fikri Mülkiyet</h2>
    <p>
      Uygulama ve içerdiği tüm görsel, ses, kod ve tasarım unsurları S3K Studios'a aittir ve
      telif hakkı ile korunmaktadır. Şartlar kapsamında verilen sınırlı lisans dışında hiçbir
      hak size devredilmez.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">6. Fesih</h2>
    <p>
      Bu Şartları ihlal etmeniz halinde, uygulamaya erişiminizi önceden bildirimde bulunmaksızın
      askıya alma veya sonlandırma hakkımızı saklı tutarız.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">7. Sorumluluk Reddi</h2>
    <p>
      Uygulama "olduğu gibi" sunulmaktadır. S3K Studios, uygulamanın kesintisiz veya hatasız
      çalışacağını garanti etmez ve yürürlükteki mevzuatın izin verdiği azami ölçüde dolaylı,
      arızi veya sonuç niteliğindeki zararlardan sorumlu tutulamaz.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">8. Değişiklikler</h2>
    <p>
      Bu Şartları zaman zaman güncelleyebiliriz. Önemli değişiklikler uygulama içi bildirim veya
      bu sayfa üzerinden duyurulacaktır. Güncelleme sonrası uygulamayı kullanmaya devam etmeniz,
      yeni şartları kabul ettiğiniz anlamına gelir.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">9. İletişim</h2>
    <p className="font-semibold">S3K Studios</p>
    <p>
      E-posta:{" "}
      <a className="text-primary hover:underline" href="mailto:info@s3kstudios.com">
        info@s3kstudios.com
      </a>
    </p>
  </div>
);

const EnglishContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>
    <p className="text-foreground-500 mb-8 italic">Last Updated: May 1, 2026</p>

    <p>
      These Terms of Service ("Terms") form the agreement between you and{" "}
      <strong>S3K Studios</strong> governing your download, installation, or use of the{" "}
      <strong>Atomic Boom</strong> mobile application (the "App"). By using the App, you agree to
      be bound by these Terms.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">1. License</h2>
    <p>
      S3K Studios grants you a limited, non-exclusive, non-transferable license to use the App
      for your personal, non-commercial purposes. You may not reverse engineer, copy, distribute,
      or create derivative works based on the App.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">2. Accounts</h2>
    <p>
      Some features (saved progress, leaderboards, multiplayer) require signing in with Google,
      Apple, or email. You are responsible for safeguarding your account credentials and for all
      activity that occurs under your account.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">3. In-App Purchases</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        The App may offer in-app purchases for virtual content or feature unlocks. Purchases are
        processed through the Apple App Store or Google Play and verified via RevenueCat.
      </li>
      <li>
        All payments are billed to your store account (Apple ID / Google account); billing
        disputes and refund requests must be handled directly through Apple or Google.
      </li>
      <li>
        If you purchase an auto-renewing subscription, unless stated otherwise it renews
        automatically unless canceled at least 24 hours before the end of the current period. The
        renewal charge is applied to your account within 24 hours prior to the end of the current
        period. You can manage or cancel your subscription from your device's store settings.
      </li>
      <li>Purchased virtual items have no real-world monetary value and are non-refundable.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
    <p>
      You may not use the App for unlawful purposes, use cheats or bots, harass other users, or
      otherwise undermine the integrity of the game. Violations may result in suspension or
      termination of your account.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
    <p>
      The App and all its visual, audio, code, and design elements are owned by S3K Studios and
      protected by copyright. No rights are granted to you beyond the limited license described
      in these Terms.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
    <p>
      We reserve the right to suspend or terminate your access to the App without prior notice if
      you violate these Terms.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">7. Disclaimer</h2>
    <p>
      The App is provided "as is." S3K Studios does not guarantee uninterrupted or error-free
      operation and, to the fullest extent permitted by law, is not liable for indirect,
      incidental, or consequential damages.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes</h2>
    <p>
      We may update these Terms from time to time. Material changes will be announced via an
      in-app notice or on this page. Continued use of the App after an update constitutes
      acceptance of the revised Terms.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
    <p className="font-semibold">S3K Studios</p>
    <p>
      Email:{" "}
      <a className="text-primary hover:underline" href="mailto:info@s3kstudios.com">
        info@s3kstudios.com
      </a>
    </p>
  </div>
);

export default TermsOfServicePage;
