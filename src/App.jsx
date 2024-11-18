import React, { useState, useEffect } from "react";
import "./index.css";
import Plx from "react-plx";

export default function App() {
  const handleClick = () => {
    location.href = "https://cest-watches.com"; // Opens in a same tab
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSrc = windowWidth <= 750 ? "mob3.0.png" : "nnn.png";
  const imageSrc2 = windowWidth <= 750 ? "mob3.png" : "bg2.png";
  return (
    <div className="scrollable-content">
       <Plx 
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 20.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
          
        }}
      >
        <img className=" mq1050:w-[100%] mq1050:h-[100vh] mq1050:object-cover mq1050:object-center" style={{ width: "100%" }} src={imageSrc} alt="foreground" />
      </Plx>
      
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              },
              // {
              //   startValue: 1,
              //   endValue: 0,
              //   property: "opacity"
              // }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          backgroundColor: "black", 
          backgroundBlendMode: "multiply",
          zIndex: 1,
        }}
      >
        <img className=" mq1050:w-[100%] mq1050:h-[100vh] mq1050:object-cover mq1050:object-center mq1050:ml-[1vh]"
          style={{ width: "220%" }}
          src={imageSrc2}
          alt="background"
        />
        
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0, 
            end: 600, 
            properties: [
              {
                startValue: 0,
                 endValue: 1,
                property: "opacity"
              },
              {
                startValue: 300, 
                endValue: 0, 
                property: "translateY"
              },
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 8.6,
          top: "55%", 
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 300,
          bottom:"-20%"
        }}
      >
       
<button className="cursor-pointer relative px-20 py-3 border border-white rounded-md bg-transparent hover:bg-white/10 transition-colors duration-300" onClick={handleClick}>
  <span className="font-light text-white text-xl tracking-[0.2em]">ENTER</span>
</button>
        {/* <img
          style={{
            width: "30vw",
            borderRadius: "100%", 
            transition: "border-radius 0.5s ease" 
          }}
          src="watch.jpg"
          alt="Watch"
        /> */}
      </Plx>

      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh", 
          width: "100%"
        }}
      >
        <div
          style={{
            // background: "#000", 
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}
