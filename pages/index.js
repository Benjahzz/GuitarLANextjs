import Guitarra from "@/components/Guitarra";
import Layout from "@/components/Layout";
import { Inter } from "@next/font/google";
import styles from "@/styles/grid.module.css";
import Post from "@/components/Post";
import Curso from "@/components/Curso";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ guitarras, posts ,curso}) {
  return (
    <>
      <Layout
        title="Inicio"
        description="Blog de música, venta de guitarras y más">
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra guitarra={guitarra} />
            ))}
          </div>
        </main>
        <Curso curso={curso}/>
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
          {
              posts?.map(post => (
                <Post key={post.id} post={post.attributes}/>
              ))
            }
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}curso?populate=imagen`;

  const [resGuitarras, resPosts,resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);

  const [{ data: guitarras }, { data: posts },{data:curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ]);

  return {
    props: {
      guitarras,
      posts,
      curso
    },
  };
}
