import Navbar from "../../components/navigation-bar/navigation";
import styles from "../knowledgeCheck2/knowledgeCheck2.module.css"; 

function Page() {
  return (
    <div className={styles.container}>
      <div><Navbar/></div>
      <div className={styles.topSection}>
        <h2>Account Configuration: Knowledge Check</h2>
      </div>
      <div className={styles.form}>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>
          <button type="button" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
