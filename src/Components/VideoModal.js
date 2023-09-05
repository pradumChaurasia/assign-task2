import React from 'react';

function VideoModal({ video, onClose }) {
  return (
    <div className="video-modal">
      <video controls autoPlay>
        <source src={URL.createObjectURL(video)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default VideoModal;
