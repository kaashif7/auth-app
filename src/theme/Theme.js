import {DefaultTheme} from 'react-native-paper';

export const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4f46e5', // Indigo
    accent: '#f59e0b',  // Amber
    background: '#f3f4f6', // Light gray
    surface: '#fff',
    text: '#111827',
  },
};