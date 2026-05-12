import styles from './Header.module.css'

export function Header() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles['header__container']}>
                    <h1 className={styles['header_containerTitle']}>Plenka detailing</h1>
                    <div className={styles['header__containerGap']}>
                        <div className={styles['header__containerGap__line']}></div>
                        <div className={styles['header__containerGap__circle']}></div>
                        <div className={styles['header__containerGap__line']}></div>
                    </div>
                    <p className={styles['header__containerText']}>Антигравийная плёнка, полировка и защита авто в Томске</p>
                </div>
            </header>        
        </>
    )

}