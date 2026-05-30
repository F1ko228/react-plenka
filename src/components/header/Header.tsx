import styles from './Header.module.css'
import checkmark from '../../assets/images/header/checkmark.svg'
import { motion } from 'framer-motion'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles['header__container']}>
                    <motion.h1 
                        className={styles['header_containerTitle']}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition= {{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                        Plenka<br className={styles['header__transfer']}/> detailing
                    </motion.h1>
                    <div className={styles['header__containerGap']}>
                        <motion.div 
                            className={styles['header__containerGap__line']}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition= {{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            style= {{ transformOrigin: "left center" }}></motion.div>
                        <motion.div className={styles['header__containerGap__circle']}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition= {{ duration: 0.7, ease: "easeOut", delay: 0.3 }}></motion.div>
                        <motion.div className={`${styles['header__containerGap__line']} ${styles['header__containerGap__line--hiiden']}`}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition= {{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            style= {{ transformOrigin: "right center" }}></motion.div>
                    </div>
                    <motion.p className={styles['header__containerText']}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition= {{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                        >
                            Оклейка, защита авто<br className={styles['header__transfer']}/> и тонировка в Томске</motion.p>
                </div>
                <div className={styles['header__bottomContainer']}>
                    <motion.div className={styles['header__containerList']}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition= {{ duration: 0.6, ease: "easeOut", delay: 1 }}
                    >
                        <p className={styles['header__containerListPlus']}>
                            <img className={styles['header__checkmark']} src={checkmark}  alt='checkmark'/>
                            <p>Обновляем вид</p>
                        </p>
                        <p className={styles['header__containerListPlus']}>
                            <img className={styles['header__checkmark']} src={checkmark} alt='checkmark'/>
                            <p>Бронируем кузов</p>
                        </p>    
                        <p className={styles['header__containerListPlus']}>
                            <img className={styles['header__checkmark']} src={checkmark} alt='checkmark'/>
                            <p>Сохраняем нервы</p>
                        </p>
                    </motion.div>
                    <motion.button className={styles['header__containerButton']}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition= {{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                        >
                            Получить консультацию</motion.button>
                    <div className={styles['header__containerButtons']}>
                        <motion.button className={styles['header__containerButtons__make']}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition= {{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                            >
                                Записаться</motion.button>
                        <motion.button className={styles['header__containerButtons__consultation']}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition= {{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                            >
                                Получить консультацию</motion.button>
                    </div>
                </div>
            </header>        
        </>
    )

}