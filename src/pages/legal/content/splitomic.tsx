import { LegalAppConfig, LegalContent } from "../../../types/legal";
import { Mail, formatDate, Lang } from "../legalContentHelpers";

/**
 * Legal content for Splitomic. Authored specifically for this app — do not
 * reuse this file as a template for another game. Each app's actual data
 * practices differ enough (accounts, ads, backend, IAP) that sharing generic
 * copy across apps has produced inaccurate legal pages before. Copy this
 * file's shape (privacy/terms/dataDeletion) for a new app, then write that
 * app's real practices from scratch.
 */

function renderPrivacyPolicy(app: LegalAppConfig, lang: Lang) {
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
          Uygulamamız, oyun deneyimini sağlamak, çok oyunculu modu çalıştırmak
          ve yasal yükümlülüklerimizi yerine getirmek amacıyla belirli bilgiler
          toplar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Anonim Kimlik:</strong> Uygulama, çok oyunculu oyunlarda
            oyuncuları birbirinden ayırt edebilmek için Firebase üzerinden
            cihazınıza anonim bir kimlik atar. Bu işlem tamamen görünmezdir —
            herhangi bir hesap oluşturmanız, e-posta veya şifre girmeniz
            gerekmez, herhangi bir giriş ekranı gösterilmez.
          </li>
          <li>
            <strong>Oyun Verileri:</strong> Çok oyunculu lobi verileriniz
            (seçtiğiniz oyuncu adı, renk, oyun durumu) bu anonim kimlikle
            ilişkilendirilmiş şekilde Firebase Realtime Database üzerinde,
            yalnızca oyun süresince saklanır.
          </li>
          <li>
            <strong>Teknik Veriler:</strong> Cihaz modeli, işletim sistemi
            sürümü ve reklam kimlikleri (IDFA/AAID), reklam hizmeti sağlayıcımız
            Google AdMob tarafından analiz ve (izninize bağlı olarak)
            kişiselleştirilmiş reklam amacıyla toplanabilir.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          2. Üçüncü Taraf Hizmetleri
        </h2>
        <p>
          Veri toplayabilecek veya işleyebilecek şu üçüncü taraf hizmetlerini
          kullanmaktayız:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google AdMob</li>
          <li>Firebase (Realtime Database, Anonim Authentication)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Reklam Onayı</h2>
        <p>
          Avrupa Birliği, İngiltere ve İsviçre&apos;deki kullanıcılara,
          Google&apos;ın Kullanıcı Mesajlaşma Platformu (UMP) aracılığıyla bir
          reklam onay formu gösterilir. iOS cihazlarda ayrıca App Tracking
          Transparency (ATT) izni istenir; bu izni reddetmeniz Uygulamayı
          kullanmanızı hiçbir şekilde etkilemez, sadece kişiselleştirilmemiş
          reklam gösterilir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          4. Veri Güvenliği ve Saklama
        </h2>
        <p>
          Verileriniz güvenli bulut sunucularında saklanır. Kişisel
          bilgilerinizi korumak için endüstri standartlarında yöntemler
          kullanmaktayız. Ancak internet üzerinden iletilen hiçbir yöntemin %100
          güvenli olmadığını belirtmek isteriz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          5. Veri Silme ve Kullanıcı Hakları
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
          sayfamıza bakabilirsiniz. Uygulama kalıcı bir kullanıcı hesabı (isim,
          e-posta vb.) oluşturmadığından, silme talebi üzerine ilişkili anonim
          kimlik ve ona bağlı çok oyunculu oyun verileri silinir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          6. Çocukların Gizliliği
        </h2>
        <p>
          Uygulamamız 13 yaşın altındaki çocuklara doğrudan hitap etmemektedir.
          Bilinçli olarak çocuklardan veri toplamıyoruz. Aksi bir durum fark
          edilirse veriler derhal silinecektir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. İletişim</h2>
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
        Our App collects certain information to provide the gameplay experience,
        run multiplayer mode, and fulfill our legal obligations:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Anonymous ID:</strong> The App assigns an anonymous ID to your
          device via Firebase so it can tell players apart in multiplayer games.
          This process is entirely invisible — you never need to create an
          account, enter an email or password, and no sign-in screen is ever
          shown.
        </li>
        <li>
          <strong>Game Data:</strong> Your multiplayer lobby data (your chosen
          player name, color, game state) is linked to this anonymous ID and
          stored on Firebase Realtime Database only for the duration of the
          game.
        </li>
        <li>
          <strong>Technical Data:</strong> Device model, OS version, and
          advertising identifiers (IDFA/AAID) may be collected by our
          advertising provider Google AdMob for analytics and, subject to your
          consent, personalized advertising.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        2. Third-Party Services
      </h2>
      <p>
        The app uses third-party services that may collect information used to
        identify you:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Google AdMob</li>
        <li>Firebase (Realtime Database, Anonymous Authentication)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        3. Advertising Consent
      </h2>
      <p>
        Users in the European Union, the United Kingdom, and Switzerland are
        shown an advertising consent form via Google&apos;s User Messaging
        Platform (UMP). On iOS devices, App Tracking Transparency (ATT)
        permission is also requested; declining this permission does not affect
        your ability to use the App in any way — only non-personalized ads are
        shown instead.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        4. Data Security and Retention
      </h2>
      <p>
        Your data is stored on secure cloud servers. We use commercially
        acceptable means of protecting your personal information, but remember
        that no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        5. Data Deletion and Your Rights
      </h2>
      <p>
        You have the right to access, correct, or delete the data we collect.
        See our{" "}
        <a
          className="text-primary hover:underline"
          href={`/legal/${app.slug}/data-deletion`}
        >
          Account &amp; Data Deletion
        </a>{" "}
        page for details and request methods. Since the App does not create a
        persistent user account (name, email, etc.), a deletion request removes
        the associated anonymous ID and any multiplayer game data linked to it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        6. Children&apos;s Privacy
      </h2>
      <p>
        Our app does not address anyone under the age of 13. We do not knowingly
        collect personal information from children under 13. If we become aware
        otherwise, the data will be deleted immediately.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p className="font-semibold">S3K Studios</p>
      <p>
        Email: <Mail email={app.supportEmail} />
      </p>
    </div>
  );
}

