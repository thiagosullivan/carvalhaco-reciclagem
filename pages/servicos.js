import Head from "next/head";
import { Menu } from "../components/menu";

export default function Empresa() {
  return (
    <>
      <Head>
        <title>Carvalhaço Reciclagem - Serviços</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <h1>Serviços</h1>
    </>
  )
};