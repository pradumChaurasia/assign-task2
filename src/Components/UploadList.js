import React, { useState } from 'react'
import VideoModal from './VideoModal';


const UploadList = ({videos}) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [showBookmarked, setShowBookmarked] = useState(false);
    const openModal = (video) => {
        setSelectedVideo(video);
      };
    
      const closeModal = () => {
        setSelectedVideo(null);
      };

      const toggleBookmark = (video) => {
        if (bookmarkedVideos.includes(video)) {
          // Remove from bookmarks
          const updatedBookmarks = bookmarkedVideos.filter((v) => v !== video);
          setBookmarkedVideos(updatedBookmarks);
        } else {
          // Add to bookmarks
          setBookmarkedVideos([...bookmarkedVideos, video]);
        }
      };
    
      const isBookmarked = (video) => {
        return bookmarkedVideos.includes(video);
      }
    return (
        <div>
        <h2>Video List</h2>
        <button onClick={() => setShowBookmarked(false)}>Show All</button>
        <button onClick={() => setShowBookmarked(true)}>Show Bookmarked</button>
        <ul>
          {videos.map((video, index) => {
            if (!showBookmarked || isBookmarked(video)) {
              return (
                <li style={{listStyle:'none'}} key={index}>
                  <span style={{cursor:'pointer',fontWeight:'bold'}} onClick={() => openModal(video) }>{video.name}</span>
                  <button onClick={() => toggleBookmark(video)}>
                    {isBookmarked(video) ? 'Unbookmark' : 'Bookmark'}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={closeModal} />
        )}
      </div>
      );
}

export default UploadList