import Link from "next/link";
import styles from "./navigation.module.css";


const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link> 
        </li>
        <li className={styles.listItem}>
          <Link href="/MGMT-home">MGMT Home</Link> 
        </li>
        <li className={styles.listItem}>
          <Link href="/USER-home">USER Home</Link> 
        </li>
        <li className={styles.listItem}>
          <Link href="/MGMT-user-view">MGMT User view</Link> 
        </li>
        <li className={styles.listItem}>
          <Link href="//MGMT-CRUD-material">MGMT CRUD material</Link> 
        </li>
        <li className={styles.listItem}>
          <Link href="//USER-onboarding">USER Onboarding</Link> 
        </li>
        <li className={styles.listItem}>
          <Link href="//MGMT-CRUD-team">MGMT CRUD team</Link> 
        </li>
      </ul>
      </div>
    </nav>

  );
};

export default Navbar;
