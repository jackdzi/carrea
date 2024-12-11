"use client";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => {
  return (
    <ParallaxProvider>
      <div
        style={{
          margin: 0,
          padding: 0,
          width: '100vw',
          height: '20vh',
          backgroundColor: 'transparent',
          overflow: 'hidden'
        }}
      >
        <Parallax
          // Starts the image from the right (50%) and moves it to center (0%)
          translateX={['0%', '-50%']}
          style={{
            overflow: 'hidden',
            width: '150vw',
            height: '100vh',
            margin: 0,
            padding: 0
          }}
        >
          <img
            src="/images/rice_wallpaper.jpg"
            alt="Scrolling Background"
            style={{
              display: 'block',
              width: '100%',
              height: '20%',
              objectFit: 'cover',
              margin: 0,
              padding: 0
            }}
          />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
