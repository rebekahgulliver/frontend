import Navbar from "../../components/navigation-bar/navigation";
import styles from "../knowledgeCheck2/knowledgeCheck2.module.css"; 

function Page() {
  return (
    <div className={styles.container}>
      <div><Navbar/></div>
      <div className={styles.topSection}>
        <h2>Account Configuration: Knowledge Check</h2>
      </div>
      <div className={styles.middleSection}>
        <form className={styles.form}>
          {/* <div>
            <h3>Question 1: what is the answer?</h3>
            <label className={styles.label}>
              <input type="radio" name="color" value="red" />
              Red
            </label>
            <label className={styles.label}>
              <input type="radio" name="color" value="blue" />
              Blue
            </label>
            <label className={styles.label}>
              <input type="radio" name="color" value="green" />
              Green
            </label>
            <label className={styles.label}>
              <input type="radio" name="color" value="other" />
              Other
            </label>
          </div> */}
          {/* <div>
            <h3>Question 2: this is a question:</h3>
            <textarea className={styles.textarea} name="feedback"></textarea>
          </div> */}
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
                <h4>I have configureed MFA for my IAM user via AWS Console</h4>
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
          <button className={styles.button} type="button" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
