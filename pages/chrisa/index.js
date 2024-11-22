export default function ShowImage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>FILE UPLOAD</h1>
        <h2>WARNING: All image rights are from the owner.</h2>
        <p>Image Owner: Tristan</p>
        <h5>Western Tristan, AI used!</h5>
        <img
          src="/Tristan-AI.jpg" // Ensure the image file name and extension match
          alt="Tristan"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
          <img
          src="/TRISTANT.png" // Ensure the image file name and extension match
          alt="Tristan"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
