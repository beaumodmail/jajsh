export default function ShowImage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>FILE UPLOAD</h1>
        <h2>WARNING: All image rights are from the owner.</h2>
        <p>Image Owner: Beau</p>
        <img
          src="/IMG_6226.jpeg" // Path to the image in the public folder
          alt="Don the Hairdresser"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <h2>AI VERSION OF ORIGINAL; ORIGINAL ABOVE:</h2>
        <img
          src="/IMG_2324.jpeg" // Path to the image in the public folder
          alt="Dom the Hairdresser AI"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
