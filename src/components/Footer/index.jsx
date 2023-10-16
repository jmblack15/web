import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.logo_container}
        href="/"
      >
        <Image
          src='/logo_footer.png'
          alt="logo"
          fill
          sizes="313px"
          style={{
            objectFit: 'contain'
          }}
        />
      </a>
      <div className={styles.info_containers}>
        <div>
          <Image
            src='/icons/logowssp.svg'
            alt="logo"
            width={20}
            height={20}
          />
          <a about='_blannk' href='https://wa.me/30169559630'>wpp: 301 69559630</a>
        </div>
        <div>
          <div>
            <Image
              src='/icons/logoemail.svg'
              alt="logo"
              width={20}
              height={20}
            />
            <a about='_blannk' href='sjaramillo@ciudadrenovable.com'>sjaramillo@ciudadrenovable.com</a>
          </div>
        </div>
      </div>
      <div className={styles.info_containers}>
        <div>
          <Image
            src='/icons/icons8-instagram.svg'
            alt="logo"
            width={20}
            height={20}
          />
          <a about='_blannk' href="https://www.instagram.com/ciudadrenovable/?igshid=MzRlODBiNWFlZA%3D%3D">Instagram</a>
        </div>
        <div>
          <div>
            <Image
              src='/icons/icons8-facebook.svg'
              alt="logo"
              width={20}
              height={20}
            />
            <Link about='_blannk' href="https://www.facebook.com/ciudadrenovable">facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }