import React from 'react'
import "../scss/Footer.scss"
import { useForm } from 'react-hook-form'

const Footer = () => {

  const { register, handleSubmit, formState: {errors} } = useForm( {
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    }
  });

  return (
    <section className="footer">

{/* footer 1st part */}
      <div className="footer-documents">
            <h2>Dokumenty</h2>
            <a href="/">Zpracovaní osobních údajů</a>
            <a href="/">Obchodní podmínky</a>
            <a href="/">Cookies</a>
            <h3>Copyright 2021 &copy;Vytvořil Yeetzone</h3>
      </div>

{/* footer 2nd part */}
      <div className="footer-social">
        <h2>Sociální sítě</h2>
        <div className="footer-two-socials">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>
        <button type="button">Prihlášení</button>
      </div>

{/* footer 3rd part  */}
      <div className="footer-form">

        <form onSubmit={handleSubmit( (data) => {
          console.log(data)
        })}>

          <div className="footer-form-little">
            
            <div className="footer-form-little-p">
             <input
             {...register("firstName", {
              required: 'Prosím vyplňte následující pole',
              minLength: {
                value: 3,
                message: "Méno musí obsahovat více jak 3 písmena!"
                }
               })} placeholder='Jméno'
              />
              <p>{errors.firstName?.message}</p>
            </div>

            <div className="footer-form-little-p">
            <input
             {...register("lastName", {
             required: 'Prosím vyplňte následující pole',
             minLength: {
              value: 4,
              message: "Přímení musí obsahovat více jak 3 písmena!"
              }
             })} placeholder='Přijmení' 
            />
            <p>{errors.lastName?.message}</p>
            </div>

            <div className="footer-form-little-p">
            <input
             {...register("email", {
             required: 'Prosím vyplňte nasledujúci pole',
             minLength: {
              value: 8,
              message: "Email musí být správne vyplňen!"
              }
              })} placeholder='Váš email' 
            />
            <p>{errors.email?.message}</p>
            </div>

          </div>

          <div className="footer-form-large">
            <textarea {...register("message", {
              required: 'Prosím vyplňte nasledujúci pole',
              minLength: {
                value: 20,
                message: "Textové pole musí mít alespoň 20 znaků!",
              }
            })} placeholder='Vaše zpráva'
            />
            <p>{errors.message?.message}</p>
          </div>

          <div className="footer-form-submit">
            <input type="submit" value="Odeslat" />
          </div>

        </form>

      </div>
    </section>
  )
}

export default Footer