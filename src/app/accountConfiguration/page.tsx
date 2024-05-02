import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../accountConfiguration/accountConfiguration.module.css"; 
import Link from 'next/link';

export function Page (){
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>

        <div className={styles.accountSection}>
          <h2 className={styles.h2}>Account Configuration</h2>
          <ul className={styles.accountList}>
            <li className={styles.mainList}>Create a byte-central user on Byte Guard</li>
            <li className={styles.nest}>Navigate to Byte Guard</li>
            <li className={styles.nest}>Select “Request IAM User”</li>
            <li className={styles.nest}>Select byte-central from the dropdown, a date anytime in the future for expiry and enter your Fujitsu email</li>
            <li className={styles.nest}>Select Normal User and tick the generate access keys option</li>
            <li className={styles.nest}>Continue through, leaving the reviewers field blank and then enter “New Starter on Knowledge Base” in the Justification Field</li>
            <li className={styles.nest}>Do not create an inline policy and then submit your request</li>
            <li className={styles.nest}>Await approval</li>
            <li className={styles.mainList}>Add your user to the BaseUsers group</li>
            <li className={styles.nest}>Ensure your user request has been approved</li>
            <li className={styles.nest}>Navigate to Byte Guard and locate and click on your user, you will need to select byte-central from the account dropdown</li>
            <li className={styles.nest}>Scroll down to “Associated Groups” and press the + symbol</li>
            <li className={styles.nest}>Leave the first field blank</li>
            <li className={styles.nest}>Enter an expiry date in the future on the next page and then select BaseUsers from the dropdown</li>
            <li className={styles.nest}>Continue and enter “New Starter on Knowledge Base” in the Justification Field</li>
            <li className={styles.nest}>Submit your request and await approval</li>
            <li className={styles.mainList}>Configure MFA for your IAM user after creation via the AWS Web Console</li>
            <li className={styles.nest}>Log in at <Link href="/knowledgeCheck2">https://console.aws.amazon.com/</Link> with the credentials emailed to you</li>
            <li className={styles.nest}>Click on your account in the top right and select “Security credentials” from the dropdown</li>
            <li className={styles.nest}>Scroll down to Multi-factor authentication (MFA) and select Assign MFA device</li>
            <li className={styles.nest}>Follow the steps to add your mobile authenticator as a device</li>
            <li className={styles.mainList}>Setup CLI Access to AWS</li>
            <li className={styles.nest}>On your terminal, run 'aws configure --profile byte'</li>
            <li className={styles.nest}>Next you will need to navigate to your aws config file. The user folder is your surname followed by your first initial, all capitalised</li>
            <li className={styles.mainList}>Setup Console access to AWS</li>
            <li className={styles.nest}><Link href="https://console.aws.amazon.com/">Log in at https://console.aws.amazon.com/</Link></li>
            <li className={styles.nest}>Click on your account in the top right and select “Switch Role” at the bottom of the dropdown</li>
          </ul>
        </div>
        <div className={styles.nextButtonContainer}>
        <button className={styles.nextButton}><Link href="https://console.aws.amazon.com/">Next</Link></button>
      </div>
      </div>
    </div>
  );
};

export default Page;
