import type { PackageId, Package } from "./ComplexesData";
import styles from './Complexes.module.css'

type mobProps = {
    packages: Package[];
    activeId: PackageId;
    onChange: (id: PackageId) => void;
}

export function ComplexesMobile({
    packages,
    activeId,
    onChange}: mobProps) {
        const basicPack = packages.find((item) => item.id == 'basic');
        const optimalPack = packages.find((item) => item.id == 'optimal');
        const premiumPack = packages.find((item) => item.id == 'premium');
        
        const activePack = packages.find((item) => item.id == activeId);
        
        return (
            <section className={styles.desktop}>
                123
            </section>
        )
    }