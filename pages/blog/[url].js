import Layout from "@/components/Layout";
import { formatearFecha } from "@/utils/helpers";
import Image from "next/image";
import React from "react";
import styles from "@/styles/blog.module.css"

const Post = ({ post }) => {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
  return (
    <Layout title={`Blog ${titulo}`}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagen.data[0].attributes.url} width={1000} height={400} alt={`Imagen blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};
export default Post;
export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();
  return {
    props: {
      post,
    },
  };
}
