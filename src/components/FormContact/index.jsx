import './formContact.css';

const FormContact = () => {
  return (
    <section className='form_container'>
      <div className='form_title'>
        <h2>Contáctanos</h2>
        <span>Déjanos tus datos para obtener más información</span>
      </div>
      <form>
        <div className='input_container'>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className='input_container'>
          <label htmlFor="">Email</label>

          <input type="text" />
        </div>
        <div className='input_container'>
          <label htmlFor="">Celular</label>
          <input type="tel" />
        </div>
        <button>Enviar</button>
      </form>
    </section>

  )
}

export { FormContact }