import type { PackageId, Package } from "./ComplexesData";
import styles from './Complexes.module.css'
import checkmark from '../../assets/images/complexesMain/checkmark.png'
import { AnimatePresence, motion } from "framer-motion"

type mobProps = {
    packages: Package[];
    activeId: PackageId;
    onChange: (id: PackageId) => void;
}

export function ComplexesMobile({
    packages,
    activeId,
    onChange }: mobProps) {
    const basicPack = packages.find((item) => item.id == 'basic');
    const optimalPack = packages.find((item) => item.id == 'optimal');
    const premiumPack = packages.find((item) => item.id == 'premium');

    const activePack = packages.find((item) => item.id == activeId);
    if (!activePack || !basicPack || !optimalPack || !premiumPack) {
        return null;
    }

    return (
        <>
            <div className={styles['desktop-change']}>
                <div className={`${activeId == 'basic' ? styles['desktop-change__opt-active'] : ''} ${styles['desktop-change__opt']}`} onClick={() => onChange("basic")}>
                    <div className={styles['desktop-change__opt-wrapper']}>
                        <div>
                            <h3 className={` ${activeId == 'basic' ? styles['desktop-change__opt-title--active'] : ''} ${styles['desktop-change__opt-title']} `}>{basicPack.title}</h3>
                            <span className={` ${activeId == 'basic' ? styles['desktop-change__opt-line--active'] : styles['desktop-change__opt-line']} `}></span>
                        </div>
                        <div className={`${styles['desktop-change__opt-prices']} ${activeId == 'basic' ? styles['desktop-change__opt-prices--active'] : ''}`}>
                            <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'basic' ? styles['desktop-change__opt-price--active'] : ''} `}>
                                <p className={` ${activeId == 'basic' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>1 класс</p>
                                <span className={` ${activeId == 'basic' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Малоразмерные автомобили -<br /> седан, хэтчбэк</span>
                                <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'basic' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{basicPack.price1}</p>
                            </div>
                            <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'basic' ? styles['desktop-change__opt-price--active'] : ''} `}>
                                <p className={` ${activeId == 'basic' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>2 класс</p>
                                <span className={` ${activeId == 'basic' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Среднеразмерные автомобили,<br /> бизнес-класс, кроссоверы</span>
                                <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'basic' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{basicPack.price2}</p>
                            </div>
                            <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'basic' ? styles['desktop-change__opt-price--active'] : ''} `}>
                                <p className={` ${activeId == 'basic' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>3 класс</p>
                                <span className={` ${activeId == 'basic' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Представительский класс,<br /> спорткары, минивэны, джипы</span>
                                <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'basic' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{basicPack.price3}</p>
                            </div>
                        </div>
                    </div>
                    <button className={` ${activeId == 'basic' ? styles['desktop-change__opt-button--active'] : styles['desktop-change__opt-button']} `}>Записаться</button>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {activeId == 'basic' && (
                    <motion.div className={styles['desktop-package']}
            initial = {{
                height: 0,
                opacity: 0,
                y: -10
            }}
            animate = {{
                height: "auto",
                opacity: 1,
                y: 0,
            }}
            exit={{
                height: 0,
                opacity: 0,
                y: -10,
            }}
            transition={{
                height: {
                    duration: 0.35,
                    ease: "easeOut",
                },
                opacity: {
                    duration: 0.12,
                    ease: "easeOut",
                },
                y: {
                    duration: 0.2,
                    ease: "easeOut",
                }
            }}>
                <div className={styles['desktop-package__wrapper']}>
                    <h2 className={styles['desktop-package__title']}>услуги, входящие в<br className={styles['desktop-package__title-br']}/> тариф<br className={styles['desktop-package__title-desktopbr']}/> <span className={styles['desktop-package__title-high']}>"{basicPack.title}"</span></h2>
                    <div className={styles['desktop-package__services']}>
                        {basicPack.services.map((service) => {
                            return (
                                <p className={styles['desktop-package__service']} key={service}>
                                    <img src={checkmark} alt="checkmark" className={styles['desktop-package__service-checkmark']} />
                                    <span className={styles['desktop-package__service-text']}>{service}</span>
                                </p>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
                )}
            </AnimatePresence>
            <div className={`${activeId == 'optimal' ? styles['desktop-change__opt-active'] : ''} ${styles['desktop-change__opt']}`} onClick={() => onChange("optimal")}>
                <div className={styles['desktop-change__opt-wrapper']}>
                    <div>
                        <h3 className={` ${activeId == 'optimal' ? styles['desktop-change__opt-title--active'] : ''} ${styles['desktop-change__opt-title']} `}>{optimalPack.title}</h3>
                        <span className={` ${activeId == 'optimal' ? styles['desktop-change__opt-line--active'] : styles['desktop-change__opt-line']} `}></span>
                    </div>
                    <div className={`${styles['desktop-change__opt-prices']} ${activeId == 'optimal' ? styles['desktop-change__opt-prices--active'] : ''}`}>
                        <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'optimal' ? styles['desktop-change__opt-price--active'] : ''} `}>
                            <p className={` ${activeId == 'optimal' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>1 класс</p>
                            <span className={` ${activeId == 'optimal' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Малоразмерные автомобили -<br /> седан, хэтчбэк</span>
                            <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'optimal' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{optimalPack.price1}</p>
                        </div>
                        <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'optimal' ? styles['desktop-change__opt-price--active'] : ''} `}>
                            <p className={` ${activeId == 'optimal' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>2 класс</p>
                            <span className={` ${activeId == 'optimal' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Среднеразмерные автомобили,<br /> бизнес-класс, кроссоверы</span>
                            <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'optimal' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{optimalPack.price2}</p>
                        </div>
                        <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'optimal' ? styles['desktop-change__opt-price--active'] : ''} `}>
                            <p className={` ${activeId == 'optimal' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>3 класс</p>
                            <span className={` ${activeId == 'optimal' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Представительский класс,<br /> спорткары, минивэны, джипы</span>
                            <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'optimal' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{optimalPack.price3}</p>
                        </div>
                    </div>
                </div>
                <button className={` ${activeId == 'optimal' ? styles['desktop-change__opt-button--active'] : styles['desktop-change__opt-button']} `}>Записаться</button>
            </div>
            <AnimatePresence initial={false}>
                {activeId == 'optimal' && (
                    <motion.div className={styles['desktop-package']}
            initial = {{
                height: 0,
                opacity: 0,
                y: -10
            }}
            animate = {{
                height: "auto",
                opacity: 1,
                y: 0,
            }}
            exit={{
                height: 0,
                opacity: 0,
                y: -10,
            }}
            transition={{
                height: {
                    duration: 0.35,
                    ease: "easeOut",
                },
                opacity: {
                    duration: 0.3,
                    ease: "easeOut",
                },
                y: {
                    duration: 0.2,
                    ease: "easeOut",
                }
            }}>
                <div className={styles['desktop-package__wrapper']}>
                    <h2 className={styles['desktop-package__title']}>услуги, входящие в<br className={styles['desktop-package__title-br']}/> тариф<br className={styles['desktop-package__title-desktopbr']}/> <span className={styles['desktop-package__title-high']}>"{optimalPack.title}"</span></h2>
                    <div className={styles['desktop-package__services']}>
                        {optimalPack.services.map((service) => {
                            return (
                                <p className={styles['desktop-package__service']} key={service}>
                                    <img src={checkmark} alt="checkmark" className={styles['desktop-package__service-checkmark']} />
                                    <span className={styles['desktop-package__service-text']}>{service}</span>
                                </p>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
                )}
            </AnimatePresence>
            <div className={` ${styles['desktop-change__opt']} ${activeId == 'premium' ? styles['desktop-change__opt-active'] : ''}`} onClick={() => onChange("premium")}>
                <div className={styles['desktop-change__opt-wrapper']}>
                    <div>
                        <h3 className={` ${styles['desktop-change__opt-title']} ${activeId == 'premium' ? styles['desktop-change__opt-title--active'] : ''} `}>{premiumPack.title}</h3>
                        <span className={` ${activeId == 'premium' ? styles['desktop-change__opt-line--active'] : styles['desktop-change__opt-line']} `}></span>
                    </div>
                    <div className={`${styles['desktop-change__opt-prices']} ${activeId == 'premium' ? styles['desktop-change__opt-prices--active'] : ''}`}>
                        <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'premium' ? styles['desktop-change__opt-price--active'] : ''} `}>
                            <p className={` ${activeId == 'premium' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>1 класс</p>
                            <span className={` ${activeId == 'premium' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Малоразмерные автомобили -<br /> седан, хэтчбэк</span>
                            <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'premium' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{premiumPack.price1}</p>
                        </div>
                        <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'premium' ? styles['desktop-change__opt-price--active'] : ''} `}>
                            <p className={` ${activeId == 'premium' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>2 класс</p>
                            <span className={` ${activeId == 'premium' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Среднеразмерные автомобили,<br /> бизнес-класс, кроссоверы</span>
                            <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'premium' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{premiumPack.price2}</p>
                        </div>
                        <div className={` ${styles['desktop-change__opt-price']} ${activeId == 'premium' ? styles['desktop-change__opt-price--active'] : ''} `}>
                            <p className={` ${activeId == 'premium' ? styles['desktop-change__opt-price__title--active'] : ''} ${styles['desktop-change__opt-price__title']} `}>3 класс</p>
                            <span className={` ${activeId == 'premium' ? styles['desktop-change__opt-price__text--active'] : ''} ${styles['desktop-change__opt-price__text']} `}>Представительский класс,<br /> спорткары, минивэны, джипы</span>
                            <p className={` ${styles['desktop-change__opt-prices__price']} ${activeId == 'premium' ? styles['desktop-change__opt-prices__price--active'] : ''}`}>{premiumPack.price3}</p>
                        </div>
                    </div>
                </div>
                <button className={` ${activeId == 'premium' ? styles['desktop-change__opt-button--active'] : styles['desktop-change__opt-button']} `}>Записаться</button>
            </div>
            <AnimatePresence initial={false}>
                {activeId == 'premium' && (
                    <motion.div className={styles['desktop-package']}
            initial = {{
                height: 0,
                opacity: 0,
                y: -10
            }}
            animate = {{
                height: "auto",
                opacity: 1,
                y: 0,
            }}
            exit={{
                height: 0,
                opacity: 0,
                y: -10,
            }}
            transition={{
                height: {
                    duration: 0.35,
                    ease: "easeOut",
                },
                opacity: {
                    duration: 0.12,
                    ease: "easeOut",
                },
                y: {
                    duration: 0.2,
                    ease: "easeOut",
                }
            }}>
                <div className={styles['desktop-package__wrapper']}>
                    <h2 className={styles['desktop-package__title']}>услуги, входящие в<br className={styles['desktop-package__title-br']}/> тариф<br className={styles['desktop-package__title-desktopbr']}/> <span className={styles['desktop-package__title-high']}>"{premiumPack.title}"</span></h2>
                    <div className={styles['desktop-package__services']}>
                        {premiumPack.services.map((service) => {
                            return (
                                <p className={styles['desktop-package__service']} key={service}>
                                    <img src={checkmark} alt="checkmark" className={styles['desktop-package__service-checkmark']} />
                                    <span className={styles['desktop-package__service-text']}>{service}</span>
                                </p>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}