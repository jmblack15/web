/* eslint-disable @next/next/no-img-element */
import styles from './page.module.css'
import { CarouselProjects } from '@/components/CarouselProjects'
import { CarouselClients } from '@/components/CarouselClients'
import { FormContact } from '@/components/FormContact'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.banner}>
      </section>
      <section className={styles.manifest}>
        <h2>Manifiesto de marca</h2>
        <p>Queremos abrir la puerta al futuro energético que todos
          merecemos, siendo protagonistas del sector eléctrico
          apostando por la energía solar, pensando y trabajando por
          un futuro sostenible para nuestra sociedad y para nuestro
          hogar. Somos más que una empresa; somos una comunidad
          comprometida con un bien mayor. No podemos permitirnos
          el lujo de ser solo actores económicos; tenemos un rol
          social y ecológico que cumplir. Nos mueve la protección
          de nuestro hogar, de nuestro planeta, lo sentimos como
          una responsabilidad moral y social. Aquí, sostenibilida
          no es una palabra de moda, es nuestra razón de ser.
          Queremos ser más que un simple proveedor de energía
          solar. Queremos ser agentes de cambio en un mundo que
          necesita urgentemente una nueva dirección. Queremos
          ser la empresa que no solo transforme redes eléctricas,
          sino que también transforme vidas y comunidades.
          Por eso, energizar una ciudad con fuentes sostenibles
          no es solo un proyecto; es el comienzo de un movimiento
          más grande, más justo, y más equitativo. Y,
          honestamente, Ciudad suena como un muy buen
          primer paso para eso.</p>
      </section>

      <section id='nosotros' className={styles.weare}>
        <div className={styles.info}>
          <h2>Quienes somos</h2>
          <p>Ciudad Renovable es una empresa especializada en el diseño, construcción, operación y consultoría de proyectos de ingeniería con enfoque en energía solar, asegurando la eficiencia energética y optimizando el uso de los recursos.</p>
        </div>

        <video
          src="/videos/DJI_0292.MP4"
          controls
        />
      </section>

      <section className={styles.impact}>
        <div>
          <h2>Nuestro impacto en números</h2>
          <div className={styles.line}></div>
        </div>

        <img src='/impact.png' alt='impacto' />
      </section>

      <section className={styles.projects}>

        <div>
          <h2>Proyectos</h2>
          <div className={styles.line}></div>
        </div>

        <p>Te presentamos nuestros proyectos más destacados</p>

        <div className={styles.carousel_container}>
          <CarouselProjects />
        </div>

        <Link
          href='/proyectos'
          className={styles.button_projects}
        >
          Ver Más Proyectos
        </Link>
      </section>

      <section className={styles.clients}>
        <div>
          <h2>Nuestros Clientes</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.carouselClients_contaner}>
          <CarouselClients />
        </div>
      </section>

      <section id='contacto' className={styles.contact}>
        <div>
          <h2>Contáctanos</h2>
          <div className={styles.line}></div>
        </div>

        <p>Déjanos tus datos para brindarte más información</p>

        <FormContact />
      </section>
    </main>
  )
}
