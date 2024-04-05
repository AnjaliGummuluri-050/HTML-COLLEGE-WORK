import React, { useRef, useEffect } from "react";


interface InfoBoxProps {
  title: string;
  description: string;
  animationName: string; 
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  description,
  animationName = "fadeIn",
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      rootMargin: "200px", 
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        boxRef.current?.classList.add("visible", animationName); 
      } else {
        boxRef.current?.classList.remove("visible", animationName); 
      }
    }, options);

    observer.observe(boxRef.current!); 

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div ref={boxRef} className="info-box">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoBox;
