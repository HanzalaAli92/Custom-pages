[]
import styles from "@/app/contact-us/contact-us.module.css"

export default function Contact() {
  return (
    // <div className=" ml-32 mt-56 mb-52 sm:mb-60 text-5xl font-bold text-sky-600">
    //   <h1>Contact-Us Page</h1>
    // </div>
    <div className={styles.contact}>
    <h1 className={styles.contact_h1}>Contact-Us Page</h1>
    <p className={styles.contact_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio cupiditate qui tempora architecto ut eaque <br /> doloribus hic unde delectus dolore, nobis ab enim <br /> eos in similique quas voluptatum ipsum aut!</p>
  </div>
  );
}
