export default function ShowImage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>FILE UPLOAD</h1>
        <h2>WARNING: All image rights are from the owner.</h2>
        <p>Image Owner: Beau</p>
        <img
          src="/LOOP-5.jpg" // Path to the image in the public folder
          alt="Uploaded Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
          <img
          src="/LOOP-6.jpg" // Path to the image in the public folder
          alt="Uploaded Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
<img
          src="IMG_2325.jpeg" // Path to the image in the public folder
          alt="Uploaded Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
          
      </div>
    </div>
  );
}
