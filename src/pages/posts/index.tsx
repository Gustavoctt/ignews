import Head from 'next/head';
import styles from './styles.module.scss';


export default function Posts(){
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>06 de maio de 2022</time>
            <strong>How I code for 8 hours without feeling tired.</strong>
            <p> thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired.</p>
          </a>

          <a>
            <time>06 de maio de 2022</time>
            <strong>How I code for 8 hours without feeling tired.</strong>
            <p> thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired.</p>
          </a>

          <a>
            <time>06 de maio de 2022</time>
            <strong>How I code for 8 hours without feeling tired.</strong>
            <p> thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired.</p>
          </a>

          <a>
            <time>06 de maio de 2022</time>
            <strong>How I code for 8 hours without feeling tired.</strong>
            <p> thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired.</p>
          </a>
        </div>
      </main>
    </>
  );
}