import Layout from "@/components/Layout";
import Image from "next/image";
import styles from "@/styles/Nosotros.module.css"
const Nosotros = () => {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, guitarLA, Tienda de música">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src={"/img/nosotros.jpg"} alt="Imagen sobre nosotros" width={1000} height={800}/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ornare rutrum ante sed elementum. Sed ut felis sit amet enim
              mattis fermentum non non mauris. Sed lacus est, euismod ut
              porttitor ac, auctor non dolor. Duis at posuere dolor. Nunc
              pharetra commodo risus non cursus. In egestas hendrerit libero a
              rutrum. Morbi ligula augue, laoreet ut eros eget, hendrerit
              lacinia nulla. Vestibulum sagittis diam efficitur massa euismod
              aliquam. Sed venenatis leo vel dolor porta, eu semper augue
              suscipit. 
            </p>
            <p>Proin non tortor vitae sapien bibendum rhoncus. Fusce
              vestibulum risus eget gravida congue. Aenean finibus porta
              pellentesque. Nullam vulputate facilisis enim at semper. In tempor
              commodo sagittis. Maecenas mattis purus sit amet dolor tempor, in
              bibendum mi lobortis. Nam iaculis mattis purus a tempus. Curabitur
              imperdiet id est non tincidunt. Aliquam non odio sed dolor ornare
              vehicula non quis sapien. Donec non odio vel eros tincidunt
              porttitor in eu purus. Etiam at iaculis mi, non luctus massa. Sed
              ut convallis lacus, nec molestie felis. Sed scelerisque quis
              sapien non ullamcorper.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
