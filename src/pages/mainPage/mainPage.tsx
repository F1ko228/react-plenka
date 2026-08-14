import { Header } from '../../components/Header/Header'
import styles from './MainPage.module.css'
import protector from '../../assets/images/firstMain/protectors.png'
import { Reveal } from '../../components/Animations/Reveal'
import { Complexes } from '../../components/Complexes/Complexes'

export function MainPage() {
    return (
        <section className={styles.main}>
            <Header />
            <img src={protector} alt="protector" className={styles['why_protector__first']}/>
            <img src={protector} alt="protector" className={styles['why_protector__second']}/>
            <Reveal as='section' className={styles['why']} variant='up'>
                <div className={styles['why-wrapper']}>
                    <h1 className={styles['why__title']}>Почему стоит<br/> обратиться к нам</h1>
                    <span className={styles['why__line']}></span>
                </div>
                <div className={styles['why-subtitles']}>
                    <div className={styles['why-excerpt']}>
                        <h2 className={styles['why-exceptr__titles']}>
                            Профессиональный <br className={styles['why-excerpt__br-mob']}/>подход —<br className={styles['why-excerpt__br']}/> видимый результ
                        </h2>
                        <p className={styles['why-text__elem']}>Работаем с соблюдением критериев <br className={styles['why-excerpt__br-mob']}/>качества в <br className={styles['why-excerpt__br-desk']}/>чистых <br className={styles['why-excerpt__br-tabl']}/>просторных боксах.</p>
                    </div>
                    <div className={styles['why-excerpt']}>
                        <h2 className={styles['why-exceptr__titles']}>
                            Наша цель:
                        </h2>
                        <p className={styles['why-text__elem']}>Снова влюбить клиента в свой <br className={styles['why-excerpt__br-mob']}/>автомобиль, а не<br className={styles['why-excerpt__br-desk']}/>отработать <br className={styles['why-excerpt__br-tabl']}/><br className={styles['why-excerpt__br-mob']}/>очередную запись</p>
                    </div> 
                </div>
                <div className={styles['why-blocks']}>
                    <div className={styles['why-blocks__rect']}>
                        <h2 className={styles['why-blocks__rect-title']}>10 лет</h2>
                        <p className={styles['why-blocks__rect-text']}>Работаем с плёнкой и автомобилями</p>
                    </div>
                    <div className={styles['why-blocks__wrapper']}>
                        <div className={styles['why-blocks__lines']}>
                            <span className={styles['why-blocks__line']}></span>
                            <div className={styles['why-blocks__line-wrapper']}>
                                <span className={` ${styles['why-blocks__line']} ${styles['why-blocks__line--vertical']}`}></span>
                                <span className={` ${styles['why-blocks__line']} ${styles['why-blocks__line--vertical']}`}></span>
                            </div>
                            <span className={styles['why-blocks__line']}></span>
                        </div>
                        <div className={styles['why-blocks__rect']}>
                            <h2 className={styles['why-blocks__rect-title']}>Мастерство</h2>
                            <p className={styles['why-blocks__rect-text']}>Наши команда детейлеров обладает опытом работы от 5 лет, а матереалы, которыми мы выполняем работу - лучшие на рынке</p>
                        </div>
                    </div>
                    <div className={styles['why-blocks__rect']}>
                        <h2 className={styles['why-blocks__rect-title']}>Гарантия</h2>
                        <p className={styles['why-blocks__rect-text']}>Гарантия распространяется на все виды работ</p>
                    </div>
                    <div className={styles['why-blocks__rect']}>
                        <h2 className={styles['why-blocks__rect-title']}>Огромный список <br className={styles['why-blocks__rect-br']}/>услуг</h2>
                        <p className={styles['why-blocks__rect-text']}>Наши команда детейлеров обладает опытом работы от 5 лет, а матереалы, которыми мы выполняем работу - лучшие на рынке</p>
                    </div> 
                </div>
            </Reveal>
            <Complexes />
            <section>
                
            </section>
        </section>
)
}