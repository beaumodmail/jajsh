// pages/showImage.js

export default function ShowImage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Here is the image:</h1>
      <img
        src="/IMG_6226.jpeg"  // Path to the image in the public folder
        alt="Uploaded Image"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
