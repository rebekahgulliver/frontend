import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/navigation-bar/navigation";


export default function Home() {
  return (
    // <div className={styles.container}>
    //   <div><Navbar/></div>
    //   <div className={styles.section}>
    //     <p>this is a section</p>
    //   </div> 
    // </div>

    <div className={styles.container}>

      <div><Navbar/></div>
      <div className={styles.topSection}>
        <div className={styles.fullWidthContainer}>
          <h2>Onboarding Material</h2>
        </div>
        <div className={styles.fullWidthContainer}>
          <button>Version History</button>
          <button>Edit Content</button>
        </div>
      </div>

      <div className={styles.myTeamSection}>
        <div className={styles.fullWidthContainer}>
          <div className={styles.topSectionContainer}>
            <h2 className={styles.teamTitle}>My Team</h2>
            <button className={styles.teamButton}>Add New Member</button>
          </div>
        </div>
        <div className={styles.fullWidthContainer}>
          <div className={styles.listContainer}>
            <ul className={styles.userList}>
              <li className={styles.userListItem}>john</li>
              <li className={styles.userListItem}>jane</li>
              <li className={styles.userListItem}>joe</li>
              <li className={styles.userListItem}>jack</li>
            </ul>
          </div>
        </div>
      </div>




    </div>
  );




}
