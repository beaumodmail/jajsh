import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris File Upload</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Chris File Upload</h1>
          <h2 style={styles.subheading}>The File Upload Site</h2>
            <h2 style={styles.subheading}>NEW PAGE: CHRISA</h2>
        </header>
        <main style={styles.main}>
          <p style={styles.text}>
            Visit people’s uploads, for free! It’s easy, just change this link
            with your ABCs! Example:{' '}
            <a
              href="https://jolead.vercel.app/chrisn"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://jolead.vercel.app/chrisn
            </a>
          </p>
        </main>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "'Roboto', 'Open Sans', sans-serif",
    background: 'linear-gradient(135deg, #ff7eb3, #ff758c, #42a5f5)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    margin: 0,
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginTop: '10px',
    color: '#f0f0f0',
  },
  main: {
    textAlign: 'center',
    maxWidth: '600px',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
  link: {
    color: '#ffd700',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
