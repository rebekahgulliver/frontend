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
        <p className={styles.approvedText}>Approved</p>
        <h4>Pre-requisite checklist completed</h4>
      </div>
      <div className={styles.approvalCard}>
        <p className={styles.awaitingApprovalText}>Awaiting Approval</p>
        <h4>Knowledge Check 1</h4>   
      </div>
      <div className={styles.approvalCard}>
        <p className={styles.unreachedText}>Not yet reached</p>
        <h4>Knowledge Check 2</h4>
      </div>
  </div>
</div>
</div>
  );
};

export default Page;
