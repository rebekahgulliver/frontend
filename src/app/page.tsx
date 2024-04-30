import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/navigation-bar/navigation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.section}>
        <Link href="/userHome">
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
