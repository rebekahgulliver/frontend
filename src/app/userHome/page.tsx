import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../userHome/userHome.module.css";
import Link from 'next/link';

interface ProgressBarProps {
  activeStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ activeStep }) => {
  return (
    <div className={styles.progressBar}>
      <div className={`${styles.step} ${activeStep >= 1 && styles.active}`}></div>
      <div className={`${styles.step} ${activeStep >= 2 && styles.active}`}></div>
      <div className={`${styles.step} ${activeStep >= 3 && styles.active}`}></div>
      <div className={`${styles.step} ${activeStep >= 4 && styles.active}`}></div>
      <div className={`${styles.step} ${activeStep >= 5 && styles.active}`}></div>
    </div>
  );
};

export function Page (){
  return (
    <div className={styles.container}>
      <div><Navbar/></div>
      <div className={styles.topSection}>
        <div className={styles.titleContainer}>
          <h2>KnowledgeBase Onboarding</h2>
          <button className={styles.continueButton}><Link href="/knowledgeCheck2">Continue</Link></button>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.column}>
          <ProgressBar activeStep={3} />
        </div>
        <div className={styles.column}>
          <p className={styles.onboardingSteps}><Link href="/preRequisites">Pre-requisites</Link></p>
          <p className={styles.onboardingSteps}><Link href="/knowledgeCheck1">Pre-requisites: knowledge check</Link></p>
          <p className={styles.onboardingSteps}><Link href="/accountConfiguration">Account configuration</Link></p>
          <p className={styles.onboardingSteps}><Link href="/knowledgeCheck2">Account configuration: knowledge check</Link></p>
          <p className={styles.onboardingSteps}><Link href="/cloningRepositories">Cloning repositories</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Page;

