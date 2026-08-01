import styles from '../../components/Complexes/Complexes.module.css'
import { useState } from "react"
import { Reveal } from "../Animations/Reveal"
import { ComplexesDesktop } from './ComplexesDesktop'
import { ComplexesMobile } from './ComplexesMobile'
import type { PackageId } from './ComplexesData'
import { packagesDeteiling, packagesWrapping } from './ComplexesData'
import { useMediaQuery } from '../../hooks/useMediaQuery'   

export function Complexes() {
    const [activeIdWrap, setActiveIdWrap] = useState<PackageId>('basic');
    const [activeIdDet, setActiveIdDet] = useState<PackageId>('basic');
    const isMobile = useMediaQuery("(max-width: 1440px)");

    return (
        <Reveal variant='up' as='section' className={styles.complexes}>
            <div className={styles['complexes__block-title']}>
                <h1 className={styles['complexes-title']}>Комплексы</h1>
                <span className={styles['complexes-line']}></span>
            </div>

            <div className={styles['complexes-elem']}>
                <h2 className={styles['complxes-elem__title']}>Оклейка Базовых зон риска</h2>
                {isMobile ? <ComplexesMobile packages={packagesWrapping} activeId={activeIdWrap} onChange={setActiveIdWrap} /> : <ComplexesDesktop packages={packagesWrapping} activeId={activeIdWrap}  onChange={setActiveIdWrap} />}
            </div>

            <div className={styles['complexes-elem']}>
                <div>
                    <h2 className={styles['complxes-elem__title']}>Детейлинг</h2>
                    <p className={styles['complxes-elem__under-title']}>(Полировка кузова, керамические покрытия)</p>
                </div>
                {isMobile ? <ComplexesMobile  packages={packagesDeteiling} activeId={activeIdDet} onChange={setActiveIdDet} /> : <ComplexesDesktop  packages={packagesDeteiling} activeId={activeIdDet} onChange={setActiveIdDet} />}
            </div>
        </Reveal>
    )
}