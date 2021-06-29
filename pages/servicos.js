import Head from "next/head";

import { Menu } from "../components/menu";
import { MenuMobile } from "../components/menuMobile";
import { Footer } from "../components/footer";

import styles from '../styles/PageServices.module.css';

export default function Servicos() {
  return (
    <div className={styles.pageServicos}>
      <Head>
        <title>Carvalhaço Reciclagem - Serviços</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <MenuMobile />
      <h1>Nossos Serviços</h1>
      <ul className={styles.navServices}>
        <li><a href="#limpafossa">Limpa Fossa</a></li>
        <li><a href="#terraplanagem">Terraplanagem</a></li>
        <li><a href="#compostagem">Compostagem</a></li>
        <li><a href="#comprasucata">Compra de Sucata</a></li>
      </ul>
      <div className={styles.ServicesTxt}>
        <div className={styles.servicesTxtCard} id="limpafossa">
          <h2>Serviço de limpa fossa</h2>
          <p>As fossas sépticas são uma unidade de tratamento primário para o esgoto doméstico e também costumam ser encontradas em residências mais 
          distantes da cidade ou de zona rural, onde não tem o sistema de tratamento de esgoto.
          É comum que diversos municípios litorâneos não tenham esse sistema de tratamento de esgoto, logo, utilizam o sistema de fossa para o 
          escoamento do esgoto.</p>
          <span>Como funciona o serviço de limpa fossa?</span>
          <p>Com a ajuda de um caminhão e mangueira, é feita a sucção a vácuo dos dejetos, desobstruindo a passagem dos canos e limpando a fossa.
          O conteúdo coletado da fossa precisa ser descartado corretamente, para não colocar em risco a saúde das pessoas e o meio ambiente. Por isso, a 
          Carvalhaço Reciclagem se compromete a realizar o descarte correto dos resíduos.</p>
          <span>Quando contratar?</span>
          <p>Por questões de saúde e higiene, é de extrema importância que a limpeza de fossa seja feita ao menos uma vez por ano. Isso contribui para o bom funcionamento do sistema e evita que aconteçam entupimentos e, consequentemente, dores de cabeça com transbordamento de fossa, mau cheiro e contaminação do solo.</p>
        </div>
        <div className={styles.servicesTxtCard} id="terraplanagem">
          <h2>Serviço de terraplagem</h2>
          <p>A terraplanagem, como o próprio nome sugere, é a colocação ou a retirada de terra para deixar um terreno plano, resolvendo diversos tipos 
          de problemas que possam dificultar a construção.<br></br>
          Para que a terraplanagem seja feita um pouco de terra é retirado de uma parte mais alta do terreno e depositada na parte mais baixa, 
          tornando-o plano, com o uso de equipamentos especiais e também com um cálculo preciso do quanto de terra precisa ser retirado (corte) e 
          depositado (aterro).<br></br>
          Para a terraplanagem ser efetuada, é muito importante que o terreno esteja limpo, sem detritos e vegetação (como árvores, toras de 
          madeira, pedras e outros itens), para que as máquinas consigam trabalhar de forma adequada.</p>
          <span>Quais as indicações para a terraplanagem?</span>
          <p>A terraplanagem é uma das principais técnicas da engenharia civil, ajudando na criação de obras de engenharia de solo (como estradas de 
          ferro, rodovias, barragens, canais e valas), no nivelamento de áreas em desenvolvimento para a construção, na abertura de depósitos minerais e 
          na fundação para edifícios e estruturas erguidas a partir de outros materiais.</p>
          <span>Como a terraplanagem é feita?</span>
          <p>O primeiro passo é fazer um estudo completo do seu terreno, avaliando além do aclive e do declive outros pontos importantes como o tipo de 
          solo e a resistência para suportar as cargas nas fundações.<br></br>
          Somente a partir deste estudo é que o melhor método de terraplanagem será definido, bem como os tipos de máquinas que serão usados, que podem ser pás escavadeiras, retroescavadeiras e tratores de esteira.</p>
        </div>
        <div className={styles.servicesTxtCard} id="compostagem">
          <h2>Serviço de compostagem</h2>
          <p>Compostagem é o processo de decomposição de matéria orgânica. O resultado desse processo é o adubo, que é usado para a fertilização do 
          solo. A compostagem é realizada por micro-organismos, que, na presença de umidade e oxigênio, se alimentam dessa matéria e propiciam que seus elementos químicos e nutrientes voltem à terra.<br></br>
          Este processo enriquece a terra em nutrientes para plantas; evita queimadas que poluem o ar; melhora a estrutura do solo; melhora a drenagem e retêm água nos solos arenosos e redução da necessidade de usar herbicidas e pesticidas.</p>
          <span>Benefícios de compostagem</span>
          <ul>
            <li>Reduz a quantidade de resíduos orgânicos nos depósitos;</li>
            <li>Enriquece a terra em nutrientes para as plantas;</li>
            <li>Evita queimadas que poluem o ar e incomodam a vizinhança;</li>
            <li>Auxilia na agregação do solo melhorando a sua estrutura;</li>
            <li>Ajuda na aeração e na habilidade de reter água e nutrientes, e soltá-los lentamente para uso das plantas ao seu redor;</li>
            <li>Melhora a drenagem nos solos argilosos e a retenção da água nos solos arenosos;</li>
          </ul>
        </div>
        <div className={styles.servicesTxtCard} id="comprasucata">
          <h2>Compra de sucata</h2>
          <p>Sucata é o material que sobra em um processo de produção, ou o material que não pode mais ser utilizado para seu objetivo inicial por 
          estar quebrado ou estragado.<br></br>
          A maior parte dos produtos que consumimos foram projetados para serem descartados em caso de defeito, quebra ou ao final do seu ciclo 
          de vida. Consertar ou reaproveitar algo, na maior parte dos casos, é desvantajoso que comprar um item novo.<br></br>
          Além de ocupar um enorme espaço, prejudicar o solo e possibilitar a disseminação de doenças, esse volume de material poderia se tornar 
          matéria-prima para ser reutilizado em novos processos de produção.<br></br>
          Ser sobra de uma produção ou fruto de descarte não significa que o material deva ser inutilizado. Esses resíduos servem de matéria-prima 
          ou subprodutos em outros processos produtivos, gerando diferentes itens de consumo.<br></br>
          A sucata e seu respectivo mercado já movimenta diversos tipos de negócios de compra e venda de materiais obsoletos, ganhando cada 
          vez mais visibilidade pela dimensão desse comércio.</p>
          <p>Sabendo disso, a Carvalhaço abriu suas portas para a compra de:</p>
          <ul>
            <li>Sucata de ferro;</li>
            <li>Sucata de aço;</li>
            <li>Sucata de alumínio;</li>
            <li>Sucata de cobre;</li>
            <li>Sucata de papelão;</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
};