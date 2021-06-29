import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { BiMap } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineClock } from 'react-icons/hi';

import WhiteLogo from '../assets/carvalhaco-logo-2-white.png';
export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerRowOne}>
        <p>Há mais de 19 anos no mercado a Carvalhaço Reciclagem atua no ramo de compra e venda de materiais recicláveis e seus serviços.</p>
        <div className={styles.footerNav}>
          <Image src={WhiteLogo} />
          <ul>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
            <Link href="/servicos">
              <a>
                Serviços
              </a>
            </Link>
            <Link href="/empresa">
              <a>
                Empresa
              </a>
            </Link>
            <Link href="/blog">
              <a>
                Blog
              </a>
            </Link>
            <Link href="/contato">
              <a>
                Contato
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <div className={styles.ContactRow}>
            <BiMap />
            <p>Rua João João, Nº 999, Centro<br></br>
            São Paulo - SP</p>
          </div>
          <div className={styles.ContactRow}>
            <FaWhatsapp />
            <p>(71) 99210-3020 / (71) 99180-3845<br></br>
            (71) 99224-2223</p>
          </div>
          <div className={styles.ContactRow}>
            <HiOutlineMail />
            <a href="mailto:contato@carvalhaco.com.br?Subject=Acesso%20pelo%20site">contato@carvalhaco.com.br</a>
          </div>
          <div className={styles.ContactRow}>
            <HiOutlineClock />
            <p>Seg à sex das 08 às 18h /<br></br> Sab das 08 às 12h</p>
          </div>
        </div>
      </div>
      <div className={styles.footerRowTwo}>
        <p>® Carvalhaço 2021, Todos os direitos Reservados | Desenvolvido por Agência Guia-se Marketing Digital</p>
        <div className={styles.socialMediaFooter}>
          <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank">
              <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
};