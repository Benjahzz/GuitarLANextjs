import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="Imagen logotipo"
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link
            href={"/"}
            className={router.pathname === "/" ? styles.active : "a"}>
            Inicio
          </Link>
          <Link
            href={"/nosotros"}
            className={router.pathname === "/nosotros" ? styles.active : "a"}>
            Nosotros
          </Link>
          <Link
            href={"/blog"}
            className={router.pathname === "/blog" ? styles.active : "a"}>
            Blog
          </Link>
          <Link
            href={"/tienda"}
            className={router.pathname === "/tienda" ? styles.active : "a"}>
            Tienda
          </Link>
          <Link
            href={"/carrito"}
            className={router.pathname === "/carrito" ? styles.active : "a"}>
            <Image src={'/img/carrito.png'} alt="Imagen carrito" width={30} height={25}/>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
