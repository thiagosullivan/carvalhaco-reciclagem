import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';

import styles from '../styles/Home.module.css';

export const BlogSection = ({ posts }) => {
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
            mainImage: imgBuilder.image(p.mainImage).width(350).height(350),            
          }
        })
      )      
    } else {
      setMappedPosts([]);
    }
  }, [posts])

  return (
    <div className={styles.blog}>
        <div className={styles.blogContent}>
          <h2>Nossas postagens</h2>
          <div className={styles.feed}>
            {mappedPosts.length ? mappedPosts.slice( 1, 4 ).map((p, index) => (
              <div onClick={() => router.push(`/post/${p.slug.current}`)} key={p.title} className={styles.post}>              
                <img src={p.mainImage} className={styles.mainImage} />
                <div className={styles.cardTxt}>
                  <h3>{p.title}</h3>
                  <p>{p.desc.length > 150 ? p.desc.substr(0, 150) + "..." : p.desc}</p>
                  <span className={styles.postDate}>{new Date(p.publishedAt).toLocaleDateString()}</span>
                  <div className={styles.cardBottom}>                  
                    <span>{p.catego}</span>
                    <span>{p.author.substr(0, 20) + "..."}</span>
                  </div>
                </div>
              </div>
            )) : <>No Posts Yet</>}
          </div>
          <Link href="/blog">
            <a className={styles.blogButton}>
              <button>Veja todos as publicações do Blog</button>
            </a>
          </Link>
        </div>
    </div>
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