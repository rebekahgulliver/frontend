import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../knowledgeCheck1/USER-home.module.css"; 


  export function Page (){
  return (
    <div className={styles.container}>

    <div><Navbar/></div>
    <div className={styles.topSection}>
      <div className={styles.fullWidthContainer}>
        <h2>KnowledgeBase Onboarding</h2>
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
            <li className={styles.userListItem}>
              <span className={styles.userName}>John Doe</span>
              <div className={styles.progressBarContainer}>
                <progress className={styles.progress} value="60" max="100"></progress>
              </div>
              <div className={styles.reminderButtonContainer}>
                <button className={styles.reminderButton}>Send Reminder</button>
              </div>
            </li>
            <li className={styles.userListItem}>
              <span className={styles.userName}>Jane Doe</span>
              <div className={styles.progressBarContainer}>
                <progress className={styles.progress} value="20" max="100"></progress>
              </div>
              <div className={styles.reminderButtonContainer}>
                <button className={styles.reminderButton}>Send Reminder</button>
              </div>
            </li>
            <li className={styles.userListItem}>
              <span className={styles.userName}>Chris Lee</span>
              <div className={styles.progressBarContainer}>
                <progress className={styles.progress} value="60" max="100"></progress>
              </div>
              <div className={styles.reminderButtonContainer}>
                <button className={styles.reminderButton}>Send Reminder</button>
              </div>
            </li>
            <li className={styles.userListItem}>
              <span className={styles.userName}>Morgan Smith</span>
              <div className={styles.progressBarContainer}>
                <progress className={styles.progress} value="100" max="100"></progress>
              </div>
              <div className={styles.reminderButtonContainer}>
                <button className={styles.reminderButton}>Send Reminder</button>
              </div>
            </li>
            <li className={styles.userListItem}>
              <span className={styles.userName}>Kelly Wright</span>
              <div className={styles.progressBarContainer}>
                <progress className={styles.progress} value="80" max="100"></progress>
              </div>
              <div className={styles.reminderButtonContainer}>
                <button className={styles.reminderButton}>Send Reminder</button>
              </div>
            </li>
            <li className={styles.userListItem}>
              <span className={styles.userName}>Mark Cross</span>
              <div className={styles.progressBarContainer}>
                <progress className={styles.progress} value="55" max="100"></progress>
              </div>
              <div className={styles.completedTextContainer}>
                <span className={styles.completedText}>Completed 14/01/2024</span>
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


