import styles from "@/app/about/about.module.css"

export default function About() {
  return (
    // <div id="font" className="ml-32 mt-56 mb-52 sm:mb-60 text-5xl font-bold text-sky-600">
    //   <h1>About Page</h1>
    // </div>
    <div className={styles.about}>
    <h1 className={styles.about_h1}>About Page</h1>
    <p className={styles.about_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio cupiditate qui tempora architecto ut eaque <br /> doloribus hic unde delectus dolore, nobis ab enim <br /> eos in similique quas voluptatum ipsum aut!</p>
  </div>
  );
}
