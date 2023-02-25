import Guitarra from "@/components/Guitarra";
import Layout from "@/components/Layout";
import styles from "@/styles/grid.module.css"
const Tienda = ({ guitarras }) => {
  return (
    <Layout title="Tienda" description="guitarLA, Tienda de música">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <div className={styles.grid}>
          {guitarras?.length > 0 &&
            guitarras.map((guitarra) => (
              <Guitarra guitarra={guitarra} key={guitarra.id} />
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;


export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
  return {
    props: {
      guitarras,
    },
  };
}
