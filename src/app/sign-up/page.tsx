
import styles from "@/app/sign-up/sign-up.module.css"

export default function Sign() {
    return (
      <div className={styles.sign}>

        <form className={styles.form} id="form">
        <h1 className={styles.form_h1}>SignUp</h1>


        {/* <label htmlFor="e-mail" >E-mail</label><br /> */}
        <p className={styles.form_p}>E-mail</p>

        <input type="text" id="e-mail" placeholder="Enter your e-mail" required className={styles.sign_input} />
        
        {/* <label htmlFor="password">Password</label><br /> */}
        <p className={styles.form_p}>Password</p>

        <input type="text" id="e-mail" placeholder="Enter your password" required className={styles.sign_input}/>

        <p className={styles.form_p}>Confirm Password</p>

        <input type="text" id="e-mail" placeholder="Enter your confirm password" required className={styles.sign_input}/>
        <br />
 
        <button className={styles.login}>Login</button>or
        <button className={styles.account}>Create Account</button>
        </form>


      </div>
    );
  }