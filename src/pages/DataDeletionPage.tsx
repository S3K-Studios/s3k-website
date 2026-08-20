import React from "react";
import { useTranslation } from "react-i18next";

const DataDeletionPage: React.FC = () => {
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
    <h1 className="text-3xl font-bold mb-6 text-primary">Hesap ve Veri Silme</h1>
    <p className="text-foreground-500 mb-8 italic">Son Güncelleme: 1 Mayıs 2026</p>

    <p>
      Bu sayfa, <strong>Atomic Boom</strong> mobil uygulamasında oluşturduğunuz hesabı ve
      hesabınızla ilişkili verileri nasıl silebileceğinizi açıklar. Bu sayfaya, uygulamayı
      yüklemeden veya oturum açmadan da erişebilirsiniz.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">1. Uygulama İçinden Silme (Önerilen)</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Atomic Boom uygulamasını açın ve oturum açın.</li>
      <li><strong>Ayarlar</strong> ekranına gidin.</li>
      <li><strong>"Hesabı Sil"</strong> seçeneğine dokunun.</li>
      <li>İşlemi onaylayın.</li>
    </ol>
    <p>
      Onayladıktan sonra hesabınız ve ilişkili veriler sistemlerimizden kalıcı olarak silinir. Bu
      işlem geri alınamaz.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">2. Uygulamaya Erişiminiz Yoksa</h2>
    <p>
      Uygulamayı silmiş veya hesabınıza erişiminizi kaybetmiş olsanız bile, aşağıdaki adrese
      hesabınızla ilişkili e-posta adresinden "Veri Silme Talebi" konu başlığıyla e-posta
      göndererek talepte bulunabilirsiniz:
    </p>
    <p>
      <a className="text-primary hover:underline" href="mailto:info@s3kstudios.com?subject=Veri%20Silme%20Talebi">
        info@s3kstudios.com
      </a>
    </p>
    <p>Talebiniz, kimliğinizin doğrulanmasının ardından en geç 30 gün içinde işleme alınır.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">3. Hangi Veriler Silinir</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Hesap profili (e-posta, isim, profil resmi — Firebase Auth üzerinden)</li>
      <li>Oyun ilerlemesi, ayarlar ve skor tablosu kayıtları</li>
      <li>Çok oyunculu mod / lobi verileri</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">4. Saklanması Gereken Veriler</h2>
    <p>
      Yasal muhasebe ve vergi yükümlülüklerimiz gereği, uygulama içi satın alım işlem kayıtları
      (RevenueCat, Apple App Store veya Google Play üzerinden yapılan ödemeler) ilgili mevzuatın
      öngördüğü süre boyunca, kişisel kimlikle ilişkilendirilmeden saklanabilir. Bu kayıtlar
      hesabınız silindikten sonra yeni bir hesapla ilişkilendirilmez.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">5. İlgili Belgeler</h2>
    <p>
      Verilerinizin nasıl toplandığı ve kullanıldığı hakkında daha fazla bilgi için{" "}
      <a className="text-primary hover:underline" href="/atomicboom/privacy">
        Gizlilik Politikamıza
      </a>{" "}
      göz atabilirsiniz.
    </p>
  </div>
);

const EnglishContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <h1 className="text-3xl font-bold mb-6 text-primary">Account &amp; Data Deletion</h1>
    <p className="text-foreground-500 mb-8 italic">Last Updated: May 1, 2026</p>

    <p>
      This page explains how to delete your account and associated data from the{" "}
      <strong>Atomic Boom</strong> mobile app. You can access this page without installing the
      app or signing in.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">1. Delete From Within the App (Recommended)</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Open Atomic Boom and sign in.</li>
      <li>Go to <strong>Settings</strong>.</li>
      <li>Tap <strong>"Delete Account"</strong>.</li>
      <li>Confirm the action.</li>
    </ol>
    <p>
      Once confirmed, your account and associated data are permanently deleted from our systems.
      This action cannot be undone.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">2. If You No Longer Have App Access</h2>
    <p>
      If you've uninstalled the app or lost access to your account, you can request deletion by
      emailing us from the email address associated with your account, with the subject line
      "Data Deletion Request":
    </p>
    <p>
      <a className="text-primary hover:underline" href="mailto:info@s3kstudios.com?subject=Data%20Deletion%20Request">
        info@s3kstudios.com
      </a>
    </p>
    <p>Requests are processed within 30 days after we verify your identity.</p>

    <h2 className="text-xl font-semibold mt-8 mb-4">3. What Gets Deleted</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Account profile (email, name, profile picture — via Firebase Auth)</li>
      <li>Game progress, settings, and leaderboard entries</li>
      <li>Multiplayer / lobby data</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-4">4. What Is Retained</h2>
    <p>
      For legal accounting and tax purposes, in-app purchase transaction records (via RevenueCat,
      Apple App Store, or Google Play) may be retained for the period required by applicable law,
      disassociated from your personal identity. These records are not linked to any new account
      after deletion.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">5. Related Documents</h2>
    <p>
      For more information on how your data is collected and used, see our{" "}
      <a className="text-primary hover:underline" href="/atomicboom/privacy">
        Privacy Policy
      </a>
      .
    </p>
  </div>
);

export default DataDeletionPage;
