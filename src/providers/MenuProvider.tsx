import { useState, type ReactNode } from 'react'
import { MenuContext } from './MenuContext';

type MenuProviderProps= {
    children: ReactNode,
};  

export function MenuProvider({ children }: MenuProviderProps) {
    const [isMenuOpen, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(true);
    }

    const closeMenu = () => {
        setIsOpenMenu(false);
    }

    const toggleMenu = () => {
        setIsOpenMenu((current) => !current);
    }

    return (
        <MenuContext.Provider
        value={{
            isMenuOpen,
            openMenu,
            closeMenu,
            toggleMenu,
        }}
        >
            {children}
        </MenuContext.Provider>
    );
}

