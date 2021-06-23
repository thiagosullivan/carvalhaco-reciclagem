import Image from 'next/image';
import Link from 'next/link';
import EmpresaHome from '../assets/empresa-home.png';
import styles from '../styles/empresaSection.module.css';

export const EmpresaSection = () => {
  return (
    <div className={styles.empresasection}>
      <div className={styles.empresacontent}>
        <div className={styles.empresacontentTxt}>
          <h2>Conheça a<br></br>
          <span>Carvalhaço</span></h2>
          <p>Há mais de 19 anos no mercado a Carvalhaço Reciclagem atua no ramo de compra e venda de materiais recicláveis e seus serviços.
          Transporte de cargas, coleta descarte 
          de resíduos, limpeza de eventos, são alguns dos serviços oferecidos pela Carvalhaço.</p>
          <Link className={styles.btn} href="/empresa">
            <button className={styles.btnlink}>
              Saiba Mais
            </button>
          </Link>
        </div>
        <Image className={styles.imageEmpresa} src={EmpresaHome} />
      </div>
    </div>

    
  )
};