import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar*/}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            src="/Telkomsel_(2021).svg.png"
            alt="Telkomsel Logo"
            width={150}
            height={48}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.navLinks}>
          <a href="#produk" className={styles.navLink}>Produk</a>
          <a href="#promo" className={styles.navLink}>Promo</a>
          <a href="#" className={styles.navLink}>Bantuan</a>
          <a href="#" className={styles.navCta}>Masuk MyTelkomsel</a>
        </div>
      </nav>

      {/*Hero Section*/}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Buka Semua Peluang dengan Telkomsel</h1>
        <p className={styles.heroSubtitle}>
          Jaringan terluas, internet tercepat, dan promo tanpa henti untuk menemani aktivitas digitalmu setiap hari di seluruh pelosok negeri.
        </p>
        <div className={styles.heroButtons}>
          <a href="#" className={styles.btnPrimary}>Beli Paket Sekarang</a>
          <a href="#" className={styles.btnSecondary}>Pelajari Lebih Lanjut</a>
        </div>
      </section>

      {/* Packages*/}
      <section id="produk" className={`${styles.section} ${styles.packagesSection}`}>
        <h2 className={styles.sectionTitle}>Pilihan Paket Internet Terbaik</h2>
        <div className={styles.packagesGrid}>
          {/* Paket 1 */}
          <div className={styles.packageCard}>
            <span className={styles.packageBadge}>Paling Laris</span>
            <h3 className={styles.packageTitle}>Internet Sakti 35GB</h3>
            <div className={styles.packagePrice}>
              <span>Rp</span> 85.000
            </div>
            <p className={styles.packageValidity}>Masa aktif 30 Hari</p>
            <ul className={styles.packageFeatures}>
              <li><span className={styles.featureIcon}>✓</span> Kuota Utama 35GB</li>
              <li><span className={styles.featureIcon}>✓</span> Kuota Nonton 5GB</li>
              <li><span className={styles.featureIcon}>✓</span> Akses Premium Disney+</li>
            </ul>
            <a href="#" className={styles.btnBuy}>Beli Sekarang</a>
          </div>

          {/* Paket 2 */}
          <div className={styles.packageCard}>
            <span className={styles.packageBadge}>Rekomendasi</span>
            <h3 className={styles.packageTitle}>Combo Sakti 15GB</h3>
            <div className={styles.packagePrice}>
              <span>Rp</span> 65.000
            </div>
            <p className={styles.packageValidity}>Masa aktif 30 Hari</p>
            <ul className={styles.packageFeatures}>
              <li><span className={styles.featureIcon}>✓</span> Kuota Utama 15GB</li>
              <li><span className={styles.featureIcon}>✓</span> 150 Menit Nelpon Kesemua Operator</li>
              <li><span className={styles.featureIcon}>✓</span> 400 SMS</li>
            </ul>
            <a href="#" className={styles.btnBuy}>Beli Sekarang</a>
          </div>

          {/* Paket 3 */}
          <div className={styles.packageCard}>
            <span className={styles.packageBadge}>Solusi Tepat</span>
            <h3 className={styles.packageTitle}>Puas Scroll</h3>
            <div className={styles.packagePrice}>
              <span>Rp</span> 15.000
            </div>
            <p className={styles.packageValidity}>Masa aktif 3 Hari</p>
            <ul className={styles.packageFeatures}>
              <li><span className={styles.featureIcon}>✓</span> Kuota Sosmed 3GB</li>
              <li><span className={styles.featureIcon}>✓</span> Berlaku untuk IG, TikTok, FB</li>
              <li><span className={styles.featureIcon}>✓</span> Bebas Akses Chat</li>
            </ul>
            <a href="#" className={styles.btnBuy}>Beli Sekarang</a>
          </div>
        </div>
      </section>

      {/* section knp telkomsel */}
      <section className={`${styles.section} ${styles.whySection}`}>
        <h2 className={styles.sectionTitle}>Kenapa Menggunakan Telkomsel?</h2>
        <div className={styles.whyGrid}>
          {/*1 */}
          <div className={styles.whyCard}>
            <div className={styles.whyImageContainer}>
              <Image
                src="/why_telkomsel_1.svg"
                alt="Paket Terjangkau dan Fleksibel"
                width={120}
                height={120}
                className={styles.whyImage}
              />
            </div>
            <h4 className={styles.whyTitle}>Paket Terjangkau dan Fleksibel</h4>
            <p className={styles.whyText}>
              Paket data, telepon, dan SMS, mulai harian hingga bulanan dengan harga terjangkau
            </p>
          </div>

          {/*2 */}
          <div className={styles.whyCard}>
            <div className={styles.whyImageContainer}>
              <Image
                src="/why_telkomsel_2.svg"
                alt="Jaringan Terluas dan Terkuat"
                width={120}
                height={120}
                className={styles.whyImage}
              />
            </div>
            <h4 className={styles.whyTitle}>Jaringan Terluas dan Terkuat</h4>
            <p className={styles.whyText}>
              Di dalam negri ataupun luar negri, jaringan Telkomsel sudah pasti terpercaya paling aman untuk Anda!
            </p>
          </div>

          {/*3 */}
          <div className={styles.whyCard}>
            <div className={styles.whyImageContainer}>
              <Image
                src="/why_telkomsel_3.svg"
                alt="Promo dan Bonus Menarik"
                width={120}
                height={120}
                className={styles.whyImage}
              />
            </div>
            <h4 className={styles.whyTitle}>Promo dan Bonus Menarik</h4>
            <p className={styles.whyText}>
              Bonus kuota internet, diskon pembelian paket, hingga reward melalui program loyalitas yang memberikan nilai lebih
            </p>
          </div>
        </div>
      </section>

      {/* Section promo app*/}
      <section id="promo" className={styles.appPromoSection}>
        <div className={styles.appPromoContainer}>
          <div className={styles.appPromoContent}>
            <h2 className={styles.appPromoTitle}>
              Dapatkan lebih banyak promo dengan <span>MyTelkomsel APP</span>
            </h2>
            <div className={styles.appButtons}>
              <a href="#" className={styles.storeButton}>
                <Image src="/Google_Play_2022_icon.svg.png" alt="Google Play" width={24} height={24} />
                <div className={styles.storeText}>
                  <span className={styles.storeSmallText}>GET IT ON</span>
                  <span className={styles.storeBigText}>Google Play</span>
                </div>
              </a>
              <a href="#" className={styles.storeButton}>
                <Image src="/apple_logo.svg" alt="App Store" width={24} height={24} className={styles.appleIcon} />
                <div className={styles.storeText}>
                  <span className={styles.storeSmallText}>Download on the</span>
                  <span className={styles.storeBigText}>App Store</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.appPromoImageWrapper}>
            <Image
              src="/my_telkomsel_app.png"
              alt="MyTelkomsel App"
              width={320}
              height={400}
              className={styles.appPromoImage}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColLogo}>
            <Image
              src="/Telkomsel_(2021).svg.png"
              alt="Telkomsel Logo White"
              width={150}
              height={48}
            />
            <p>PT Telekomunikasi Selular<br />
              Telkomsel Smart Office<br />
              Jl. Jend. Gatot Subroto Kav. 52<br />
              Jakarta Selatan 12710
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Pilihan Produk</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Simpati</a></li>
              <li><a href="#">Telkomsel Halo</a></li>
              <li><a href="#">By.U</a></li>
              <li><a href="#">Roaming</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Layanan Digital</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Video</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Musik</a></li>
              <li><a href="#">Kuncie</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Bantuan</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Pusat Bantuan</a></li>
              <li><a href="#">Kendala Internet</a></li>
              <li><a href="#">Temukan GraPARI</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} PT Telekomunikasi Selular - (Valiant Joshua 2406352153)</p>
        </div>
      </footer>
    </main>
  );
}