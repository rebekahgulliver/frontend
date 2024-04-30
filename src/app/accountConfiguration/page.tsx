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
            <li>Ensure ability to disable the forcepoint proxy Ask IT Service Catalog - Ask IT Portal (service-now.com)</li>
            <li>Ensure you have admin access for installations NetScaler AAA</li>
            <li>Turn off GlobalProtect VPN: once turned off from the desktop icon, open your services as an administrator and make sure PanGPS is not running, with startup type set to manual</li>
            <li>If your line manager is out-of-office, request the 3 day admin access as this does not require approval</li>
            <li>If your line manager is available, request the 1 year admin access and message them to prompt them to approve</li>
            <li>Byte Guard account (work with admin in team to set up account and 2FA)</li>
            <li>Google Authenticator App (used to generate one-time password, links to Byte Guard)</li>
            <li>AWS CLI</li>
            <li>Node.js:  (instructions in README)</li>
            <li>ESLint: (instructions in README)</li>
            <li>Git</li>
            <li>Github Desktop (optional)</li>
            <li>VS Code</li>
            <li>Terraform (instructions in README)</li>
            <li>Chocolatey (optional)  (instructions in README)</li>
            <li>Python3 </li>
            <li>Mongosh (instructions in README)</li>
            <li>Access to ADO platform (Tech Lead to set up)</li>
            <li>Designs: Figma File</li>
            <li>Review the Architecture Overview Document</li>
          </ul>
        </div>
        <div className={styles.nextButtonContainer}>
        <button className={styles.nextButton}><Link href="/knowledgeCheck2">Next</Link></button>
      </div>
      </div>
    </div>
  );
};

export default Page;
