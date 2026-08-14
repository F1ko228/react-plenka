import { createContext } from "react";

export type MenuContextValue = {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextValue | null>(null);