'use client';
import { ThemeContext } from '@/shared/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { THEMES } from '@/shared/const/themes';

interface ThemeProviderProps {
    initialTheme?: THEMES;
    children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
    const { initialTheme, children } = props;
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState<THEMES>(initialTheme || THEMES.LIGHT);

    useEffect(() => {
        const fallbackTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES;

        if (fallbackTheme) setTheme(fallbackTheme);
    }, []);

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
}
