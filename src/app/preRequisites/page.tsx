import React from 'react';
import Navbar from "../../components/navigation-bar/navigation";
import styles from "../preRequisites/preRequisites.module.css"; 

export function Page (){
  return (
    <div className={styles.container}>

      <div><Navbar/></div>

      <div className={styles.prerequisitesSection}>
        <h2 className={styles.h2}>Prerequisites</h2>
        <ul className={styles.prerequisitesList}>
          <li>Ensure ability to disable the forcepoint proxy Ask IT Service Catalog - Ask IT Portal (service-now.com)</li>
          <li>Ensure you have admin access for installations NetScaler AAA</li>
          <li>Turn off GlobalProtect VPN: once turned off from the desktop icon, open your services as an administrator and make sure PanGPS is not running, with startup type set to manual</li>
          <li>If your line manager is out-of-office, request the 3 day admin access as this does not require approval</li>
          <li>If your line manager is available, request the 1 year admin access and message them to prompt them to approve</li>
          <li>Byte Guard account: Register here (work with admin in team to set up account and 2FA)</li>
          <li>Google Authenticator App (used to generate one-time password, links to Byte Guard)</li>
          <li>AWS CLI: install here</li>
          <li>Node.js: here (instructions in README)</li>
          <li>ESLint: (instructions in README)</li>
          <li>Git: here</li>
          <li>Github Desktop (optional): here</li>
          <li>VS Code: here</li>
          <li>Terraform: here (instructions in README)</li>
          <li>Chocolatey (optional): here (instructions in README)</li>
          <li>Python3: here</li>
          <li>Mongosh: here (instructions in README)</li>
          <li>Access to ADO platform (Tech Lead to set up)</li>
          <li>Designs: BBB (non-Fujitsu test TO DELETE!!!)</li>
          <li>Review the Architecture Overview Document</li>
        </ul>
      </div>

      
    </div>
  );
};

export default Page;
