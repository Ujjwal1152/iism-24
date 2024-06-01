import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming Bootstrap
import './videogallery.css';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate fetching data from an API (replace with actual API call if needed)
      const fetchVideos = async () => {
        try {
          // Example video data 
          const videoData = [
            { id: 1, src: 'https://www.youtube.com/embed/VIDEO_ID_1', title: 'Video Title 1' },
            { id: 2, src: 'https://www.youtube.com/embed/VIDEO_ID_2', title: 'Video Title 2' },
            { id: 3, src: 'https://www.youtube.com/embed/VIDEO_ID_3', title: 'Video Title 3' },
            // ... add more videos
          ];
  
          setVideos(videoData); 
  
        } catch (error) {
          console.error('Error fetching videos:', error); 
        } finally {
          setIsLoading(false); 
        }
      };
      fetchVideos();
    }, []);

  return (
    <section className="latest-videos">
      <div className="container"> 
        <h2 className="section-heading">Latest Videos</h2>
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row"> 
            {videos.map((video) => (
              <div key={video.id} className="col-md-4 mb-4"> 
                <div className="card"> {/* Bootstrap Card Component */}
                  {/* Use a custom video player component or iframe */}
                  <iframe 
                    width="100%" 
                    height="315" 
                    src={video.src} 
                    title={video.title} 
                    frameBorder="0" 
                    allowFullScreen 
                  ></iframe>
                  <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    {/* Optional: Add a description or link */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


export default VideoGallery;