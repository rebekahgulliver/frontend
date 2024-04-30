import Link from "next/link";
import styles from "./navigation.module.css";

let showAdminLink = true; 
const Navbar = () => {
  const toggleLink = () => {
    showAdminLink = !showAdminLink;
    window.location.reload(); 
  };

  return (
    <nav>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>
          {showAdminLink && (
            <li className={styles.listItem}>
              <Link href="/adminHome">MGMT Home</Link>
            </li>
          )}
          <li className={styles.listItem}>
            <Link href="/userHome">USER Home</Link>
          </li>
          {showAdminLink && (
            <li className={styles.listItem}>
              <Link href="/individualView">MGMT User view</Link>
            </li>
          )}
          {showAdminLink && (
            <li className={styles.listItem}>
            <Link href="/materialEdit">MGMT CRUD material</Link>
            </li>
          )}
          {showAdminLink && (
            <li className={styles.listItem}>
              <Link href="/teamEdit">MGMT CRUD team</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
