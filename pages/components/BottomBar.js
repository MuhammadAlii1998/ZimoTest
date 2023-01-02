import styles from './../../styles/Home.module.css';
const BottomBar = () => {
    return(
        <div className={styles.zimoBottomBar}>
            <span>25.00 GBP </span>
            <span className={styles.zimoBuy}>BUY ENTRY NOW</span>
        </div>
    )
}
export default BottomBar;