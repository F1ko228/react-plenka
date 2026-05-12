import styles from '../navigation/Navigation.module.css'

export function Navigation() {

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles["nav__container"]}>
                    <a href="#">
                        <img src="./src/assets/images/nav/logo.svg" alt="logo" />
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
                </div>
            </nav>
        </>
    )

}