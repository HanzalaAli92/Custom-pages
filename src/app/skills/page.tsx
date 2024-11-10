
import styles from "@/app/skills/skills.module.css"

export default function Skills() {
  return (
    // <div className="ml-32 mt-56 mb-52 sm:mb-60 text-5xl font-bold text-sky-600">
    //   <h1>Skills Page</h1>
    // </div>
    <div className={styles.skills}>
    <h1 className={styles.skills_h1}>Skills Page</h1>
    <p className={styles.skills_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio cupiditate qui tempora architecto ut eaque <br /> doloribus hic unde delectus dolore, nobis ab enim <br /> eos in similique quas voluptatum ipsum aut!</p>
  </div>
  );
}
