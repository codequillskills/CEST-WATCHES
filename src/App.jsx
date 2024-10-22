import React, { useState, useEffect } from "react";
import "./styles.css";
import Plx from "react-plx";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSrc = windowWidth <= 750 ? "mob3.0.png" : "nnn.png";
  const imageSrc2 = windowWidth <= 750 ? "mobmain2.0.png" : "main4.0.png";
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
          style={{ width: "100%" }}
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
        }}
      >
       
<button class="cursor-pointer relative group overflow-hidden border-2 rounded-[20px] px-8 py-2 border-[#8D6B4F] mq450:mt-[20vh] mq450:ml-[2vw]">
  <span class="font-bold text-[#8D6B4F] text-xl relative z-10 group-hover:text-[#8D6B4F] duration-500">ENTER</span>
  <span class="absolute top-0 left-0 w-full bg-[#E1D7CA] duration-500 group-hover:-translate-x-full h-full"></span>
  <span class="absolute top-0 left-0 w-full bg-[#E1D7CA] duration-500 group-hover:translate-x-full h-full"></span>
  
    <span class="absolute top-0 left-0 w-full bg-[#E1D7CA] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
  <span class="absolute delay-300 top-0 left-0 w-full bg-[#E1D7CA] duration-500 group-hover:translate-y-full h-full"></span>
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
