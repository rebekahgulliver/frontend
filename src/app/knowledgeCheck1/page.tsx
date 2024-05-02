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
              <h2>Pre-requisites: Knowledge Check</h2>
            </div>
          </div>
        </div>
        <div className={styles.middleSection}>
          <form className={styles.form}>
            <div> 
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have ensured I have the correct permisions to set up my development area</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div> 
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have installed all the relevant software</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have reviewed the Architecture Overview document</h4>
                </div>         
                <div className={styles.rightColumn}>
                  <label><input type="checkbox" name="agree" required/>Yes</label>
                </div>    
              </div>
              <div className={styles.fullWidthContainer}>
                <div className={styles.leftColumn}>
                  <h4>I have confirmed all software versions are compatible</h4>
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
