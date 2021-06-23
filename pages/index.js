import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Menu } from '../components/menu';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';

import BannerImage from '../assets/banner-home.jpg';
import { EmpresaSection } from '../components/empresaSection';

export default function Home({ posts }) {
  console.log(posts)
  const router = useRouter();
  const [ mappedPosts, setMappedPosts ] = useState([]);

  useEffect(() => {
    if(posts.length){
      const imgBuilder = imageUrlBuilder({
        projectId: 'uwk4dif1',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),            
          }
        })
      )
    } else {
      setMappedPosts([]);
    }
  }, [posts])


  return (
    <>
    <Head>
      <title>Carvalhaço Reciclagem</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Menu />
      <div className={styles.banner}>
        <Image className={styles.bannerImg} src={BannerImage} />
      </div>
      <EmpresaSection />
      <div className={styles.main}>
        <h1>Welcome to My Blog</h1>

        <h3> Recent Posts:</h3>
        
        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={p.title} className={styles.post}>              
              <img src={p.mainImage} className={styles.mainImage} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="bottom-card">
                <span>{p.author}</span>
                <span>{p.catego}</span>
              </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
    </>
  )
};

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post"]');
  const url = `https://uwk4dif1.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  if (!result.result || !result.result.length){
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};