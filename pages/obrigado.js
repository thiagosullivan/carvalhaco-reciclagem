import Head from "next/head";
import Link from "next/link";
import { Menu } from '../components/menu';
import styles from '../styles/Obrigado.module.css';
import { BiLeftArrowAlt } from 'react-icons/bi';

export default function Obrigado(){
  return (
    <div className={styles.thanksPage}>
      <Head>
        <title>Carvalhaço Reciclagem - Obrigado!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <h1>Obrigado por enviar seu e-mail!</h1>
        <p>Retornaremos o mais breve possível.</p>
        <Link href="/">
          <a className={styles.thanksBack}>
            <BiLeftArrowAlt />
            Voltar Para a Home
          </a>
        </Link>
      </main>
    </div>
  )
};