function renderTerms(app: LegalAppConfig, lang: Lang) {
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

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Hesaplar</h2>
        <p>
          Uygulama, hesap oluşturmanızı gerektirmez ve herhangi bir giriş ekranı
          sunmaz. Çok oyunculu modun çalışabilmesi için cihazınıza otomatik ve
          görünmez bir anonim kimlik atanır; bu kimlik yalnızca sizi diğer
          oyunculardan ayırt etmek için kullanılır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. Kullanıcı Davranışı
        </h2>
        <p>
          Uygulamayı yasa dışı amaçlarla, hile veya bot yazılımlarıyla, diğer
          kullanıcıları taciz edecek şekilde ya da oyunun bütünlüğünü bozacak
          biçimde kullanamazsınız. Bu kurallara aykırı davranış tespit edilirse
          Uygulamaya erişiminiz kısıtlanabilir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Fikri Mülkiyet</h2>
        <p>
          Uygulama ve içerdiği tüm görsel, ses, kod ve tasarım unsurları S3K
          Studios&apos;a aittir ve telif hakkı ile korunmaktadır. Şartlar
          kapsamında verilen sınırlı lisans dışında hiçbir hak size devredilmez.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Fesih</h2>
        <p>
          Bu Şartları ihlal etmeniz halinde, Uygulamaya erişiminizi önceden
          bildirimde bulunmaksızın kısıtlama hakkımızı saklı tutarız.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Sorumluluk Reddi</h2>
        <p>
          Uygulama &quot;olduğu gibi&quot; sunulmaktadır. S3K Studios,
          Uygulamanın kesintisiz veya hatasız çalışacağını garanti etmez ve
          yürürlükteki mevzuatın izin verdiği azami ölçüde dolaylı, arızi veya
          sonuç niteliğindeki zararlardan sorumlu tutulamaz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Değişiklikler</h2>
        <p>
          Bu Şartları zaman zaman güncelleyebiliriz. Önemli değişiklikler
          uygulama içi bildirim veya bu sayfa üzerinden duyurulacaktır.
          Güncelleme sonrası Uygulamayı kullanmaya devam etmeniz, yeni şartları
          kabul ettiğiniz anlamına gelir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. İletişim</h2>
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

      <h2 className="text-xl font-semibold mt-8 mb-4">2. Accounts</h2>
      <p>
        The App does not require you to create an account and does not present
        any sign-in screen. To make multiplayer mode work, an automatic and
        invisible anonymous ID is assigned to your device; this ID is used only
        to distinguish you from other players.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. User Conduct</h2>
      <p>
        You may not use the App for unlawful purposes, use cheats or bots,
        harass other users, or otherwise undermine the integrity of the game.
        Violations may result in your access to the App being restricted.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        4. Intellectual Property
      </h2>
      <p>
        The App and all its visual, audio, code, and design elements are owned
        by S3K Studios and protected by copyright. No rights are granted to you
        beyond the limited license described in these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Termination</h2>
      <p>
        We reserve the right to restrict your access to the App without prior
        notice if you violate these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">6. Disclaimer</h2>
      <p>
        The App is provided &quot;as is.&quot; S3K Studios does not guarantee
        uninterrupted or error-free operation and, to the fullest extent
        permitted by law, is not liable for indirect, incidental, or
        consequential damages.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        announced via an in-app notice or on this page. Continued use of the App
        after an update constitutes acceptance of the revised Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <p className="font-semibold">S3K Studios</p>
      <p>
        Email: <Mail email={app.supportEmail} />
      </p>
    </div>
  );
}

