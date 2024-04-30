import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/navigation-bar/navigation";


export default function Home() {
  return (
    <div className={styles.container}>
      <div><Navbar/></div>
      <div className={styles.section}>
        <p>this is a section</p>
        <Link href="/home/MGMT-Home">
        <p>Go to Page 1</p>
      </Link>

      
      </div> 
    </div>

  );
}
