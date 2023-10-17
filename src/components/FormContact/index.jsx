"use client"
import styles from './FormContact.module.css'

const FormContact = () => {
  return (
    <form className={styles.form}>
      <div>
        <h2>Contáctanos</h2>
        <span className={styles.text}>Déjanos tus datos para obtener más información</span>
      </div>

      <div>
        <div className={styles.input_container}><label htmlFor="Name">Nombre</label><input type="text" name="Name" id="Name" /></div>
        <div className={styles.input_container}><label htmlFor="Email">Email</label><input type="text" name="Email" id="Email" /></div>
        <div className={styles.input_container}><label htmlFor="Phone">Celular</label><input type="text" name="Phone" id="Phone" /></div>

        <button type='submit'>
          Enviar
        </button>
      </div>
    </form>
  )
}

export { FormContact }