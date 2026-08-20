import React from "react";

import { LegalAppConfig } from "../../types/legal";

type Lang = "tr" | "en";

const formatDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Mail: React.FC<{ email: string; subject?: string }> = ({
  email,
  subject,
}) => (
  <a
    className="text-primary hover:underline"
    href={`mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}
  >
    {email}
  </a>
);

export function renderPrivacyPolicy(app: LegalAppConfig, lang: Lang) {
  const s = app.services;

  if (lang === "tr") {
    return (
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Gizlilik Politikası
        </h1>
        <p className="text-foreground-500 mb-8 italic">
          Son Güncelleme: {formatDate(app.lastUpdated, lang)}
        </p>

        <p>
          Bu gizlilik politikası, <strong>{app.name}</strong>{" "}
          (&quot;Uygulama&quot;) mobil uygulamasının kullanımıyla ilgili
          politikalarımızı ve prosedürlerimizi açıklar.{" "}
          <strong>S3K Studios</strong> olarak gizliliğinize önem veriyor ve
          kişisel verilerinizin korunması konusunda kararlılıkla çalışıyoruz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          1. Toplanan Bilgiler ve Kullanımı
        </h2>
        <p>
          Uygulamamız, oyun ilerlemenizi kaydetmek, kullanıcı deneyimini
          iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla
          belirli bilgiler toplar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {s.platformSignIn && (
            <li>
              <strong>Kimlik Doğrulama:</strong> Uygulama, hesap yönetimi için
              Apple Game Center (iOS) ve Google Play Games (Android)
              hizmetlerinin sunduğu oturum açma sistemini kullanır. Uygulama
              içinde ayrı bir e-posta/şifre hesabı oluşturmanız gerekmez; oyuncu
              kimliğiniz, görünen adınız ve avatarınız Apple/Google tarafından
              yönetilir ve bize sınırlı ölçüde iletilir.
            </li>
          )}
          {s.backend && (
            <li>
              <strong>Oyun Verileri:</strong> Oyun ilerlemeniz, skorlarınız ve
              (varsa) çok oyunculu lobi verileriniz, oyuncu kimliğinizle
              ilişkilendirilmiş şekilde {s.backend} üzerinde saklanır.
            </li>
          )}
          {s.iap && (
            <li>
              <strong>Uygulama İçi Satın Alımlar:</strong>{" "}
              {s.iapProvider ?? "mağazanın satın alma kütüphanesi"} aracılığıyla
              gerçekleştirilen satın alımlar doğrudan Apple/Google tarafından
              işlenir. Ödeme kartı bilgileriniz tarafımızca hiçbir şekilde
              görülmez veya saklanmaz; yalnızca satın alımın doğrulanması için
              gerekli işlem kimliği bilgisiyle sınırlı veri alışverişi yapılır.
            </li>
          )}
          {s.ads && (
            <li>
              <strong>Teknik Veriler:</strong> Cihaz modeli, işletim sistemi
              sürümü ve reklam kimlikleri (IDFA/AAID), reklam hizmeti
              sağlayıcımız {s.adsProvider ?? "reklam ağı"} tarafından analiz ve
              kişiselleştirilmiş reklam amacıyla toplanabilir.
            </li>
          )}
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          2. Üçüncü Taraf Hizmetleri
        </h2>
        <p>
          Veri toplayabilecek veya işleyebilecek şu üçüncü taraf hizmetlerini
          kullanmaktayız:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {s.ads && <li>{s.adsProvider ?? "Google AdMob"}</li>}
          {s.gameServices && <li>Apple Game Center / Google Play Games</li>}
          {s.backend && <li>{s.backend}</li>}
          {s.iap && <li>{s.iapProvider ?? "Mağaza satın alma kütüphanesi"}</li>}
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. Veri Güvenliği ve Saklama
        </h2>
        <p>
          Verileriniz güvenli bulut sunucularında saklanır. Kişisel
          bilgilerinizi korumak için endüstri standartlarında yöntemler
          kullanmaktayız. Ancak internet üzerinden iletilen hiçbir yöntemin %100
          güvenli olmadığını belirtmek isteriz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          4. Veri Silme ve Kullanıcı Hakları
        </h2>
        <p>
          Kullanıcılar, topladığımız verilere erişme, bunları düzeltme veya
          silme hakkına sahiptir. Detaylı bilgi ve talep yöntemleri için{" "}
          <a
            className="text-primary hover:underline"
            href={`/legal/${app.slug}/data-deletion`}
          >
            Hesap ve Veri Silme
          </a>{" "}
          sayfamıza bakabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          5. Çocukların Gizliliği
        </h2>
        <p>
          Uygulamamız 13 yaşın altındaki çocuklara doğrudan hitap etmemektedir.
          Bilinçli olarak çocuklardan veri toplamıyoruz. Aksi bir durum fark
          edilirse veriler derhal silinecektir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. İletişim</h2>
        <p>Sorularınız veya talepleriniz için bize ulaşın:</p>
        <p className="font-semibold">S3K Studios</p>
        <p>
          E-posta: <Mail email={app.supportEmail} />
        </p>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <p className="text-foreground-500 mb-8 italic">
        Last Updated: {formatDate(app.lastUpdated, lang)}
      </p>

      <p>
        This privacy policy describes our policies and procedures on the
        collection and use of your information when you use the{" "}
        <strong>{app.name}</strong> mobile application (the &quot;App&quot;).{" "}
        <strong>S3K Studios</strong> is committed to ensuring that your privacy
        is protected.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        1. Information Collection and Use
      </h2>
      <p>
        We collect information to provide better services to our users and to
        improve the gaming experience:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {s.platformSignIn && (
          <li>
            <strong>Authentication:</strong> The App uses Apple Game Center
            (iOS) and Google Play Games (Android) for account sign-in. You do
            not need to create a separate email/password account; your player
            ID, display name, and avatar are managed by Apple/Google and shared
            with us in limited form.
          </li>
        )}
        {s.backend && (
          <li>
            <strong>Game Data:</strong> Your game progress, scores, and (if
            applicable) multiplayer lobby data are stored on {s.backend}, linked
            to your player ID.
          </li>
        )}
        {s.iap && (
          <li>
            <strong>In-App Purchases:</strong> Purchases made via{" "}
            {s.iapProvider ?? "the store's billing library"} are processed
            directly by Apple/Google. We never see or store your payment card
            details; only the transaction identifier needed to verify a purchase
            is exchanged with us.
          </li>
        )}
        {s.ads && (
          <li>
            <strong>Technical Data:</strong> Device model, OS version, and
            advertising identifiers (IDFA/AAID) may be collected by our
            advertising provider {s.adsProvider ?? "our ad network"} for
            analytics and personalized ads.
          </li>
        )}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        2. Third-Party Services
      </h2>
      <p>
        The app uses third-party services that may collect information used to
        identify you:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {s.ads && <li>{s.adsProvider ?? "Google AdMob"}</li>}
        {s.gameServices && <li>Apple Game Center / Google Play Games</li>}
        {s.backend && <li>{s.backend}</li>}
        {s.iap && <li>{s.iapProvider ?? "Store billing library"}</li>}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        3. Data Security and Retention
      </h2>
      <p>
        Your data is stored on secure cloud servers. We use commercially
        acceptable means of protecting your personal information, but remember
        that no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        4. Data Deletion and Your Rights
      </h2>
      <p>
        You have the right to access, correct, or delete your personal data. See
        our{" "}
        <a
          className="text-primary hover:underline"
          href={`/legal/${app.slug}/data-deletion`}
        >
          Account &amp; Data Deletion
        </a>{" "}
        page for details and request methods.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        5. Children&apos;s Privacy
      </h2>
      <p>
        Our app does not address anyone under the age of 13. We do not knowingly
        collect personal information from children under 13.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Us</h2>
      <p className="font-semibold">S3K Studios</p>
      <p>
        Email: <Mail email={app.supportEmail} />
      </p>
    </div>
  );
}

export function renderTerms(app: LegalAppConfig, lang: Lang) {
  const s = app.services;

  if (lang === "tr") {
    return (
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Kullanım Şartları
        </h1>
        <p className="text-foreground-500 mb-8 italic">
          Son Güncelleme: {formatDate(app.lastUpdated, lang)}
        </p>

        <p>
          Bu Kullanım Şartları (&quot;Şartlar&quot;),{" "}
          <strong>S3K Studios</strong> tarafından geliştirilen{" "}
          <strong>{app.name}</strong> mobil uygulamasını (&quot;Uygulama&quot;)
          indirmeniz, yüklemeniz veya kullanmanız halinde sizinle aramızdaki
          sözleşmeyi oluşturur. Uygulamayı kullanarak bu Şartları kabul etmiş
          sayılırsınız.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Lisans</h2>
        <p>
          S3K Studios, size Uygulamayı yalnızca kişisel, ticari olmayan
          amaçlarla kullanmanız için sınırlı, münhasır olmayan, devredilemez bir
          lisans verir. Uygulamanın kaynak kodunu tersine mühendislikle çözemez,
          kopyalayamaz, dağıtamaz veya türev çalışma oluşturamazsınız.
        </p>

        {s.platformSignIn && (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Hesaplar</h2>
            <p>
              Bazı özellikler (ilerleme kaydetme, skor tabloları, çok oyunculu
              mod) Apple Game Center veya Google Play Games ile oturum açmanızı
              gerektirir. Hesabınız Apple/Google tarafından yönetilir; hesap
              güvenliğinden ve hesabınız altında gerçekleşen tüm etkinliklerden
              siz sorumlusunuz.
            </p>
          </>
        )}

        {s.iap && (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. Uygulama İçi Satın Alımlar
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Uygulama, sanal içerik veya özellik ayrıcalıkları sunan uygulama
                içi satın alımlar içerebilir. Satın alımlar{" "}
                {app.services.iapProvider ?? "mağazanın satın alma kütüphanesi"}{" "}
                aracılığıyla, doğrudan Apple App Store veya Google Play
                üzerinden işlenir.
              </li>
              <li>
                Tüm ödemeler ilgili mağaza hesabınıza (Apple ID / Google hesabı)
                yansıtılır; fatura ve iade talepleri doğrudan Apple veya Google
                üzerinden yönetilmelidir. S3K Studios ödeme bilgilerinizi görmez
                veya saklamaz.
              </li>
              <li>
                Satın alınan sanal içerikler herhangi bir gerçek para değeri
                taşımaz ve iade edilemez.
              </li>
            </ul>
          </>
        )}

        <h2 className="text-xl font-semibold mt-8 mb-4">
          4. Kullanıcı Davranışı
        </h2>
        <p>
          Uygulamayı yasa dışı amaçlarla, hile veya bot yazılımlarıyla, diğer
          kullanıcıları taciz edecek şekilde ya da oyunun bütünlüğünü bozacak
          biçimde kullanamazsınız. Bu kurallara aykırı davranış tespit edilirse
          hesabınız askıya alınabilir veya kapatılabilir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Fikri Mülkiyet</h2>
        <p>
          Uygulama ve içerdiği tüm görsel, ses, kod ve tasarım unsurları S3K
          Studios&apos;a aittir ve telif hakkı ile korunmaktadır. Şartlar
          kapsamında verilen sınırlı lisans dışında hiçbir hak size devredilmez.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Fesih</h2>
        <p>
          Bu Şartları ihlal etmeniz halinde, uygulamaya erişiminizi önceden
          bildirimde bulunmaksızın askıya alma veya sonlandırma hakkımızı saklı
          tutarız.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Sorumluluk Reddi</h2>
        <p>
          Uygulama &quot;olduğu gibi&quot; sunulmaktadır. S3K Studios,
          uygulamanın kesintisiz veya hatasız çalışacağını garanti etmez ve
          yürürlükteki mevzuatın izin verdiği azami ölçüde dolaylı, arızi veya
          sonuç niteliğindeki zararlardan sorumlu tutulamaz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Değişiklikler</h2>
        <p>
          Bu Şartları zaman zaman güncelleyebiliriz. Önemli değişiklikler
          uygulama içi bildirim veya bu sayfa üzerinden duyurulacaktır.
          Güncelleme sonrası uygulamayı kullanmaya devam etmeniz, yeni şartları
          kabul ettiğiniz anlamına gelir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. İletişim</h2>
        <p className="font-semibold">S3K Studios</p>
        <p>
          E-posta: <Mail email={app.supportEmail} />
        </p>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>
      <p className="text-foreground-500 mb-8 italic">
        Last Updated: {formatDate(app.lastUpdated, lang)}
      </p>

      <p>
        These Terms of Service (&quot;Terms&quot;) form the agreement between
        you and <strong>S3K Studios</strong> governing your download,
        installation, or use of the <strong>{app.name}</strong> mobile
        application (the &quot;App&quot;). By using the App, you agree to be
        bound by these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. License</h2>
      <p>
        S3K Studios grants you a limited, non-exclusive, non-transferable
        license to use the App for your personal, non-commercial purposes. You
        may not reverse engineer, copy, distribute, or create derivative works
        based on the App.
      </p>

      {s.platformSignIn && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Accounts</h2>
          <p>
            Some features (saved progress, leaderboards, multiplayer) require
            signing in with Apple Game Center or Google Play Games. Your account
            is managed by Apple/Google; you are responsible for its security and
            for all activity that occurs under it.
          </p>
        </>
      )}

      {s.iap && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            3. In-App Purchases
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The App may offer in-app purchases for virtual content or feature
              unlocks, processed via{" "}
              {app.services.iapProvider ?? "the store's billing library"}{" "}
              directly through the Apple App Store or Google Play.
            </li>
            <li>
              All payments are billed to your store account (Apple ID / Google
              account); billing disputes and refund requests must be handled
              directly through Apple or Google. S3K Studios never sees or stores
              your payment information.
            </li>
            <li>
              Purchased virtual items have no real-world monetary value and are
              non-refundable.
            </li>
          </ul>
        </>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
      <p>
        You may not use the App for unlawful purposes, use cheats or bots,
        harass other users, or otherwise undermine the integrity of the game.
        Violations may result in suspension or termination of your account.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        5. Intellectual Property
      </h2>
      <p>
        The App and all its visual, audio, code, and design elements are owned
        by S3K Studios and protected by copyright. No rights are granted to you
        beyond the limited license described in these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to the App
        without prior notice if you violate these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">7. Disclaimer</h2>
      <p>
        The App is provided &quot;as is.&quot; S3K Studios does not guarantee
        uninterrupted or error-free operation and, to the fullest extent
        permitted by law, is not liable for indirect, incidental, or
        consequential damages.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        announced via an in-app notice or on this page. Continued use of the App
        after an update constitutes acceptance of the revised Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
      <p className="font-semibold">S3K Studios</p>
      <p>
        Email: <Mail email={app.supportEmail} />
      </p>
    </div>
  );
}

export function renderDataDeletion(app: LegalAppConfig, lang: Lang) {
  const s = app.services;

  if (lang === "tr") {
    return (
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Hesap ve Veri Silme
        </h1>
        <p className="text-foreground-500 mb-8 italic">
          Son Güncelleme: {formatDate(app.lastUpdated, lang)}
        </p>

        <p>
          Bu sayfa, <strong>{app.name}</strong> mobil uygulamasında
          oluşturduğunuz verileri nasıl silebileceğinizi açıklar. Bu sayfaya,
          uygulamayı yüklemeden veya oturum açmadan da erişebilirsiniz.
        </p>

        {s.platformSignIn && (
          <p>
            Uygulama girişi Apple Game Center / Google Play Games üzerinden
            yapıldığından, oyuncu hesabınızın kendisi Apple veya Google
            tarafından yönetilir; o hesabı silmek isterseniz doğrudan Apple ya
            da Google ile iletişime geçmeniz gerekir. Aşağıdaki adımlar yalnızca
            S3K Studios sunucularında oyuncu kimliğinizle ilişkilendirilmiş
            olarak tuttuğumuz verileri kapsar.
          </p>
        )}

        <h2 className="text-xl font-semibold mt-8 mb-4">
          1. Veri Silme Talebi
        </h2>
        <p>
          Oyuncu kimliğinizle ilişkili verilerin silinmesini talep etmek için,
          aşağıdaki adrese hesabınızla ilişkili bilgileri (oyuncu adı, platform:
          iOS/ Android) içeren bir e-posta gönderebilirsiniz:
        </p>
        <p>
          <Mail email={app.supportEmail} subject="Veri Silme Talebi" />
        </p>
        <p>
          Talebiniz, kimliğinizin doğrulanmasının ardından en geç 30 gün içinde
          işleme alınır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          2. Hangi Veriler Silinir
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {s.backend && (
            <li>
              Oyun ilerlemesi, ayarlar ve skor tablosu kayıtları ({s.backend})
            </li>
          )}
          {s.gameServices && <li>Çok oyunculu mod / lobi verileri</li>}
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. Saklanması Gereken Veriler
        </h2>
        {s.iap ? (
          <p>
            Yasal muhasebe ve vergi yükümlülüklerimiz gereği, uygulama içi satın
            alım işlem kayıtları (
            {s.iapProvider ?? "mağaza satın alma kütüphanesi"} üzerinden yapılan
            ödemeler) ilgili mevzuatın öngördüğü süre boyunca, kişisel kimlikle
            ilişkilendirilmeden saklanabilir. Bu kayıtlar verileriniz
            silindikten sonra yeni bir hesapla ilişkilendirilmez.
          </p>
        ) : (
          <p>
            Yasal bir yükümlülük olmadıkça, silme talebinden sonra herhangi bir
            veri saklanmaz.
          </p>
        )}

        <h2 className="text-xl font-semibold mt-8 mb-4">4. İlgili Belgeler</h2>
        <p>
          Verilerinizin nasıl toplandığı ve kullanıldığı hakkında daha fazla
          bilgi için{" "}
          <a
            className="text-primary hover:underline"
            href={`/legal/${app.slug}/privacy`}
          >
            Gizlilik Politikamıza
          </a>{" "}
          göz atabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Account &amp; Data Deletion
      </h1>
      <p className="text-foreground-500 mb-8 italic">
        Last Updated: {formatDate(app.lastUpdated, lang)}
      </p>

      <p>
        This page explains how to delete the data we hold about you from the{" "}
        <strong>{app.name}</strong> mobile app. You can access this page without
        installing the app or signing in.
      </p>

      {s.platformSignIn && (
        <p>
          Since sign-in is handled via Apple Game Center / Google Play Games,
          your player account itself is managed by Apple or Google — to delete
          that account, contact Apple or Google directly. The steps below only
          cover the data S3K Studios stores on our own servers, linked to your
          player ID.
        </p>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        1. Requesting Deletion
      </h2>
      <p>
        To request deletion of the data linked to your player ID, email us with
        your player name and platform (iOS/Android):
      </p>
      <p>
        <Mail email={app.supportEmail} subject="Data Deletion Request" />
      </p>
      <p>
        Requests are processed within 30 days after we verify your identity.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. What Gets Deleted</h2>
      <ul className="list-disc pl-6 space-y-2">
        {s.backend && (
          <li>
            Game progress, settings, and leaderboard entries ({s.backend})
          </li>
        )}
        {s.gameServices && <li>Multiplayer / lobby data</li>}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. What Is Retained</h2>
      {s.iap ? (
        <p>
          For legal accounting and tax purposes, in-app purchase transaction
          records (via {s.iapProvider ?? "the store's billing library"}) may be
          retained for the period required by applicable law, disassociated from
          your personal identity. These records are not linked to any new
          account after deletion.
        </p>
      ) : (
        <p>
          Unless required by law, no data is retained after a deletion request
          is processed.
        </p>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Related Documents</h2>
      <p>
        For more information on how your data is collected and used, see our{" "}
        <a
          className="text-primary hover:underline"
          href={`/legal/${app.slug}/privacy`}
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
