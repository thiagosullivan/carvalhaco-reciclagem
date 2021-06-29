import Link from 'next/link';
import styles from '../styles/ServicesHome.module.css';

export const ServicesHome = () => {
  return (
    <div className={styles.servicesHomeSection}>
      <h2>Serviços</h2>
      <p>A Carvalhaço é especialista na prestação dos seguintes serviços:</p>
      <div className={styles.servicesHomeCont}>
        <div className={styles.servicesHomeCard}>
          <div className={styles.servicesCardLeft}>
            <strong>Limpeza de Fossa</strong>
            <p>As fossas sépticas são uma unidade de tratamento primário para o esgoto doméstico e também costumam ser encontradas em residências mais distantes da cidade ou de zona rural, onde não tem o sistema de tratamento de esgoto.</p>
          </div>
          <div className={styles.servicesCardRight}>
            <Link href="/servicos#limpafossa">
              <a>
                <button>
                  Veja Mais
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.servicesHomeCard}>
          <div className={styles.servicesCardLeft}>
            <strong>Terraplanagem</strong>
            <p>A terraplanagem, como o próprio nome sugere, é a colocação ou a retirada de terra para deixar um terreno plano, resolvendo diversos tipos de problemas que possam dificultar a construção.</p>
          </div>
          <div className={styles.servicesCardRight}>
            <Link href="/servicos#terraplanagem">
              <a>
                <button>
                  Veja Mais
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.servicesHomeCard}>
          <div className={styles.servicesCardLeft}>
            <strong>Compostagem</strong>
            <p>Compostagem é o processo de decomposição de matéria orgânica. O resultado desse processo é o adubo, que é usado para a fertilização do solo. A compostagem é realizada por microorganismos, que, na presença de umidade e oxigênio, se alimentam dessa matéria e propiciam que seus elementos químicos e nutrientes voltem à terra. </p>
          </div>
          <div className={styles.servicesCardRight}>
            <Link href="/servicos#compostagem">
              <a>
                <button>
                  Veja Mais
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.servicesHomeCard}>
          <div className={styles.servicesCardLeft}>
            <strong>Compra de Sucata</strong>
            <p>Sucata é o material que sobra em um processo de produção, ou o material que não pode mais ser utilizado para seu objetivo inicial por estar quebrado ou estragado.</p>
          </div>
          <div className={styles.servicesCardRight}>
            <Link href="/servicos#comprasucata">
              <a>
                <button>
                  Veja Mais
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};