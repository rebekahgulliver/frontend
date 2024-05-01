import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../knowledgeCheck1/knowledgeCheck1.module.css"; 
import Link from 'next/link';

export function Page (){
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.whiteText}>
            <div className={styles.topSection}>
              <h2>Account Configuration: Knowledge Check</h2>
            </div>
          </div>
        </div>
        <div className={styles.middleSection}>
          <form className={styles.form}>
            <div> 
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have set up a byte-central user on Byte Guard</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div> 
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have added my user to the BaseUsers group</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have configured MFA for my IAM user via AWS Console</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have set up CLI access to AWS</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have verified that my configuration changes were successful</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have set up Console access to AWS</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
            </div>
            <button className={styles.button} type="button"><Link href="/accountConfiguration">Next</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
