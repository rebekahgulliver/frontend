import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../teamEdit/MGMT-CRUD-team.module.css"; 


export function Page (){
  return (
<div className={styles.container}>

<div><Navbar/></div>

<div className={styles.myTeamSection}>
  <div className={styles.fullWidthContainer}>
    <div className={styles.topSectionContainer}>
      <h2 className={styles.teamTitle}>My Team</h2>
    </div>
  </div>
  <div className={styles.fullWidthContainer}>
    <div className={styles.listContainer}>
      <ul className={styles.userList}>
        <li className={styles.userListItem}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userEmail}>john.doe@email.com</span>
          <div className={styles.removeButtonContainer}>
            <button className={styles.removeButton}></button>
          </div>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.userName}>Jane Doe</span>
          <span className={styles.userEmail}>jane.doe@email.com</span>
          <div className={styles.removeButtonContainer}>
          <button className={styles.removeButton}></button>
          </div>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.userName}>Chris Lee</span>
          <span className={styles.userEmail}>chris.lee@email.com</span>
          <div className={styles.removeButtonContainer}>
          <button className={styles.removeButton}></button>
          </div>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.userName}>Morgan Smith</span>
          <span className={styles.userEmail}>morgan.smith@email.com</span>
          <div className={styles.removeButtonContainer}>
          <button className={styles.removeButton}></button>
          </div>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.userName}>Kelly Wright</span>
          <span className={styles.userEmail}>kelly.wright@email.com</span>
          <div className={styles.removeButtonContainer}>
          <button className={styles.removeButton}></button>
          </div>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.userName}>Mark Cross</span>
          <span className={styles.userEmail}>mark.cross@email.com</span>
          <div className={styles.removeButtonContainer}>
          <button className={styles.removeButton}></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>




</div>
  );
};

export default Page;
