export default function ShowImage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>FILE UPLOAD</h1>
        <h2>WARNING: All image rights are from the owner.</h2>
        <p>Image Owner: Tristan</p>
  <h5>Western Tristan, AI used!</h5>
        <img
          src="/Tristan-AI" // Path to the image in the public folder
          alt="Tristan"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
