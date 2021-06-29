import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Menu } from '../../components/menu';
import { MenuMobile } from '../../components/menuMobile';
import { Footer } from '../../components/footer';

export const Post = ({ title, body, desc, image, date, author }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'uwk4dif1',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <MenuMobile />
      <div className={styles.main}>
        <h1>{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <div className={styles.postInfo}>
          <span>{new Date(date).toLocaleDateString()}</span>
          <span>{author}</span>
        </div>
        <div className={styles.body}>
          <BlockContent blocks={body} />
        </div>
      </div>
      <Footer />
    </>
  )
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if(!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://uwk4dif1.api.sanity.io/v1/data/query/production?query=${query}`;
  
  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];
  if (!post){
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        desc: post.desc,
        date: post.publishedAt,
        author: post.author,
      }
    }
  }
};

export default Post;