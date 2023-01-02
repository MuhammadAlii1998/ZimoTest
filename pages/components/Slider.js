import styles from './../../styles/Home.module.css';
import Image from 'next/image';
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.png';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [activeImage, setActiveImage] =useState(Img1);
  useEffect(() => {
    const timer = setInterval(() => {
      if(activeImage.src === "/_next/static/media/img1.c4fb689d.jpg")
      setActiveImage(Img2);
      else setActiveImage(Img1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [activeImage]);
    
    return (
      <div >
         <Image
            src={activeImage}
            alt="Picture"
            width={450}
            height={440}
            className={styles.zimoSlider}
          />
          
      </div>
    )
  }
  export default Slider;