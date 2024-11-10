
import styles from "@/app/home.module.css"

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.home_h1}>Home Page</h1>
      <p className={styles.home_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio cupiditate qui tempora architecto ut eaque <br /> doloribus hic unde delectus dolore, nobis ab enim <br /> eos in similique quas voluptatum ipsum aut!</p>
    </div>
  );
}
