import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../individualView/MGMT-user-view.module.css"; 

export function Page (){
  return (
    <div className={styles.container}>
      <div><Navbar/></div>
      <div className={styles.topSection}>
        <div className={styles.fullWidthContainer}>
          <h2>John Doe</h2>
        </div>
        <div className={styles.fullWidthContainer}>
          <h4>john.doe@email.com</h4>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.fullWidthContainer}>
          <h3>Onboarding Status: Knowledge Check Awaiting Approval</h3>
        </div>
      </div>
   
      <div className={styles.bottomSection}>
        <div className={styles.fullWidthContainer}>
          <div className={styles.approvalCard}>
            <span className={styles.greenTag}>Approved</span>
            <h4 className={styles.requestTitle}>Pre-requisite checklist completed</h4>
            <p className={styles.viewText}>View</p> 
          </div>
          <div className={styles.approvalCard}>
            <span className={styles.orangeTag}>Awaiting Approval</span>
            <h4 className={styles.requestTitle}>Pre-requisite: Knowledge check</h4>  
            <p className={styles.viewText}>View</p> 
          </div>
          <div className={styles.approvalCard}>
            <span className={styles.redTag}>Not yet reached</span>
            <h4 className={styles.requestTitle}>Account Configuration checklist</h4>
          </div>
          <div className={styles.approvalCard}>
            <span className={styles.redTag}>Not yet reached</span>
            <h4 className={styles.requestTitle}>Account Configuration: Knowledge check</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
