import Slider from './Slider';
import styles from './../../styles/Home.module.css';
import Image from 'next/image';
import PercentageBar from './PercentageBar';
import Timer from './Timer';
import Logo from '../images/logo.png';
import BottomBar from './BottomBar';
 const Card = () => {
    return (
      <div className={styles.zimoCard}>
        <Timer />
        <Slider />
        <PercentageBar />
        <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={50}
            className={styles.zimoLogo}
          />
        <BottomBar />
      </div>
    )
  }
  export default Card;