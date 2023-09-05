import React, { useState } from 'react';

function Upload({ onUpload }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
  };

  const handleUpload = () => {
    if (selectedVideo) {
      onUpload(selectedVideo);
    }
  };

  return (
    <div style={{marginTop: '20px', display: 'flex', alignItems: 'center' }}>
      <label
        htmlFor="video-upload"
        style={{
          marginRight: '10px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Upload Video:
      </label>
      <input type="file" accept="video/*" onChange={handleFileChange} 
        
      />
      <button style={{ height: '50px',
            width: '100px',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: 'pink',
            marginLeft: '10px',
            cursor: 'pointer',
      }} onClick={handleUpload}>Upload Video</button>
    </div>
  );
}

export default Upload;
