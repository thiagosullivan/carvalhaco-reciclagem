import Head from 'next/head';
import Image from 'next/image';

import { Menu } from '../components/menu';
import { Footer } from '../components/footer';
import { MenuMobile } from '../components/menuMobile';

import { FaBalanceScale, FaEye, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

import BannerEmpresa from '../assets/empresa-page-banner.jpg';
import styles from '../styles/EmpresaPage.module.css';

export default function Empresa() {
  return (
    <div className={styles.empresaPage}>
      <Head>
        <title>Carvalhaço Reciclagem - A Empresa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <MenuMobile />
      <div className={styles.empresaContent}>
        <div className={styles.empresaBanner}>
          <Image src={BannerEmpresa} />
        </div>
        <div className={styles.empresaTxt}>
          <div className={styles.empresaTxtContent}>
            <h1>A empresa</h1>
            <p>A Carvalhaço Reciclagens foi fundada em 2002, iniciando seus trabalhos com compra e venda de sucata.
              A compra e venda de sucata abrange diversos tipos de materiais recicláveis como, ferro, alumínio, cobre, papelão e afins. Atualmente a empresa possui uma sede situada em Lauro de Freitas e permanece buscando se reinventar, trazendo novos serviços para atender diversas demandas de seus clientes.</p>
            <p>A Carvalhaço também atua nas regiões de Salvador, Lauro de Freitas e Camaçari com serviços de limpeza de fossa, recolhimento de entulho, transporte de cargas, descarte de resíduos, e demais serviços relacionados. 
              Com o propósito de tornar os seus processos mais eficientes e confiáveis para os clientes a empresa vêm buscando cada vez mais informatizar e automatizar os processos de pesagem e na divulgação de seus serviços, diferenciando-se das demais.</p>
          </div>
        </div>
        <div className={styles.empresaRowTwo}>
          <div className={styles.empresaRowCard}>
            <FiTarget />
            <strong>Missão</strong>
            <p>Atender às necessidades de nossos clientes com serviços que abrangem todos os setores necessários para uma gestão total de resíduos, assegurando a qualidade de todos os nossos processos e serviços.</p>
          </div>
          <div className={styles.empresaRowCard}>
            <FaEye />
            <strong>Visão</strong>
            <p>Ser uma empresa referência no Brasil como prestadora de serviços de gestão e reciclagem de materiais, reconhecida por promover um desenvolvimento sustentável, seu e de seus parceiros.</p>
          </div>
          <div className={styles.empresaRowCard}>
            <FaBalanceScale />
            <strong>Integridade</strong>
            <p>Assumir uma conduta transparente, honesta e respeitosa.</p>
          </div>
          <div className={styles.empresaRowCard}>
            <FaLightbulb />
            <strong>Empreendedorismo</strong>
            <p>Busca por expansão, melhoria e automação dos processos.Busca por expansão, melhoria e automação dos processos.</p>
          </div>
          <div className={styles.empresaRowCard}>
            <FaHandshake />
            <strong>Comprometimento</strong>
            <p>Compromisso com a eficiência, sempre visando o melhor atendimento aos clientes e parceiros.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};