import { useState } from "react";
import Head from "next/head";
import router, { useRouter } from "next/router";
import { Menu } from "../components/menu";
import { MenuMobile } from "../components/menuMobile";
import { Footer } from '../components/footer';
import styles from '../styles/Contato.module.css';

export default function Contato() {
  const [ loading, setLoading ] = useState(false);

  function handleSubmit(){
    setLoading(true);
  }
  
  function sendEmail() {
    const form = document.getElementById('form')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const phone = document.getElementById('phone').value
      const email = document.getElementById('email').value
      const company = document.getElementById('company').value
      const message = document.getElementById('message').value
    
      fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          company: company,
          message: message
        })
      }).then((response)=>{        
        console.log(response)        
        // alert('Email enviado com sucesso')
        setLoading(false);
        if (response.status == 200){
          router.push('/obrigado')
        }
      }).catch((error) => {
        console.log(error)
        alert('Ocorreu um erro')
      });
    })
  }

  return (
    <>
      <Head>
        <title>Carvalhaço Reciclagem - Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <MenuMobile />
      <form onSubmit={handleSubmit} className={styles.form} id='form'>
        <h1>Formulário de Contato</h1>
        <div className={styles.formContent}>
          <label htmlFor="name" className={styles.hiddenLabel}>
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            required
          />
          <label htmlFor="phone" className={styles.hiddenLabel}>
            Telefone
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Telefone/Whatsapp"
            required
          />
          <label htmlFor="email" className={styles.hiddenLabel}>
            E-mail
          </label>
          <input
            id="email"
            type="text"
            placeholder="Seu E-mail"
            required
          />
          <label htmlFor="company" className={styles.hiddenLabel}>
            Empresa
          </label>
          <input
            id="company"
            type="text"
            placeholder="Empresa (Opcional)"
          />
          <label htmlFor="message" className={styles.hiddenLabel}>
            Mensagem
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Mensagem"
            required
          />
          <button onClick={sendEmail}>Enviar</button>
        </div>
        { loading ? (
        <div class={styles.loading}>
          <span>Enviando...</span>
          <div className="spinner"></div>
        </div>
        ) : ''}
        
      </form>
      <Footer />
    </>
  )
};