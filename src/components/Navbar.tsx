import Link from "next/link";

import styles from "@/components/navbar.module.css"

export default function Navbar() {
    return (
      <div className={styles.navbar}>
         

         <ul  className={styles.navbar_ul}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/career">Career</Link>
            </li>
            <li>
                <Link href="/contact-us">Contact</Link>
            </li>
            <li>
                <Link href="/skills">Skills</Link>
            </li>
         </ul>
         <div className={styles.btns}>
         <button className={styles.navbar_one}><a href="/login">Login</a></button>

        <button className={styles.navbar_two}><a href="/sign-up">SignUp</a></button>
        </div>
         {/* <Image src={back} alt="logo"/> */}
        {/* <h1>Navbar Page</h1> */}
      </div>
    );
  }