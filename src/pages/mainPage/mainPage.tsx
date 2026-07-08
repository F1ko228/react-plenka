import { Header } from '../../components/header/Header'
import styles from './mainPage.module.css'

export function MainPage() {
    return (
        <section className={styles.main}>
            <Header />
            <section className={styles['why']}>
                <div className={styles['why-wrapper']}>
                    <h1 className={styles['why__title']}>Почему стоит<br/> обратиться к нам</h1>
                    <span className={styles['why__line']}></span>
                </div>
                <div className={styles['why-subtitles']}>
                    <div className={styles['why-excerpt']}>
                        <h2 className={styles['why-exceptr__titles']}>
                            Профессиональный подход —<br/> видимый результ
                        </h2>
                        <h2 className={styles['why-exceptr__titles']}>
                            Наша цель:
                        </h2>
                    </div>
                    <div className={styles['why-text']}>
                        <p className={styles['why-text__elem']}>Работаем с соблюдением критериев качества в<br/>чистых просторных боксах.</p>
                        <p className={styles['why-text__elem']}>Снова влюбить клиента в свой автомобиль, а не<br/>отработать очередную запись</p>
                    </div>
                </div>
                
            </section>
        </section>
)
}