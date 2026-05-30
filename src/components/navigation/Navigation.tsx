import styles from '../navigation/Navigation.module.css'
import logo from '../../assets/images/nav/logo.svg'
import { useState } from "react"
import { motion } from 'framer-motion'
 
export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav 
            className={styles.nav}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition= {{ dureation: 0.5, ease: "easeOut" }}>
                <div className={styles["nav__container"]}>
                    <a href="#">
                        <img className={styles['nav__logo']} src={logo} alt="logo" />
                    </a>
                    <ul className={styles["nav__titles"]}>
                        <li className={styles["nav__title"]}>
                            <a href="" className={styles["nav__titleLink"]}>Пакеты и цены</a>
                            </li>
                        <li className={styles["nav__title"]}>
                            <a href="" className={styles["nav__titleLink"]}>Услуги</a>
                            </li>
                        <li className={styles["nav__title"]}>
                            <a href="" className={styles["nav__titleLink"]}>Наши работы</a>
                            </li>
                        <li className={styles["nav__title"]}>
                            <a href="" className={styles["nav__titleLink"]}>Отзывы</a>
                            </li>
                        <li className={styles["nav__title"]}>
                            <a href="" className={styles["nav__titleLink"]}>Контакты</a>
                            </li>
                    </ul>
                    <button className={styles['nav__button']}>
                        Записаться
                    </button>
                    <button className={styles['nav__burger']} aria-label='Открыть меню' aria-controls='mobile-menu' aria-expanded='isOpen'>
                        <span className={styles['nav__burgerLine']}></span>
                        <span className={styles['nav__burgerLine']}></span>
                        <span className={styles['nav__burgerLine']}></span>
                    </button>
                </div>
            </motion.nav>
        </>
    )

}