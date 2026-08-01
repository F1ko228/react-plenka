import type { PackageId, Package } from "./ComplexesData";
import styles from './Complexes.module.css'
import checkmark from '../../assets/images/complexesMain/checkmark.png'

type deskProps = {
    packages: Package[];
    activeId: PackageId;
    onChange: (id: PackageId) => void;
}

export function ComplexesDesktop({
    packages,
    activeId,
    onChange}: deskProps) {
        const basicPack = packages.find((item) => item.id == 'basic');
        const optimalPack = packages.find((item) => item.id == 'optimal');
        const premiumPack = packages.find((item) => item.id == 'premium');

        const activePack = packages.find((item) => item.id == activeId);
        if(!activePack || !basicPack || !optimalPack || !premiumPack) {
            return null;
        }

        return (
            <section className={styles.desktop}>
                <div className={styles['desktop-package']}>
                    <div className={styles['desktop-package__wrapper']}>
                        <h2 className={styles['desktop-package__title']}>услуги, входящие в<br /> тариф <span className={styles['desktop-package__title-high']}>"{ activePack.title }"</span></h2>
                        <div className={styles['desktop-package__services']}>
                                { activePack.services.map((service) => { return (
                                    <p className={styles['desktop-package__service']}>
                                        <img src={ checkmark } alt="checkmark" className={styles['desktop-package__service-checkmark']}/>
                                        <span className={styles['desktop-package__service-text']} key={service}>{ service }</span>
                                    </p>
                                )}) }
                        </div>
                    </div>
                </div>
                <div className={styles['desktop-change']}>
                    <div className={` ${styles['desktop-change__opt']} ${ activeId == 'basic' ? styles['desktop-change__opt-active'] : '' }`} onClick={ () => onChange("basic") }>
                        <div className={styles['desktop-change__opt-wrapper']}>
                                <h3 className={styles['desktop-change__opt-title']}>{ basicPack.title }</h3>
                                <div className={styles['desktop-change__opt-prices']}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                        </div>
                    </div>
                    <div className={` ${styles['desktop-change__opt']} ${ activeId == 'optimal' ? styles['desktop-change__opt-active'] : '' }`} onClick={ () => onChange("optimal")}>
                        <div className={styles['desktop-change__opt-wrapper']}>
                                <h3 className={styles['desktop-change__opt-title']}>{ optimalPack.title }</h3>
                                <div className={styles['desktop-change__opt-prices']}>
                                    <div className={styles['desktop-change__opt-price']}>
                                        <p className={styles['desktop-change__opt-price__title']}>1 класс</p>
                                        <span className={styles['desktop-change__opt-price__text']}>Малоразмерные автомобили - седан, хэтчбэк</span>
                                    </div>
                                    <div className={styles['desktop-change__opt-price']}>
                                        2 класс
                                        <span>Среднеразмерные автомобили, бизнес-класс, кроссоверы</span>
                                    </div>
                                    <div className={styles['desktop-change__opt-price']}>
                                        3 класс
                                        <span>Представительский класс, спорткары, минивэны, джипы</span>
                                    </div>
                                </div>
                        </div>                        
                    </div>
                    <div className={` ${styles['desktop-change__opt']} ${ activeId == 'premium' ? styles['desktop-change__opt-active'] : '' }`} onClick={ () => onChange("premium")}>
                        <div className={styles['desktop-change__opt-wrapper']}>
                                <h3 className={styles['desktop-change__opt-title']}>{ premiumPack.title }</h3>
                                <div className={styles['desktop-change__opt-prices']}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                        </div>                        
                    </div>
                </div>
            </section>
        )
    }