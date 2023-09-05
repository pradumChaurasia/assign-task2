
import './App.css';
import React, { useState } from 'react';
import Upload from './Components/Upload';
import UploadList from './Components/UploadList';

function App() {
  const [videos,setVideos]=useState([])
  const addVideo=(video)=>{
    setVideos([...videos,video]);
  }
  return (
    <div className="App">
      <Upload onUpload={addVideo}/>
      <UploadList videos={videos}/>
    </div>
  );
}

export default App;
