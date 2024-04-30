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
          <h1 className={styles.title}>Knowledge Base</h1>
          <p className={styles.description}>
            The app built to improve upon and replace Byte Brain Bank by designing and developing a dynamic and user-friendly platform that serves as a one-stop, scalable, centralized knowledge-sharing resource, incorporating automated workflows for document creation, validation, and lifecycle management.
          </p>
          <Link href="/userHome">
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
