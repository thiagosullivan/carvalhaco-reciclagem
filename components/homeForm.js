import Link from "next/link";
import styles from '../styles/HomeForm.module.css';

export const FormHome = () => {
  return (
    <div class={styles.formHome}>
      <div className={styles.formHome__colLeft}>
        <h3>Entre em contato</h3>
        <p>Temos um time pronto para atender você e esclarecer as suas dúvidas</p>
      </div>
      <div className={styles.formHome__colRight}>
        <p>Siga para o nosso formulário</p>
        <Link href="/contato">
          <a>
            <button>
              Formulário
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
};