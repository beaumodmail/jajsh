import { useState, useEffect } from 'react';

export default function Home() {
  const [uploads, setUploads] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUploads = files.map((file) => ({
      src: URL.createObjectURL(file),
      text: '',
    }));
    setUploads((prev) => [...prev, ...newUploads]);
  };

  const handleTextChange = (index, value) => {
    setUploads((prev) =>
      prev.map((upload, i) =>
        i === index ? { ...upload, text: value } : upload
      )
    );
  };

  useEffect(() => {
    const preventScreenshot = (e) => {
      if (e.key === 'PrintScreen') {
        alert('Screenshots are not allowed!');
        document.querySelectorAll('.protected img').forEach((img) => {
          img.style.filter = 'brightness(0)'; // Blank out image
        });
      }
    };

    const restoreImages = () => {
      document.querySelectorAll('.protected img').forEach((img) => {
        img.style.filter = 'none'; // Restore images
      });
    };

    // Add event listeners
    document.addEventListener('keydown', preventScreenshot);
    window.addEventListener('focus', restoreImages);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener('keydown', preventScreenshot);
      window.removeEventListener('focus', restoreImages);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>No Fee, No Download</h1>
        <p style={{ fontSize: '14px', color: 'gray' }}>Downloads prohibited</p>
      </header>

      {/* Upload Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* Display Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {uploads.map((upload, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              width: '200px',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="protected"
          >
            {/* Image */}
            <img
              src={upload.src}
              alt="Uploaded"
              style={{
                width: '100%',
                height: 'auto',
                pointerEvents: 'none', // Disable interactions
                userSelect: 'none',
              }}
            />
            {/* Text Input */}
            <textarea
              value={upload.text}
              onChange={(e) => handleTextChange(index, e.target.value)}
              placeholder="Enter text..."
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '5px',
                resize: 'none',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Screenshot prevention */
        .protected {
          position: relative;
        }

        .protected::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          opacity: 0;
          pointer-events: none;
        }

        @media (forced-colors: active) {
          .protected::before {
            opacity: 1; /* Enforce blanking out in high-contrast mode */
            background: white;
          }
        }
      `}</style>
    </div>
  );
}
