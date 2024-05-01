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
              <Link href="/adminHome">Admin Dashboard</Link>
            </li>
          )}
          <li className={styles.listItem}>
            <Link href="/userHome">User Dashboard</Link>
          </li>
          {showAdminLink && (
            <li className={styles.listItem}>
              <Link href="/individualView">Admin User View</Link>
            </li>
          )}
          {showAdminLink && (
            <li className={styles.listItem}>
              <Link href="/teamEdit">Admin My Team</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
