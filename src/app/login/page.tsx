
import styles from "@/app/login/login.module.css"

export default function Login() {
    return (
      <div className={styles.login}>

        <form className={styles.form} id="form">
        <h1 className={styles.h1} >Login Page</h1>

        <p className={styles.p}>Enter your E-mail and password to login</p> 

        {/* <label htmlFor="e-mail" >E-mail</label><br /> */}
        <p className={styles.p}>E-mail</p>

        <input type="text" id="e-mail" placeholder="Enter your e-mail" required className={styles.input}/>
        
        {/* <label htmlFor="password">Password</label><br /> */}
        <p className={styles.p}>Password</p>

        <input type="text" id="e-mail" placeholder="Enter your password" required className={styles.input}/>
        <br />
        
        <button className={styles.login_btn}>Login</button>or
        <button className={styles.account}>Create Account</button>
        </form>


      </div>
    );
  }