import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { THEMES } from '../../const/themes';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: THEMES) => void) => void;
    theme: THEMES;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: THEMES) => void) => {
        let newTheme: THEMES;

        switch (theme) {
            case THEMES.LIGHT:
                newTheme = THEMES.DARK;
                break;
            default:
                newTheme = THEMES.LIGHT;
        }

        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || THEMES.LIGHT,
        toggleTheme,
    };
}
