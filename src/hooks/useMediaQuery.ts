import { useState, useEffect } from 'react'

export function  useMediaQuery(query: string): boolean {
    const [ matches, setMatches ] = useState<boolean>(() => {
        return window.matchMedia(query).matches;
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        console.log(window.matchMedia(query));
        console.log((query));

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}