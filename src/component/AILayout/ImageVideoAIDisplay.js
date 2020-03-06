import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './aiStyle.css';


export default function VideoAIDisplay(props) {

  let currentVideoId;

  const data = props.categoryData.data.map(element => element);

  const playVideo = videoId => {
    const myVideo = document.getElementById(videoId);
    myVideo.muted = false;
    currentVideoId = videoId;
    if (myVideo && myVideo.paused)
      myVideo.play();
  };

  const pauseVideo = videoId => {
    const myVideo = document.getElementById(videoId);
    myVideo.pause();
  };

  const pauseVideos = () => {
    const myVideo = document.getElementById(currentVideoId);
    if (myVideo && !myVideo.paused)
      myVideo.pause();
  };

  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false} onChange={() => pauseVideos()}>
        {data.map(item => {
          return (
            <React.Fragment key={item.video_id}>
              {props.videoState ? (<div onMouseEnter={() => playVideo(item.video_id)}
                onMouseLeave={() => pauseVideo(item.video_id)} >
                <video
                  id={item.video_id}
                  preload='none'
                  src={item.video_url} type='video/mp4'
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  muted
                  onPlay={() => playVideo(item.video_id)}
                >
                </video>
              </div>) : (<div>
                <img src={item.image_url} alt={item.video_name} />
              </div>)}
              <div className='caption'>
                {item.video_name}
              </div>
            </React.Fragment>
          );
        })}
      </Carousel>
    </div>
  );
}