function renderDataDeletion(app: LegalAppConfig, lang: Lang) {
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
          Bu sayfa, <strong>{app.name}</strong> mobil uygulamasında oluşturulan
          verilerin nasıl silinebileceğini açıklar. Bu sayfaya, uygulamayı
          yüklemeden de erişebilirsiniz.
        </p>

        <p>
          Uygulama herhangi bir hesap oluşturmanızı gerektirmez; bir giriş
          ekranı sunmaz. Çok oyunculu modun çalışabilmesi için cihazınıza
          görünmez, anonim bir kimlik (Firebase Authentication — Anonim) atanır.
          Bu sayfa, o anonim kimlikle ilişkilendirilmiş sunucu tarafı verilerin
          nasıl silineceğini açıklar.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          1. Cihazınızda Saklanan Veriler
        </h2>
        <p>
          Oyun ilerlemeniz, coin&apos;leriniz, ayarlarınız ve oyun geçmişiniz
          yalnızca cihazınızda saklanır; sunucularımıza gönderilmez. Uygulamayı
          cihazınızdan kaldırmanız (uninstall) bu verilerin tamamını siler.
          Dilerseniz Ayarlar &gt; İlerlemeyi Sıfırla ile uygulama içinden de
          aynı işlemi yapabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          2. Sunucu Tarafında Tutulan Veriler
        </h2>
        <p>
          Yalnızca çok oyunculu modda katıldığınız oyun odalarına (lobi) ait
          geçici veriler (seçtiğiniz oyuncu adı, renk, oyun durumu) Firebase
          Realtime Database üzerinde tutulur. Bu veriler:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Oyun bittiğinde veya odadan ayrıldığınızda kısa süre içinde otomatik
            olarak silinir,
          </li>
          <li>
            Hiçbir zaman isim-soyisim, e-posta, telefon gibi kimliklendirici bir
            bilgi içermez.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. Manuel Silme Talebi
        </h2>
        <p>
          Aktif bir çok oyunculu oyun sırasında verilerinizin hemen silinmesini
          isterseniz, aşağıdaki adrese platformunuzu (iOS/Android) ve varsa lobi
          kodunuzu belirterek e-posta gönderebilirsiniz:
        </p>
        <p>
          <Mail email={app.supportEmail} subject="Veri Silme Talebi" />
        </p>
        <p>Talebiniz en geç 30 gün içinde işleme alınır.</p>

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
        This page explains how the data created in the{" "}
        <strong>{app.name}</strong> mobile app can be deleted. You can access
        this page without installing the app.
      </p>

      <p>
        The App does not require you to create any account and does not present
        a sign-in screen. To make multiplayer mode work, an invisible, anonymous
        ID (Firebase Authentication — Anonymous) is assigned to your device.
        This page explains how the server-side data associated with that
        anonymous ID can be deleted.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        1. Data Stored On Your Device
      </h2>
      <p>
        Your game progress, coins, settings, and game history are stored only on
        your device; they are never sent to our servers. Uninstalling the app
        deletes all of this data. You can also do this from within the app via
        Settings &gt; Reset Progress.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        2. Data Stored On The Server
      </h2>
      <p>
        Only temporary data belonging to the multiplayer game rooms (lobbies)
        you join — your chosen player name, color, and game state — is kept on
        Firebase Realtime Database. This data:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Is automatically deleted shortly after the game ends or you leave the
          room,
        </li>
        <li>
          Never contains identifying information such as your full name, email,
          or phone number.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        3. Manual Deletion Request
      </h2>
      <p>
        If you want your data deleted immediately during an active multiplayer
        game, you can email the address below with your platform (iOS/Android)
        and, if applicable, your lobby code:
      </p>
      <p>
        <Mail email={app.supportEmail} subject="Data Deletion Request" />
      </p>
      <p>Your request will be processed within 30 days at the latest.</p>

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

export const splitomicLegalContent: LegalContent = {
  privacy: renderPrivacyPolicy,
  terms: renderTerms,
  "data-deletion": renderDataDeletion,
};
