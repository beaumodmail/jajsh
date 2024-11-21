import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Under Development</title>
        <meta name="description" content="This page is currently under development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={styles.container}>
        <h1 style={styles.heading}>🚧 Under Development 🚧</h1>
        <p style={styles.text}>
          We're working hard to bring this page to life. Check back soon!
        </p>
        <p style={styles.text}>
          In the meantime, feel free to <a style={styles.link} href="mailto:support@example.com">contact us</a> for any questions.
        </p>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f9fc',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '1rem 0',
  },
  text: {
    fontSize: '1.25rem',
    margin: '0.5rem 0',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
};
