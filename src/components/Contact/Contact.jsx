import styles from './Contact.module.css';
import {getImageUrl} from "../../utils.js";


export const Contact = () => {
  return (
    <section className={styles.container} id={"contact"}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')}
               alt={'Email icon'}/>
          <a href={'mailto:smy19990312@gmail.com'}>smy19990312@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')}
               alt={'LinkedIn icon'}/>
          <a href={'https://www.linkedin.com/mingyue-shao'}>linkedin.com/mingyue-shao</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')}
               alt={'Github icon'}/>
          <a href={'https://github.com/smy1999'}>github.com/smy1999</a>
        </li>
      </ul>
    </section>
  );
}