import { createContext } from 'react';
import { THEMES } from '../const/themes';

export interface ThemeContextProps {
    theme?: THEMES;
    setTheme?: (theme: THEMES) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
